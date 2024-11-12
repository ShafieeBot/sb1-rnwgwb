import React from 'react';
import { Message } from '../types';
import ChatMessage from './chat/ChatMessage';
import ChatInput from './chat/ChatInput';

interface ChatAreaProps {
  messages: Message[];
  onSendMessage: (text: string) => void;
}

export default function ChatArea({ messages, onSendMessage }: ChatAreaProps) {
  return (
    <div className="flex-1 flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 bg-white">
        <div className="flex flex-col">
          {messages.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}
        </div>
      </div>
      <ChatInput onSendMessage={onSendMessage} />
    </div>
  );
}