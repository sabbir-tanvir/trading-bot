const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = "AIzaSyDT182pBclrwYJSjJpB1eUoa5YYmydU3kM";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

export async function getTokenFromLLM(contents: string): Promise<string> {
  const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          { text: "You are an AI agent that needs to tell me if this tweet is about buying a token. Return me either the address of the solana token, or return me null if you can't find a solana token address in this tweet. Only return if it says it is a bull post. The token address will be very visible in the tweet." },
        ],
      },
      {
        role: "user",
        parts: [
          { text: contents },
        ],
      },
    ],
  });

  const result = await chatSession.sendMessage(contents);
  return result.response.text() ?? "null";
}

// Example usage
