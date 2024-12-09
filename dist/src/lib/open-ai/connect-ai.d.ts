import OpenAI from "openai";
export default function main(question: string): Promise<OpenAI.Chat.Completions.ChatCompletion & {
    _request_id?: string | null;
}>;
//# sourceMappingURL=connect-ai.d.ts.map