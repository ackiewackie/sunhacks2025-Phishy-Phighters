import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  const { message } = await req.json();

  // Guardrail: reject off-topic queries
  const allowedTopics = ["phishing", "misinformation", "safe browsing"];
  const lower = message.toLowerCase();
  if (!allowedTopics.some((t) => lower.includes(t))) {
    return NextResponse.json({
      reply:
        "⚠️ I can only answer questions about phishing, misinformation, and safe browsing. Try asking me about those!",
    });
  }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [{ text: message }],
        },
      ],
      generationConfig: {
        maxOutputTokens: 500,
        temperature: 0.7,
      },
    });

    return NextResponse.json({ reply: result.response.text() });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ reply: "⚠️ Error talking to AI." });
  }
}
