
import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY;

const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export async function askGemini(prompt: string): Promise<string> {
  if (!ai) {
    return "My AI assistant is offline right now because no API key is configured.";
  }
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        temperature: 0.7,
        maxOutputTokens: 200,
      },
    });
    return response.text || "I'm processing that right now...";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error connecting to my AI brain. Please try again.";
  }
}
