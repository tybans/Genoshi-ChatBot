import { useState, useEffect, useRef } from 'react';
import MessageBubble from './MessageBubble';
import TypingIndicator from './TypingIndicator';
import { botResponses } from '../data/dummyResponses';

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const endRef = useRef(null);

  const latestInputRef = useRef('');

  const sendMessage = () => {
    if (input.trim()) {
      latestInputRef.current = input
      setMessages(prev => [...prev, { text: input, isUser: true }]);
      setInput('');
      setIsTyping(true);
    }
  };

  useEffect(() => {
    if (isTyping) {
      const timer = setTimeout(() => {
        const botReply = botResponses(latestInputRef.current)[0];
        setMessages(prev => [...prev, { text: botReply, isUser: false }]);
        setIsTyping(false);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [isTyping]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex flex-col h-screen max-w-2xl mx-auto bg-gradient-to-br from-white to-slate-300 shadow-xl rounded-lg overflow-hidden ">
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-3">
        {messages.map((msg, i) => (
          <MessageBubble key={i} text={msg.text} isUser={msg.isUser} />
        ))}
        {isTyping && <TypingIndicator />}
        <div ref={endRef} />
      </div>

      {/* Input Bar */}
      <div className=" bg-gray-400 backdrop-blur p-4 rounded-lg">
        <div className="flex gap-2">
          <input
            className="flex-1 px-4 py-3 rounded-full bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm text-sm"
            placeholder="Send a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
