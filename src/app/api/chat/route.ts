import { generateText } from "ai";
import { gateway } from "@ai-sdk/gateway";
import { NextRequest } from "next/server";

export async function GET() {
  const result = await generateText({
    model: gateway("xai/grok-3"),
    prompt: "Tell me the history of the San Francisco Mission-style burrito.",
  });
  return Response.json(result);
}
