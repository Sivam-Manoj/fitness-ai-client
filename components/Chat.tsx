"use client";

import { useState } from "react";
import { ChatHistory } from "./ChatHistory";
import { ChatInput } from "./ChatInput";
import { sendMessageToAI } from "@/utils/chatApi";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<
    {
      user: string;
      ai: string;
    }[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    setChatHistory((prevHistory) => [
      ...prevHistory,
      { user: message, ai: "" },
    ]);
    setIsLoading(true);
    setMessage("");

    try {
      const response = await sendMessageToAI(message);
      setChatHistory((prevHistory) => {
        const updatedHistory = [...prevHistory];
        updatedHistory[updatedHistory.length - 1].ai = response;
        return updatedHistory;
      });
    } catch (error) {
      // Type narrowing to handle error properly
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred";

      setChatHistory((prevHistory) => {
        const updatedHistory = [...prevHistory];
        updatedHistory[updatedHistory.length - 1].ai = errorMessage;
        return updatedHistory;
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="flex flex-col w-full bg-gradient-to-t from-indigo-900 to-red-800 text-white overflow-hidden"
      style={{ minHeight: "calc(100vh - 65px)" }}
    >
      <ChatHistory chatHistory={chatHistory} />
      <ChatInput
        message={message}
        setMessage={setMessage}
        onSend={handleSendMessage}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Chat;
