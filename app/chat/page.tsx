"use client";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

export default function ChatPage() {
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // Initial welcome message from PhoenixAI
  useEffect(() => {
    setMessages([
      {
        role: "ai",
        text: "👋 Hi, I’m PhoenixAI! I can help you learn about phishing, misinformation, and safe browsing. What would you like to know?",
      },
    ]);
  }, []);

  const sendMessage = async () => {
  if (!input.trim()) return;

  const newMessages = [...messages, { role: "user", text: input }];
  setMessages(newMessages);

  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages: newMessages }), 
  });

  const data = await res.json();
  if (data.reply) {
    setMessages((prev) => [...prev, { role: "ai", text: data.reply }]);
  }

  setInput("");
};

  return (
    <div className="min-h-screen bg-[#020122] text-white p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-[#f2f3ae] mb-6">🔥 PhoenixAI Chat</h1>

      {/* Chat window */}
      <div className="w-full max-w-2xl bg-[#edd382] text-[#020122] p-4 rounded-lg flex flex-col gap-2 mb-6 h-[400px] overflow-y-auto">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-3 max-w-[80%] rounded-lg ${
              msg.role === "user"
                ? "bg-[#fc9e4f] text-white self-end"
                : "bg-white/90 text-[#020122] self-start"
            }`}
          >
            {msg.role === "ai" ? (
              <ReactMarkdown className="prose prose-sm max-w-none">
                {msg.text}
              </ReactMarkdown>
            ) : (
              msg.text
            )}
          </div>
        ))}
        {loading && (
          <div className="italic text-sm text-gray-700 self-start">Thinking...</div>
        )}
      </div>

      {/* Input */}
      <div className="w-full max-w-2xl flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          className="flex-1 px-4 py-2 rounded bg-[#f2f3ae] text-[#020122] focus:outline-none"
          placeholder="Ask me about phishing, misinformation, or safe browsing..."
        />
        <button
          onClick={sendMessage}
          disabled={loading}
          className="bg-[#ff521b] text-white px-6 py-2 rounded font-semibold hover:bg-[#fc9e4f] transition disabled:opacity-50"
        >
          Send
        </button>
      </div>
    </div>
  );
}

