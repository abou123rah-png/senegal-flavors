
import React, { useState, useRef, useEffect } from 'react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Dalal ak diam! Je suis Chef Teranga. En quoi puis-je t\'aider aujourd\'hui dans ta cuisine ?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    const botResponseText = await sendMessageToGemini(newMessages);
    const botMessage: ChatMessage = { role: 'model', text: botResponseText };
    setMessages([...newMessages, botMessage]);
    setIsLoading(false);
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 size-14 bg-primary text-background-dark rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform z-[100]"
      >
        <span className="material-symbols-outlined text-3xl">chat_bubble</span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed inset-0 sm:inset-auto sm:bottom-24 sm:right-6 sm:w-96 bg-white dark:bg-surface-dark sm:rounded-2xl shadow-2xl flex flex-col z-[101] overflow-hidden border border-gray-100 dark:border-gray-800 animate-in slide-in-from-bottom-10 duration-300">
          {/* Header */}
          <div className="p-4 bg-primary flex items-center justify-between text-background-dark">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-white flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-2xl">restaurant</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Chef Teranga</h3>
                <p className="text-xs opacity-80">Expert en cuisine locale</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-black/10 rounded-full p-1">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-background-dark/50 no-scrollbar">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-primary text-background-dark rounded-tr-none' 
                    : 'bg-white dark:bg-surface-dark text-text-main dark:text-white rounded-tl-none border border-gray-100 dark:border-gray-800'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-surface-dark p-3 rounded-2xl rounded-tl-none border border-gray-100 dark:border-gray-800">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 bg-white dark:bg-surface-dark border-t border-gray-100 dark:border-gray-800 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Posez une question au chef..."
              className="flex-1 bg-gray-100 dark:bg-background-dark border-none rounded-xl px-4 py-2 focus:ring-2 focus:ring-primary text-sm dark:text-white"
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="size-10 bg-primary text-background-dark rounded-xl flex items-center justify-center disabled:opacity-50"
            >
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
