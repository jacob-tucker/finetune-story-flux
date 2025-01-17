# Finetune Images using FLUX API and Story

Learn how to fintune a model to produce image using FLUX's Finetune API and then register the outputs as IP on Story.

📚 **Full Tutorial**: https://docs.story.foundation/docs/finetune-images#/

## FLUX Finetune API

Flux announced a new Finetune API that allows you to finetune a model with existing images to produce new images similar to the inputs. You can read more about it here: https://blackforestlabs.ai/announcing-the-flux-pro-finetuning-api/

## Story

Story allows you to register IP on-chain. This is especially important in the age of AI, given that most IP is AI-generated yet the legal system is extremely slow and expensive. Additionally, you can protect and monetize IP (your finetuned outputs) easily on Story. Read more about story here: https://docs.story.foundation

# How to Run the Tutorial

I recommend reading/following the full tutorial here: https://docs.story.foundation/docs/finetune-images#/

If you want to just run the code:

1. `npm install`
2. Configure your `.env` variables
3. `npm run create-collection` to create a new SPG NFT collection and add it to your `.env`
4. `npm run train` to train a new finetune model
5. `npm run inference` to create a new image using the finetune model and register the output as IP on Story
