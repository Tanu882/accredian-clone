export async function POST(req) {
  try {
    const { message } = await req.json();

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
            content: `
            You are an AI assistant for Accredian website.

            Rules:
            - Give SHORT answers (max 2-3 lines)
            - Be clear and direct
            - Avoid long explanations
            - Focus only on key points
            `,
          },
          {
            role: "user",
            content: message,
          },
        ],
      }),
    });

    const data = await res.json();

    console.log("OPENROUTER RESPONSE:", data); // 🔥 DEBUG

    // ✅ SAFE PARSE
    let reply = "Sorry, I couldn't respond.";

    if (data && data.choices && data.choices.length > 0) {
      reply = data.choices[0].message.content;
    }

    return Response.json({ reply });

  } catch (error) {
    console.log("API ERROR:", error);
    return Response.json({ reply: "Server error" });
  }
}