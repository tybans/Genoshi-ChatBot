export const botResponses = (userInput) => {
  const input = userInput.toLowerCase().replace(/[^\w\s]/gi, "");

  console.log("User input: ", input);

  if (input.includes("hello") || input.includes("hi")) {
    const hiResponse = [
      "Hey there!",
      "Hello there!",
      "Hi there! How can I help you?",
      "Hello there! How can I help you?",
    ];
    return [hiResponse[Math.floor(Math.random() * hiResponse.length)]];
  }

  if (input.includes("how are you") || input.includes("how do you do")) {
    const howResponse = [
      "I'm great, thanks for asking!",
      "I'm good, thank you, How are you?",
      "Feeling fantastic! How are you doing?",
      "Doing well! Thank You. How are doing today?",
    ];
    return [howResponse[Math.floor(Math.random() * howResponse.length)]];
  }
  if (input.includes("what is your name") || input.includes("who are you")) {
    const nameResponse = [
      "I'm your friendly assistant.",
      "I am a Chatbot built by you.",
      "You can call me smartBot!",
    ];
    return [nameResponse[Math.floor(Math.random() * nameResponse.length)]];
  }

  if (
    input.includes("bye") ||
    input.includes("i will talk to you later") ||
    input.includes("goodbye")
  ) {
    const byResponse = [
      "Goodbye!",
      "No worries, I'll be here for you anytime",
      "Talk to you soon",
      "Bye bye!",
      "Bye, take care.",
    ];
    return [byResponse[Math.floor(Math.random() * byResponse.length)]];
  }

  const genericResponse = [
    "That's interesting!",
    "Tell me more!",
    "Hmm, okay.",
    "I am still learning.",
    "I am really sorry, I have not much data about that.",
  ];
  return [genericResponse[Math.floor(Math.random() * genericResponse.length)]];
};
