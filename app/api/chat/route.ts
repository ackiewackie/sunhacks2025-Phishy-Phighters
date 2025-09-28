import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  const { message } = await req.json();

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    // ✅ System prompt + user message combined
    const result = await model.generateContent(
      `You are PhoenixAI, a friendly assistant that teaches users about phishing, misinformation, and safe browsing.
      Be concise, interactive, and educational. Use Markdown for clarity.

      User: ${message}`
    );

    const reply =
      result.response.text() ||
      "⚠️ I didn’t catch that. Can you rephrase your question?";

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("Gemini API error:", err);
    return NextResponse.json({ reply: "⚠️ Error talking to AI." });
  }
}
