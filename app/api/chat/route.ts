// app/api/chat/route.ts
import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

/**
 * Helpful / defensive API route for debugging why Gemini calls fail.
 * - Retries once on transient failure
 * - Logs detailed error info to server logs (Vercel function logs)
 * - Returns a friendly reply + a debug error message (remove debug before production)
 */
export async function POST(req: Request) {
  const { message } = await req.json();

  if (!message || typeof message !== "string") {
    return NextResponse.json({ reply: "⚠️ No message provided." }, { status: 400 });
  }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    // attempt + one retry
    let attempt = 0;
    let lastErr: any = null;
    while (attempt < 2) {
      try {
        // simplest stable form: pass a single string that includes system instructions
        const prompt = `You are PhoenixAI, a friendly assistant that teaches users about phishing, misinformation, and safe browsing.
Be concise, interactive, and educational. Use Markdown for clarity.

User: ${message}`;

        const result = await model.generateContent(prompt);

        // result.response.text() should contain the text. Validate before returning.
        const text = result?.response?.text?.();
        if (text && text.trim().length > 0) {
          return NextResponse.json({ reply: text });
        } else {
          // empty response — treat as an error and possibly retry
          lastErr = new Error("Empty response from Gemini model");
          attempt++;
          continue;
        }
      } catch (err) {
        lastErr = err;
        // small wait before retry (helps with transient network auth issues)
        await new Promise((r) => setTimeout(r, 300));
        attempt++;
      }
    }

    // If we got here, both attempts failed
    console.error("Gemini API final error:", lastErr);

    // Helpful debug returned to frontend while testing. Remove `debug` in prod.
    return NextResponse.json(
      {
        reply: "⚠️ Error talking to AI.",
        debug: String(lastErr?.message ?? lastErr ?? "unknown error"),
      },
      { status: 502 }
    );
  } catch (err) {
    console.error("Unexpected route error:", err);
    return NextResponse.json(
      {
        reply: "⚠️ Unexpected server error.",
        debug: String((err as any)?.message ?? err),
      },
      { status: 500 }
    );
  }
}
