const MessageBubble = ({ text, isUser }) => {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`px-4 py-2 max-w-xs md:max-w-md rounded-2xl text-sm shadow-md transition-all duration-300
        ${isUser ? 'bg-blue-600 text-white rounded-br-none' : 'bg-gray-200 text-gray-900 rounded-bl-none'}`}
      >
        {text}
      </div>
    </div>
  );
};

export default MessageBubble;
