import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const result = await model.generateContent({
      contents: [{ parts: [{ text: message }] }],
      generationConfig: {
        // Guardrails: disable "thinking" for faster responses
        thinkingConfig: { thinkingBudget: 0 },
        maxOutputTokens: 256,
      },
    });

    return NextResponse.json({ reply: result.response.text() });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
