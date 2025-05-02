import ChatWindow from "./components/ChatWindow";

function App() {
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-4">
      <div className="max-w-md h-[520px] bg-blue-300 rounded-2xl shadow-lg p-2 flex flex-col">
        <h1 className="text-xl font-bold text-center mb-4 text-gray-600">
          Genoshi ChatBot
        </h1>
        <ChatWindow />
      </div>
    </div>
  );
}

export default App;
