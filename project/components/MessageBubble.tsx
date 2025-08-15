"use client";

import { motion } from "framer-motion";
import { User, Bot } from "lucide-react";

interface MessageBubbleProps {
  message: string;
  isUser: boolean;
  timestamp: string;
  isLatest?: boolean;
  avatar?: string; // Persona or user avatar URL
}

export default function MessageBubble({
  message,
  isUser,
  timestamp,
  isLatest,
  avatar,
}: MessageBubbleProps) {
  return (
    <motion.div
      className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className={`flex ${isUser ? "flex-row-reverse" : "flex-row"} items-end space-x-2 max-w-xs sm:max-w-sm lg:max-w-md`}
      >
        {/* Avatar */}
        <div
          className={`flex-shrink-0 w-8 h-8 rounded-full overflow-hidden flex items-center justify-center ${
            isUser
              ? "bg-gradient-to-br from-blue-500 to-blue-600 ml-2"
              : "bg-gray-200 dark:bg-gray-700 mr-2"
          }`}
        >
          {avatar ? (
            <img
              src={avatar}
              alt="avatar"
              className="w-full h-full object-cover"
            />
          ) : isUser ? (
            <User className="w-4 h-4 text-white" />
          ) : (
            <Bot className="w-4 h-4 text-gray-600 dark:text-gray-300" />
          )}
        </div>

        {/* Message bubble */}
        <div className="flex flex-col">
          <motion.div
            className={`px-4 py-2 rounded-2xl shadow-sm ${
              isUser
                ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-br-md"
                : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-bl-md"
            }`}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-sm leading-relaxed whitespace-pre-wrap">
              {message}
            </p>
          </motion.div>

          {/* Timestamp */}
          <span
            className={`text-xs text-gray-500 dark:text-gray-400 mt-1 px-1 ${
              isUser ? "text-right" : "text-left"
            }`}
          >
            {timestamp}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
