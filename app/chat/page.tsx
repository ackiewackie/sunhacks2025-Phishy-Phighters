"use client";
import { useState } from "react";

export default function ChatPage() {
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input) return;

    // Add user message
    setMessages((prev) => [...prev, { role: "user", text: input }]);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();
    if (data.reply) {
      setMessages((prev) => [...prev, { role: "ai", text: data.reply }]);
    }

    setInput("");
  };

  return (
    <div className="min-h-screen bg-[#020122] text-white p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-[#f2f3ae] mb-6">PhoenixAI Chat</h1>

      <div className="w-full max-w-2xl bg-[#edd382] text-[#020122] p-4 rounded-lg flex flex-col gap-2 mb-6 h-[400px] overflow-y-auto">
        {messages.map((msg, i) => (
          <div key={i} className={`p-2 rounded ${msg.role === "user" ? "bg-[#fc9e4f] text-white self-end" : "bg-white/90 text-[#020122] self-start"}`}>
            {msg.text}
          </div>
        ))}
      </div>

      <div className="w-full max-w-2xl flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 px-4 py-2 rounded bg-[#f2f3ae] text-[#020122]"
          placeholder="Ask me about phishing or misinformation..."
        />
        <button
          onClick={sendMessage}
          className="bg-[#ff521
