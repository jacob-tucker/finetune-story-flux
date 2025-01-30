import { finetuneInference } from "../features/flux/finetuneInference";
import { getInference } from "../features/flux/getInference";
import dotenv from "dotenv";
import { registerIp } from "../features/story/registerIp";
dotenv.config();

const FINETUNE_ID = process.env.FINETUNE_ID as string;
// Replace with your prompt
const PROMPT =
  "create a realistic render of an iphone mockup with a clean, minimal ui. showcase the device frame to spotlight the key feature in the top, bottom, or middle of the device in the center of the image frame. focus on a single bold feature in the screen. take design cues from well-known apps like phantom, doordash, imessage, uber, amazon, airbnb, tinder, or twitter. avoid paragraphs of text and clutter in the ui—keep it simple and visually striking, with the following theme: " +
  'Managing subscriptions across multiple services is cumbersome and easy to forget. A "Netflix Wallet" feature auto-pays subscriptions via smart contracts that pause billing if usage drops below a threshold, with a dashboard to track all active memberships on-chain.';

// Run an inference (generate an image from a finetuned model)
// If you want to register the image on Story, set the `REGISTER_ON_STORY` environment variable to `true`
// Run `npm run inference`
async function main() {
  const inference = await finetuneInference(FINETUNE_ID, PROMPT);
  let inferenceData = await getInference(inference.id);
  while (inferenceData.status != "Ready") {
    console.log("Waiting for inference to complete...");
    await new Promise((resolve) => setTimeout(resolve, 5000));
    inferenceData = await getInference(inference.id);
  }

  console.log("Inference completed:", inferenceData);

  if (process.env.REGISTER_ON_STORY?.toLowerCase() === "true") {
    await registerIp(inferenceData);
  }
}

main();
