import { Pinecone } from "@pinecone-database/pinecone";

const pc = new Pinecone({ apiKey: process.env.PINECONE_PRIVATE_KEY! });

export const pineconeIndex = pc.index(
  "personal-website",
  "https://personal-website-849kj6d.svc.aped-4627-b74a.pinecone.io"
);
