import { requestFinetuning } from "../features/flux/requestFinetuning";
import dotenv from "dotenv";
dotenv.config();

// Create a new finetuned model
// Run `npm run train`
async function main() {
  const response = await requestFinetuning("./ippy-images.zip", "ippy-images");
  console.log(response);
}

main();
