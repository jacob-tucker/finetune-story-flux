import axios from "axios";

export async function finetuneList() {
  const url = "https://api.us1.bfl.ai/v1/my_finetunes";
  const headers = {
    "Content-Type": "application/json",
    "X-Key": process.env.BFL_API_KEY,
  };

  try {
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    throw new Error(`Finetune listing failed: ${error}`);
  }
}
