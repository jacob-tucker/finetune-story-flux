import axios from "axios";
import fs from "fs";

interface FinetunePayload {
  finetune_comment: string;
  trigger_word: string;
  file_data: string;
  iterations: number;
  mode: string;
  learning_rate: number;
  captioning: boolean;
  priority: string;
  lora_rank: number;
  finetune_type: string;
}

export async function requestFinetuning(
  zipPath: string,
  finetuneComment: string,
  triggerWord = "TOK",
  mode = "general",
  iterations = 300,
  learningRate = 0.00001,
  captioning = true,
  priority = "quality",
  finetuneType = "full",
  loraRank = 32
) {
  if (!fs.existsSync(zipPath)) {
    throw new Error(`ZIP file not found at ${zipPath}`);
  }

  const modes = ["character", "product", "style", "general"];
  if (!modes.includes(mode)) {
    throw new Error(`Invalid mode. Must be one of: ${modes.join(", ")}`);
  }

  const fileData = fs.readFileSync(zipPath);
  const encodedZip = Buffer.from(fileData).toString("base64");

  const url = "https://api.us1.bfl.ai/v1/finetune";
  const headers = {
    "Content-Type": "application/json",
    "X-Key": process.env.BFL_API_KEY,
  };

  const payload: FinetunePayload = {
    finetune_comment: finetuneComment,
    trigger_word: triggerWord,
    file_data: encodedZip,
    iterations,
    mode,
    learning_rate: learningRate,
    captioning,
    priority,
    lora_rank: loraRank,
    finetune_type: finetuneType,
  };

  try {
    const response = await axios.post(url, payload, { headers });
    return response.data;
  } catch (error) {
    throw new Error(`Finetune request failed: ${error}`);
  }
}
