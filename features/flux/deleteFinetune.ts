import axios from "axios";

export async function deleteFinetune(finetuneId: string) {
  const url = `https://api.us1.bfl.ai/v1/delete_finetune`;
  const headers = {
    "Content-Type": "application/json",
    "X-Key": process.env.BFL_API_KEY,
  };

  const payload = {
    finetune_id: finetuneId,
  };

  try {
    const response = await axios.post(url, payload, { headers });
    return response.data;
  } catch (error) {
    throw new Error(`Finetune inference failed: ${error}`);
  }
}
