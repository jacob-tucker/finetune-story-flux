# Finetune Images using FLUX API

Learn how to fintune a model to produce image using FLUX's Finetune API and then optionally register the outputs as IP on Story.

📚 **Full Tutorial**: https://docs.story.foundation/docs/finetune-images#/

## FLUX Finetune API

Flux announced a new Finetune API that allows you to finetune a model with existing images to produce new images similar to the inputs. You can read more about it here: https://blackforestlabs.ai/announcing-the-flux-pro-finetuning-api/

This tutorial shows you how to:

- Create a new Finetune model
- Run an inference with the model (this means generating a new image using the trained model)
- Get details about the model and the inference

## Story

Story allows you to register IP on-chain and attach license terms to it. This is especially important in the age of AI, given that most IP is AI-generated yet the legal system is extremely slow and expensive. Additionally, you can protect and monetize IP (your finetuned outputs) easily on Story. Read more about story here: https://docs.story.foundation

# How to Run the Tutorial

If you want to just run the code:

1. `npm install`
2. Change `.env.example` to `.env` and fill in your `BFL_API_KEY` by going <a href="https://api.us1.bfl.ai/auth/profile" target="_blank">here</a>.
   > ❗*NOTE: You will have to pay for credits. See the pricing page <a href="https://docs.bfl.ml/pricing/" target="_blank">here</a>.*
3. (Optional) If you want to register the image on Story, set `REGISTER_ON_STORY=true` in your `.env` and fill in the rest of the variables.

   a. `WALLET_PRIVATE_KEY`: is your Story wallet private key (no '0x' prefix)

   b. `RPC_PROVIDER_URL`: set this to `https://rpc.odyssey.storyrpc.io`

   c. `SPG_NFT_CONTRACT_ADDRESS`: run `npm run create-collection` to get this address

   d. `PINATA_JWT`: is your Pinata JWT. Get this from <a href="https://app.pinata.cloud/" target="_blank">Pinata</a>.

4. `npm run train` to train a new finetune model. This will use the images in `/ippy-images` to train the model. You can replace these with your own.
5. Add the output `FINETUNE_ID` to your `.env`
6. Run `npm run finetine-progress` to get the progress of the finetune model. You have to wait until it is no longer pending before you can run the inference.
7. `npm run inference` to create a new image using the finetune model and optionally register the output as IP on Story (if you enabled it in step 3)
