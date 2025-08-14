"use server";

import { pineconeIndex } from "@/lib/pinecone/pinecone";
import { generateText, generateObject } from "ai";
import { gateway } from "@ai-sdk/gateway";
import { z } from "zod";

export const askAQuestion = async ({
  message,
  previousMessages,
}: {
  message: string;
  previousMessages: any[];
}) => {
  const response = (await pineconeIndex.searchRecords({
    query: {
      topK: 1,
      inputs: { text: message },
    },
  })) as any;

  const { object } = await generateObject({
    model: gateway("xai/grok-3"),
    schema: z.object({
      message: z.string(),
    }),
    prompt:
      "Answer all question in first person. If you do not know something or there is no relevant information from RAG, say you do not know." +
      ". This is the text from the RAG:" +
      response.result.hits[0].fields.text +
      ". This is the new question" +
      message +
      ". This is the previous conversation" +
      previousMessages,
  });

  console.log(object);

  return object.message || "There was an error";
};
