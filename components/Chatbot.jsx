"use client";

import { useState, useRef, useEffect } from "react";

export default function Chatbot() {
  const [loading, setLoading] = useState(false);
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

  // 🔊 Speak
  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  };

  // 🎤 Voice input
  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Voice not supported");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-IN";

    recognition.onresult = (event) => {
      setInput(event.results[0][0].transcript);
    };

    recognition.start();
  };

  // 🔥 TYPING ANIMATION FUNCTION
  const typeMessage = (text) => {
    let index = 0;

    const interval = setInterval(() => {
      index++;

      setMessages((prev) => {
        const last = prev[prev.length - 1];

        if (last?.role === "typing") {
          last.text = text.slice(0, index);
          return [...prev.slice(0, -1), last];
        } else {
          return [...prev, { role: "typing", text: text.slice(0, index) }];
        }
      });

      if (index >= text.length) {
        clearInterval(interval);

        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            role: "bot",
            text,
          };
          return updated;
        });

        speak(text);
      }
    }, 20);
  };

  // 💬 Send message
  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      const botText = data.reply || "Sorry, I couldn't respond.";

      typeMessage(botText); // 🔥 typing effect
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Error occurred." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* FLOAT BUTTON */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
  
  {/* 🔥 GLOW RING */}
  <span
    className="absolute inset-0 rounded-full bg-blue-500"
    style={{
      animation: "glowRing 2s infinite",
    }}
  />

  {/* 🔥 MAIN BUTTON (YOUR WIGGLE) */}
  <button
    onClick={() => setIsOpen(true)}
    className="relative bg-blue-600 text-white p-4 rounded-full shadow-lg"
    style={{
      animation: "wiggle 1.2s ease-in-out infinite",
    }}
  >
    💬
  </button>

</div>
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

            {/* 🔥 LOADING INDICATOR */}
            {loading && (
              <div className="mb-2 text-left">
                <span className="inline-block px-3 py-2 rounded-lg bg-gray-200 text-black">
                  Typing<span className="animate-pulse">...</span>
                </span>
              </div>
            )}

            <div ref={chatRef}></div>
          </div>

          {/* INPUT */}
          <div className="p-2 border-t flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something..."
              className="flex-1 border rounded px-2 py-1 text-sm outline-none text-black"
            />

            <button
              onClick={startListening}
              className="bg-gray-200 px-2 rounded"
            >
              🎤
            </button>

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