
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

const API_KEY = process.env.API_KEY || "";

export const sendMessageToGemini = async (messages: ChatMessage[]) => {
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  const systemInstruction = `
    Tu es "Chef Teranga", un assistant culinaire expert en cuisine sénégalaise. 
    Ton but est d'aider les utilisateurs à découvrir les saveurs du Sénégal (Thiéboudieune, Yassa, Mafé, Soupou Kandja, etc.).
    Sois chaleureux, hospitalier (l'esprit de la Teranga), et partage des anecdotes culturelles ou des astuces de cuisson (comme le Rossi ou le Roof).
    Réponds en français, avec quelques mots en Wolof si approprié (ex: Dalal ak diam, Jerejef).
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: messages.map(m => ({ 
        role: m.role, 
        parts: [{ text: m.text }] 
      })),
      config: {
        systemInstruction,
        temperature: 0.8,
        topP: 0.95,
      },
    });

    return response.text || "Désolé, je n'ai pas pu générer de réponse.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Une erreur est survenue lors de la communication avec le Chef Teranga.";
  }
};
