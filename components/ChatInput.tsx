import React from "react";

interface ChatInputProps {
  message: string;
  setMessage: (message: string) => void;
  onSend: () => void;
  isLoading: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({
  message,
  setMessage,
  onSend,
  isLoading,
}) => {
  return (
    <div className="p-4 bg-gray-800 flex items-center gap-4 border-t border-gray-700">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
        className="flex-1 p-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
      />
      <button
        onClick={onSend}
        disabled={isLoading}
        className={`p-3 bg-blue-600 text-white rounded-lg focus:outline-none hover:bg-blue-500 transition ${
          isLoading ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {isLoading ? (
          <div className="w-6 h-6 border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
        ) : (
          "Send"
        )}
      </button>
    </div>
  );
};
