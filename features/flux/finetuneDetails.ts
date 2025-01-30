import axios from "axios";

export async function finetuneDetails(finetuneId: string) {
  const url = "https://api.us1.bfl.ai/v1/finetune_details";
  const headers = {
    "Content-Type": "application/json",
    "X-Key": process.env.BFL_API_KEY,
  };

  try {
    const response = await axios.get(url, {
      headers,
      params: { finetune_id: finetuneId },
    });
    return response.data;
  } catch (error) {
    throw new Error(`Finetune details failed: ${error}`);
  }
}
