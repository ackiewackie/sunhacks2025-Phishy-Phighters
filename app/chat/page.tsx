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
