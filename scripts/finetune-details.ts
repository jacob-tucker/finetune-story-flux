import dotenv from "dotenv";
import { finetuneDetails } from "../features/flux/finetuneDetails";
dotenv.config();

const FINETUNE_ID = process.env.FINETUNE_ID as string;

// Gets the details of a finetuned model
// Run `npm run finetune-details`
async function main() {
  const details = await finetuneDetails(FINETUNE_ID);
  console.log(details);
}

main();
