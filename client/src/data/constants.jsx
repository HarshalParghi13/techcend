import React from 'react';
import { Layout, Code, PenTool, BarChart, Search, FileText, Video, Share2, BrainCircuit } from 'lucide-react';

export const SERVICES = [
  { title: "Web Design & Dev", desc: "Custom, responsive websites aimed at high conversion.", icon: <Layout />, color: "from-blue-500 to-cyan-400" },
  { title: "Web App Dev", desc: "Scalable, high-performance web applications.", icon: <Code />, color: "from-violet-500 to-purple-400" },
  { title: "AI Integrations", desc: "Smart automation and AI features to scale efficiency.", icon: <BrainCircuit />, color: "from-indigo-500 to-blue-500" },
  { title: "Brand & Social Creatives", desc: "Eye-catching social media posts, banners, and premium brand identity.", icon: <PenTool />, color: "from-pink-500 to-rose-400" },
  { title: "Performance Marketing", desc: "Data-driven ad campaigns and strategies that drive measurable ROI.", icon: <BarChart />, color: "from-orange-500 to-amber-400" },
  { title: "SEO & Growth", desc: "Rank higher on search engines and dominate your digital niche.", icon: <Search />, color: "from-emerald-500 to-green-400" },
  { title: "Copywriting & Strategy", desc: "Conversion-focused copy that communicates authority and builds trust.", icon: <FileText />, color: "from-teal-500 to-cyan-400" },
  { title: "Promo Videos & Reels", desc: "High-impact promotional videos, short-form reels, and cinematic ads.", icon: <Video />, color: "from-red-500 to-orange-500" }
];

// --- AI ERA PORTFOLIO DATA ---
export const PORTFOLIO = [
  {
    title: "AI-Powered Retail Storefront",
    category: "Intelligent E-Commerce",
    color: "bg-blue-900/10 border-blue-500/30",
    glow: "bg-blue-500/20",
    tags: ["Next.js", "OpenAI Vision", "Semantic Search"],
    description: "A modern web application featuring conversational search and AI-driven personalized product recommendations. It acts as a 24/7 virtual shopping assistant, significantly boosting conversion rates."
  },
  {
    title: "SaaS Dashboard with AI Copilot",
    category: "Business Automation Web App",
    color: "bg-purple-900/10 border-purple-500/30",
    glow: "bg-purple-500/20",
    tags: ["React", "Node.js", "LLM Agents", "Redis"],
    description: "A custom business management platform integrated with a smart AI copilot. It automates repetitive data entry, summarizes complex weekly reports, and provides predictive insights directly in the UI."
  },
  {
    title: "Smart Customer Support Portal",
    category: "RAG Web Integration",
    color: "bg-emerald-900/10 border-emerald-500/30",
    glow: "bg-emerald-500/20",
    tags: ["React", "Vector DB", "LangChain", "Tailwind"],
    description: "A secure, self-service client portal that leverages Retrieval-Augmented Generation (RAG) to instantly resolve customer tickets by intelligently querying your company's internal knowledge base."
  }
];

export const BRANDS = ["NEXT.JS", "REACT", "TAILWIND", "NODE.JS", "TYPESCRIPT", "GRAPHQL", "AWS", "VERCEL", "PYTHON"];