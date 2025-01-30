import dotenv from "dotenv";
import { finetuneProgress } from "../features/flux/finetuneProgress";
dotenv.config();

const FINETUNE_ID = process.env.FINETUNE_ID as string;

// Gets the progress of a finetuned model to see whether or not it is done
// Run `npm run finetune-progress`
async function main() {
  const progress = await finetuneProgress(FINETUNE_ID);
  console.log(progress);
}

main();
