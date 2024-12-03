import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "",
});

export default async function main(question: string) {
  const chatCompletion = await client.chat.completions.create({
    messages: [{ role: "user", content: question }],
    model: "gpt-4o",
  });
  return chatCompletion;
}
