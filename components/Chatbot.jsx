"use client";

import { useState, useRef, useEffect } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi 👋 How can I help you?" },
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const chatRef = useRef(null);

  // 🔽 Auto scroll
  useEffect(() => {
    chatRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // 🔊 Speak function
  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1;
    speechSynthesis.speak(utterance);
  };

  // 🎤 Voice input
  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Voice not supported in this browser");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-IN";

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
    };

    recognition.start();
  };

  // 💬 Send message
  const sendMessage = async () => {
  if (!input.trim()) return;

  const userMsg = { role: "user", text: input };
  setMessages((prev) => [...prev, userMsg]);

  try {
    // ✅ FIRST fetch call
    const res = await fetch(
  `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${process.env.NEXT_PUBLIC_GEMINI_API_KEY}`,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [
            {
              text: `
You are an AI assistant for Accredian website.
Answer about courses, training, and corporate learning.

User: ${input}
              `,
            },
          ],
        },
      ],
    }),
  }
);

    // ✅ NOW res available
    console.log("STATUS:", res.status);

const data = await res.json();
console.log("API RESPONSE:", data);

let botText = "Sorry, I couldn't respond.";

if (data.candidates?.length) {
  botText =
    data.candidates[0]?.content?.parts
      ?.map((p) => p.text)
      .join(" ") || botText;
}

    const botMsg = { role: "bot", text: botText };
    setMessages((prev) => [...prev, botMsg]);

    speak(botText);
  } catch (error) {
    console.log("ERROR:", error);
  }

  setInput("");
};
  return (
    <>
      {/* FLOAT BUTTON */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg z-50"
        >
          💬
        </button>
      )}

      {/* CHATBOX */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[320px] h-[450px] bg-white shadow-xl rounded-xl flex flex-col z-50">

          {/* HEADER */}
          <div className="bg-blue-600 text-white p-3 flex justify-between items-center rounded-t-xl">
            <span className="font-semibold">AI Assistant</span>
            <button onClick={() => setIsOpen(false)}>✕</button>
          </div>

          {/* CHAT */}
          <div className="flex-1 overflow-y-auto p-3 text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`mb-2 ${
                  msg.role === "user" ? "text-right" : "text-left"
                }`}
              >
                <span
                  className={`inline-block px-3 py-2 rounded-lg ${
                    msg.role === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-black"
                  }`}
                >
                  {msg.text}
                </span>
              </div>
            ))}
            <div ref={chatRef}></div>
          </div>

          {/* INPUT */}
          <div className="p-2 border-t flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something..."
              className="flex-1 border rounded px-2 py-1 text-sm outline-none"
            />

            {/* 🎤 MIC */}
            <button
              onClick={startListening}
              className="bg-gray-200 px-2 rounded"
            >
              🎤
            </button>

            {/* SEND */}
            <button
              onClick={sendMessage}
              className="bg-blue-600 text-white px-3 rounded"
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
}