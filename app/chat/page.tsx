const sendMessage = async () => {
  if (!input.trim()) return;

  const newMessages = [...messages, { role: "user", text: input }];
  setMessages(newMessages);
  setLoading(true);

  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: newMessages }), // 👈 send full history
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
