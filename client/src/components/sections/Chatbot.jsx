import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm the Techcend AI assistant. How can I help you scale your business today?", isBot: true }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // THIS IS THE UPDATED FUNCTION THAT TALKS TO YOUR BACKEND
  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // 1. Add user's message to UI immediately
    const userMessage = { text: input, isBot: false };
    const currentMessages = [...messages, userMessage];
    setMessages(currentMessages);
    setInput('');
    setIsTyping(true);

    try {
      // 2. Send the message AND the chat history to your Node.js backend
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: input,
          // Send previous messages (excluding the first greeting and the one just typed) for context
          history: messages.slice(1) 
        }),
      });

      if (!response.ok) throw new Error('Network response was not ok');
      
      const data = await response.json();

      // 3. Add AI's response to the UI
      setMessages(prev => [...prev, { text: data.text, isBot: true }]);

    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { 
        text: "I'm having trouble connecting to my neural network right now. Please make sure the backend server is running!", 
        isBot: true 
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 sm:w-96 bg-slate-900 border border-slate-700/50 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[500px] animate-in slide-in-from-bottom-5 fade-in duration-300">
          
          {/* Header */}
          <div className="bg-slate-950 p-4 border-b border-white/10 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center">
                <Bot size={18} className="text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm">Techcend AI</h3>
                <p className="text-cyan-400 text-xs flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span> Online
                </p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900/50">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[80%] rounded-2xl p-3 text-sm ${
                  msg.isBot 
                    ? 'bg-slate-800 text-slate-200 rounded-tl-sm' 
                    : 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-tr-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-slate-800 rounded-2xl rounded-tl-sm p-4 flex gap-1">
                  <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce delay-75"></span>
                  <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce delay-150"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-slate-950 border-t border-white/10">
            <form onSubmit={handleSend} className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about our services..."
                className="w-full bg-slate-800 border border-slate-700 rounded-full py-3 pl-4 pr-12 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
              />
              <button 
                type="submit" 
                disabled={!input.trim() || isTyping}
                className="absolute right-2 w-8 h-8 rounded-full bg-cyan-500 hover:bg-cyan-400 flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={14} className="ml-0.5" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-all duration-300"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 opacity-80 group-hover:opacity-100 blur transition-opacity"></div>
        <div className="relative w-full h-full rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white border border-white/20">
          {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        </div>
      </button>
    </div>
  );
};

export default Chatbot;