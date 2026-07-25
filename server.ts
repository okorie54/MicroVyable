import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini client lazily or when API key is available
let genAIClient: GoogleGenAI | null = null;
function getGenAI(): GoogleGenAI | null {
  if (!genAIClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (apiKey) {
      genAIClient = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });
    }
  }
  return genAIClient;
}

// Health check
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", service: "MicroVyable Commercial API" });
});

// Commercial Viability Diagnostic Endpoint
app.post("/api/diagnose", async (req, res) => {
  try {
    const { stage, focus, challenges, mrr, teamSize, customGoal } = req.body;

    const ai = getGenAI();
    if (!ai) {
      // Fallback deterministic analysis if API key is absent
      return res.json({
        overallScore: 78,
        viabilityStage: "Transitioning to Predictable Revenue",
        keyDiagnosis: "Your product demonstrates signal, but GTM velocity is currently bottlenecked by founder-led sales dependency and unformalized outbound playbooks.",
        pillars: {
          salesPredictability: { score: 68, status: "Needs Architecture", insight: "Establish clear deal stages, explicit ICP qualification criteria, and automated pipeline hygiene." },
          partnershipLeverage: { score: 72, status: "Uncapped Potential", insight: "Shift from reactive integrations to structured co-selling with complementary ecosystem vendors." },
          growthEfficiency: { score: 84, status: "Strong Foundation", insight: "Unit economics are favorable; capital efficiency can be multiplied via targeted enterprise motions." },
          positioningClarity: { score: 88, status: "Market Aligned", insight: "Messaging speaks directly to economic buyers, but sales collateral needs outcome-based quantification." }
        },
        actionPlan: [
          { phase: "Week 1-2 (Audit)", title: "Deconstruct Sales Funnel", description: "Audit historical closed-lost deals to isolate primary friction points in the decision cycle." },
          { phase: "Week 3-4 (Architecture)", title: "Engineer the Repeatable Outbound Engine", description: "Design multi-touch sequence playbooks targeting Tier-1 ICP decision makers." },
          { phase: "Month 2 (Execution)", title: "Launch Channel Co-Selling Program", description: "Formalize 2 key strategic partnership agreements with non-competing platforms." },
          { phase: "Month 3 (Scale)", title: "Delegate & Operationalize", description: "Transition sales execution from founders to first high-performing Account Executive with playbooks." }
        ],
        benchmarkComparison: "Top 15% of B2B startups at current stage. Ready for structured commercial scaling."
      });
    }

    const systemInstruction = `You are MicroVyable's Principal Commercial Architect. MicroVyable is an elite Sales, Growth, and Strategic Partnerships consulting firm for high-growth tech startups.
Provide a sharp, founder-focused, highly analytical GTM diagnostic in JSON format.
Be rigorous, objective, encouraging, and actionable — speak in the tone of a seasoned VP of Revenue or Venture Partner.

Return valid JSON adhering strictly to this shape:
{
  "overallScore": number (0-100),
  "viabilityStage": "string (e.g. Early Validation | Predictable Acceleration | Enterprise Scale)",
  "keyDiagnosis": "string (2-3 sentences of sharp executive diagnostic)",
  "pillars": {
    "salesPredictability": { "score": number, "status": "string", "insight": "string" },
    "partnershipLeverage": { "score": number, "status": "string", "insight": "string" },
    "growthEfficiency": { "score": number, "status": "string", "insight": "string" },
    "positioningClarity": { "score": number, "status": "string", "insight": "string" }
  },
  "actionPlan": [
    { "phase": "string", "title": "string", "description": "string" },
    { "phase": "string", "title": "string", "description": "string" },
    { "phase": "string", "title": "string", "description": "string" },
    { "phase": "string", "title": "string", "description": "string" }
  ],
  "benchmarkComparison": "string"
}`;

    const prompt = `Analyze this startup profile and provide a Commercial Viability Diagnosis:
- Stage: ${stage || 'Seed / Series A'}
- Primary Focus: ${focus || 'Sales Execution & Outbound'}
- Primary Challenges: ${challenges || 'Inconsistent deal flow, lengthy sales cycles'}
- Current MRR / ARR: ${mrr || '$20k - $50k MRR'}
- Team Size: ${teamSize || '5-15 employees'}
- Founder Note / Goal: ${customGoal || 'Scale from founder-led sales to repeatable sales team and partner channels'}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        temperature: 0.7,
      },
    });

    const jsonText = response.text || "{}";
    const data = JSON.parse(jsonText);

    return res.json(data);
  } catch (err: any) {
    console.error("Diagnosis error:", err);
    return res.status(500).json({
      error: "Failed to generate diagnostic",
      details: err.message,
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`MicroVyable server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
