import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  const { messages } = await req.json(); 
  // 👆 instead of just { message }, expect an array of { role, text }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    // Convert history into Gemini format
    const contents = [
      {
        role: "user",
        parts: [
          {
            text: "You are PhoenixAI, a friendly assistant that teaches phishing, misinformation, and safe browsing. Stay in role. Use Markdown. Sometimes quiz the user interactively.",
          },
        ],
      },
      ...messages.map((m: { role: string; text: string }) => ({
        role: m.role === "user" ? "user" : "model",
        parts: [{ text: m.text }],
      })),
    ];

    const result = await model.generateContent({ contents });

    const reply =
      result.response.text() ||
      "⚠️ I didn’t catch that. Can you rephrase your question?";

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("Gemini API error:", err);
    return NextResponse.json({ reply: "⚠️ Error talking to AI." });
  }
}
