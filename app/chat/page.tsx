"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
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
        text: "👋 Hi, I’m PhoenixAI! I can help you learn about phishing, misinformation, and safe browsing. What would you like to know?",
      },
    ]);
  }, []);

  useEffect(() => {
    chatRef.current?.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { role: "user", text: input }]);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      if (data.reply) {
        setMessages((prev) => [...prev, { role: "ai", text: data.reply }]);
      }
    } catch (err) {
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
      <div className="w-full max-w-2xl flex items-center justify-center gap-3 py-4">
        <Image
          src="/phoenix.png"
          alt="PhoenixAI Logo"
          width={40}
          height={40}
          className="drop-shadow-lg"
        />
        <h1 className="text-2xl font-extrabold text-[#f2f3ae] tracking-wide">
          PhoenixAI Chat
        </h1>
      </div>

      {/* Chat section (flex-grow so it resizes with screen) */}
      <div className="w-full max-w-2xl flex-1 flex flex-col bg-[#edd382] text-[#020122] rounded-xl shadow-lg overflow-hidden">
        <div
          ref={chatRef}
          className="flex-1 p-4 flex flex-col gap-3 overflow-y-auto"
        >
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`px-4 py-3 max-w-[75%] rounded-2xl shadow ${
                msg.role === "user"
                  ? "bg-[#fc9e4f] text-white self-end"
                  : "bg-white/95 text-[#020122] self-start"
              }`}
            >
              <ReactMarkdown>{msg.text}</ReactMarkdown>
            </div>
          ))}
          {loading && (
            <div className="italic text-sm text-gray-700 self-start">
              Thinking...
            </div>
          )}
        </div>

        {/* Input bar stays at bottom */}
        <div className="p-3 bg-[#f2f3ae] flex gap-2 items-center">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            className="flex-1 px-4 py-2 rounded-lg bg-white text-[#020122] focus:outline-none"
            placeholder="Ask me about phishing, misinformation, or safe browsing..."
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
    </div>
  );
}
