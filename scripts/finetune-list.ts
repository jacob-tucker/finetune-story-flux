import { finetuneList } from "../features/flux/finetuneList";
import dotenv from "dotenv";
dotenv.config();

// Gets a list of all your finetuned models
// Run `npm run finetune-list`
async function main() {
  const list = await finetuneList();
  console.log(list);
}

main();
