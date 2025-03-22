import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface ChatHistoryProps {
  chatHistory: { user: string; ai: string }[];
}

export const ChatHistory: React.FC<ChatHistoryProps> = ({ chatHistory }) => {
  return (
    <div className="flex-grow overflow-y-auto p-4 mt-4 mx-4 bg-gray-800 rounded-xl space-y-4">
      {chatHistory.map((entry, index) => (
        <div key={index} className="flex flex-col space-y-2">
          <div className="flex justify-end">
            <div className="font-semibold text-sm text-blue-400">You:</div>
          </div>
          <div className="flex justify-end">
            <div className="bg-blue-600 p-3 rounded-lg max-w-[70%] text-white break-words">
              {entry.user}
            </div>
          </div>

          {entry.ai && (
            <>
              <div className="flex justify-start">
                <div className="font-semibold text-sm text-green-400">AI:</div>
              </div>
              <div className="flex justify-start">
                <div className="bg-green-600 p-3 rounded-lg max-w-[70%] text-white break-words">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {entry.ai}
                  </ReactMarkdown>
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};
