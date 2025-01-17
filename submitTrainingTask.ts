import { requestFinetuning } from "./features/flux/requestFinetuning";

async function submitTrainingTask() {
  const response = await requestFinetuning(
    "../ippy-images.zip",
    "ippy-finetune",
    "TOK",
    "general",
    300,
    0.00001,
    true,
    "quality",
    "full",
    32
  );

  console.log("Finetune ID:", response.id);
}

submitTrainingTask();
