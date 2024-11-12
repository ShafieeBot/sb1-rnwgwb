import React, { useState } from 'react';
import { Message } from '../types';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ChatArea from '../components/ChatArea';

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hi! I'm your AI travel planner. Where would you like to go?",
      isAI: true,
    },
  ]);

  const handleSendMessage = (text: string) => {
    setMessages([...messages, { text, isAI: false }]);

    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "Thanks for sharing! Could you tell me when you're planning to travel and for how long?",
          isAI: true,
        },
      ]);
    }, 1000);
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <ChatArea messages={messages} onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}