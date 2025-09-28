"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

export default function ChatPage() {
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages([
      {
        role: "ai",
        text: "Hi, I’m PhoenixAI! I’ll guide you through learning about phishing, misinformation, and safe browsing by asking you short questions. Don’t worry if you get one wrong I’ll explain and help you out. Which topic would you like to start with first? ",
      },
    ]);
  }, []);

  useEffect(() => {
    chatRef.current?.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, loading]);

  // ✅ Updated sendMessage with full history
  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", text: input }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }), // send full history
      });

      const data = await res.json();
      if (data.reply) {
        setMessages((prev) => [...prev, { role: "ai", text: data.reply }]);
      }
    } catch (err) {
      console.error("Chat error:", err);
      setMessages((prev) => [
        ...prev,
        { role: "ai", text: "⚠️ Oops, something went wrong. Try again!" },
      ]);
    }

    setInput("");
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020122] to-[#1a1a40] text-white flex flex-col items-center">
      {/* Header */}
      <div className="w-full max-w-6xl flex items-center justify-center gap-3 py-4">
        <Image
          src="/phoenix.png"
          alt="PhoenixAI Logo"
          width={60}
          height={60}
          className="drop-shadow-lg"
        />
        <h1 className="text-2xl font-extrabold text-[#f2f3ae] tracking-wide">
          PhoenixAI Chat
        </h1>
      </div>

      {/* Main content: chat + sidebar */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-6 px-4 pb-6 flex-1">
        {/* Chat Section */}
        <div className="flex-1 flex flex-col bg-[#edd382] text-[#020122] rounded-xl shadow-lg overflow-hidden">
          <div
            ref={chatRef}
            className="flex-1 p-4 flex flex-col gap-3 overflow-y-auto"
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex items-start gap-2 ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {/* Phoenix avatar for AI */}
                {msg.role === "ai" && (
                  <div className="w-8 h-8 rounded-full bg-[#020122] shadow-md overflow-hidden flex items-center justify-center">
                    <Image
                      src="/phoenix.png"
                      alt="PhoenixAI"
                      width={40}
                      height={40}
                      className="object-cover object-top"
                    />
                  </div>
                )}

                {/* Chat bubble */}
                <div
                  className={`px-4 py-3 max-w-[75%] rounded-2xl shadow ${
                    msg.role === "user"
                      ? "bg-[#fc9e4f] text-white self-end"
                      : "bg-white/95 text-[#020122] self-start"
                  }`}
                >
                  <ReactMarkdown>{msg.text}</ReactMarkdown>
                </div>
              </div>
            ))}
            {loading && (
              <div className="italic text-sm text-gray-700 self-start">
                Thinking...
              </div>
            )}
          </div>

          {/* Input bar */}
          <div className="p-3 bg-[#f2f3ae] flex gap-2 items-center">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              className="flex-1 px-4 py-2 rounded-lg bg-white text-[#020122] focus:outline-none"
              placeholder=""
            />
            <button
              onClick={sendMessage}
              disabled={loading}
              className="bg-[#ff521b] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#fc9e4f] transition disabled:opacity-50 shadow"
            >
              Send
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="md:w-64 bg-white/10 p-4 rounded-xl shadow-lg flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-[#f2f3ae]">⚡ Quick Tips</h2>
          <ul className="list-disc list-inside text-sm text-gray-200 space-y-2">
            <li>Check URLs carefully before clicking.</li>
            <li>Look for spelling/grammar mistakes in emails.</li>
            <li>Never share personal info via unsolicited messages.</li>
          </ul>

          <h2 className="text-lg font-semibold text-[#f2f3ae] mt-4">📚 Resources</h2>
          <ul className="text-sm space-y-2">
            <li>
              <a
                href="https://staysafeonline.org"
                target="_blank"
                className="text-[#fc9e4f] hover:underline"
              >
                Stay Safe Online
              </a>
            </li>
            <li>
              <a
                href="https://www.consumer.ftc.gov/features/scam-alerts"
                target="_blank"
                className="text-[#fc9e4f] hover:underline"
              >
                FTC Scam Alerts
              </a>
            </li>
            <li>
              <a
                href="https://www.phishing.org"
                target="_blank"
                className="text-[#fc9e4f] hover:underline"
              >
                Phishing.org
              </a>
            </li>
          </ul>

          <Link
            href="/"
            className="mt-auto text-center bg-[#ff521b] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#fc9e4f] transition"
          >
            ⬅ Back to Home
          </Link>
        </aside>
      </div>
    </div>
  );
}
