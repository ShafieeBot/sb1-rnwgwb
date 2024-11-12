import React from 'react';
import { Message } from '../../types';

interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  return (
    <div
      className={`chat-bubble ${
        message.isAI ? 'chat-bubble-ai' : 'chat-bubble-user'
      }`}
    >
      {message.text}
    </div>
  );
}