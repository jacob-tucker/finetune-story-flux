import axios from "axios";
import { createHash } from "crypto";
import { PinataSDK } from "pinata-web3";

const pinata = new PinataSDK({
  pinataJwt: process.env.PINATA_JWT,
});

export async function uploadJSONToIPFS(jsonMetadata: any): Promise<string> {
  const { IpfsHash } = await pinata.upload.json(jsonMetadata);
  return IpfsHash;
}

export async function uploadImageAndGetDetails(
  imageUrl: string
): Promise<{ ipfsCid: string; contentType: string; contentHash: string }> {
  try {
    const response = await axios.get(imageUrl, {
      responseType: "arraybuffer",
      validateStatus: (status) => status === 200,
    });

    const contentType = response.headers["content-type"];
    if (!contentType?.startsWith("image/")) {
      throw new Error("URL does not point to an image");
    }

    const extension = contentType.split("/")[1];
    const filename = `${Date.now()}-${Math.random()
      .toString(36)
      .slice(2)}.${extension}`;

    const buffer = Buffer.from(response.data);
    const contentHash =
      "0x" + createHash("sha256").update(buffer).digest("hex");
    const file = new File([buffer], filename, { type: contentType });

    const { IpfsHash } = await pinata.upload.file(file);
    return { ipfsCid: IpfsHash, contentType, contentHash };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Failed to fetch image: ${error.message}`);
    }
    throw error;
  }
}
