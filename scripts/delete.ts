import { deleteFinetune } from "../features/flux/deleteFinetune";
import dotenv from "dotenv";
dotenv.config();

const FINETUNE_ID = process.env.FINETUNE_ID as string;

// Deletes a finetuned model
// Run `npm run delete`
async function deleteFinetuneScript() {
  const x = await deleteFinetune(FINETUNE_ID);
  console.log(x);
}

deleteFinetuneScript();
