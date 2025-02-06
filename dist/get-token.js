"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTokenFromLLM = getTokenFromLLM;
const { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold, } = require("@google/generative-ai");
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
function getTokenFromLLM(contents) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
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
        const result = yield chatSession.sendMessage(contents);
        return (_a = result.response.text()) !== null && _a !== void 0 ? _a : "null";
    });
}
// Example usage
