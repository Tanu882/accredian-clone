export async function POST(req) {
  try {
    // 🔍 Check if ENV variable exists (boolean only, safe)
    console.log("ENV KEY EXISTS:", !!process.env.OPENROUTER_API_KEY);

    const { message } = await req.json();

    // ✅ Validate input
    if (!message) {
      return Response.json(
        { reply: "Message is required" },
        { status: 400 }
      );
    }

    // 🔥 Call OpenRouter API
    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "meta-llama/llama-3-8b-instruct",
        messages: [
          {
            role: "system",
            content:
              "You are an AI assistant for Accredian website. Give short, clear answers (max 2-3 lines).",
          },
          {
            role: "user",
            content: message,
          },
        ],
      }),
    });

    // ❌ Handle API failure properly
    if (!res.ok) {
      const errorText = await res.text();
      console.log("❌ OPENROUTER ERROR:", errorText);

      return Response.json(
        { reply: "API request failed. Check server logs." },
        { status: 500 }
      );
    }

    const data = await res.json();

    console.log("✅ OPENROUTER RESPONSE:", data);

    // ✅ Safe parsing
    let reply = "Sorry, I couldn't respond.";

    if (data?.choices?.length > 0) {
      reply = data.choices[0].message.content;
    }

    return Response.json({ reply });

  } catch (error) {
    console.log("🔥 SERVER ERROR:", error);

    return Response.json(
      { reply: "Server error" },
      { status: 500 }
    );
  }
}