
import { GoogleGenAI } from "@google/genai";

// We initialize the client with the process.env.API_KEY as required.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateResponse = async (promptType: string, params: any, lang: string): Promise<string> => {
  const langInstruction = lang === 'en' ? "Please answer in English." : "请用中文回答。";
  let systemInstruction = "";
  let prompt = params.query || "";
  let tools: any = undefined;

  if (promptType === 'three_ages') {
    systemInstruction = `You are Li Bai (李白). You MUST output exactly three paragraphs separated by "|||" (three vertical bars). The format MUST be: Paragraph 1|||Paragraph 2|||Paragraph 3.
      Paragraph 1: Youthful Li Bai (Young, arrogant, ambitious).
      Paragraph 2: Middle-aged Li Bai (Bold yet sorrowful, frustrated ambition).
      Paragraph 3: Old Li Bai (Weathered, philosophical, transcendental).
      ${langInstruction}`;
    prompt = params.query || "Tell me about yourself.";
  } else if (promptType === 'general') {
    systemInstruction = `You are an expert AI on the life of Li Bai. Answer in a popular, humorous, and engaging style. ${langInstruction}`;
  } else if (promptType === 'analysis') {
    systemInstruction = `You are an expert in Tang Dynasty literature. Analyze Li Bai's poem written in ${params.y} at ${params.l} titled "《${params.t}》".
      Format:
      ### 📜 Full Poem (Traditional Chinese)
      (Content)
      ### 🎭 Emotional Analysis
      (Based on mood: ${params.m})
      ### 🌍 Historical Context
      ${langInstruction}`;
    prompt = `Analyze 《${params.t}》`;
  } else if (promptType === 'network_batch') {
    // Kept for backward compatibility if needed, though mostly static now
    const inputStr = params.personList.map((p: any) => `${p.name} (${p.rel})`).join("\n");
    systemInstruction = `You are an expert researcher on Li Bai. Analyze the following list of people and their relationships.
      Logic:
      1. Geographic Location: Where did this person primarily interact with Li Bai?
      2. Emotional Tone: What is the mood of this relationship?
          - 🟦 Deep Navy (#08306b): Political Ambition/Court Life (Chang'an/Official)
          - 🔷 Medium Blue (#2171b5): Exile/Grief/Disillusionment (Yelang/Prison)
          - 💠 Sky Blue (#6baed6): Leisure/Nature/Wanderlust (Jiangnan/Travels)
          - 🌫️ Pale Blue (#c6dbef): Other/Neutral
      
      Input Data:
      ${inputStr}
      
      Output Format (Strict pure JSON, no Markdown):
      A JSON object where Key is the Person Name, and Value is { "color": "HexCode", "location": "Location Name", "mood": "Mood Word" }
      ${langInstruction}`;
    prompt = "Analyze the relationships.";
  } else if (promptType === 'network_report') {
    // Enable Google Search to ensure detailed historical connections are found
    tools = [{ googleSearch: {} }];
    
    systemInstruction = `You are an expert on Li Bai's life and poetry.
      请基于《李白全集》的文本挖掘视角，分析李白与【${params.name}】的关联。
      
      请输出严格的结构化报告（${lang === 'en' ? 'Output in English' : '请用中文回答'}）：
      1. 【GIS空间定位】：他们互动的具体物理地点（如：黄鹤楼、长安翰林院、桃花潭）。
      2. 【NLP情感关键词】：从相关诗作中提取3个核心情感词（如：孤帆、泪湿、仰天大笑）。
      3. 【意象沉淀】：地理环境（如江河、宫阙）如何转化为了诗歌中的心理符号？
      4. 【引用诗句】：引用一句最著名的相关诗句。
      
      If specific details are not in internal knowledge, use Google Search to find the connection.
      `;
    prompt = `Report on Li Bai and ${params.name}`;
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      config: { systemInstruction, tools },
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
    });
    return response.text || (lang === 'zh' ? "无回应。" : "No response.");
  } catch (e) {
    console.error("Gemini API Error:", e);
    return lang === 'zh' ? "网络迷踪... (API Error)" : "Network lost... (API Error)";
  }
};
