export const sendMessageToAI = async (message: string): Promise<string> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/ai/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        securitykey: process.env.NEXT_PUBLIC_SECURITY_KEY || "",
      },
      body: JSON.stringify({ search: message }),
    });

    if (!response.body) throw new Error("No response body");

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let accumulatedResponse = "";

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;

      let chunk = decoder.decode(value, { stream: true });

      chunk = chunk.replace(/\bdata:\s*/g, "").trim();
      chunk = chunk.replace(/\[DONE\]$/, "").trim();
      chunk = chunk.replace(/\n+/g, " ");

      accumulatedResponse += chunk + " ";
    }

    return accumulatedResponse.trim();
  } catch (error) {
    console.error("Error communicating with the server:", error);
    return "Error communicating with the server";
  }
};
