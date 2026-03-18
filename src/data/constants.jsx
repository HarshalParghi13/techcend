import React from 'react';
import { Layout, Code, PenTool, BarChart, Search, FileText, Video, Share2 } from 'lucide-react';

export const SERVICES = [
  { title: "Web Design & Dev", desc: "Custom, responsive websites aimed at conversion.", icon: <Layout />, color: "from-blue-500 to-cyan-400" },
  { title: "Web App Dev", desc: "Scalable, high-performance web applications.", icon: <Code />, color: "from-violet-500 to-purple-400" },
  { title: "Graphic Design", desc: "Visual storytelling through brand identity.", icon: <PenTool />, color: "from-pink-500 to-rose-400" },
  { title: "Digital Marketing", desc: "Strategic campaigns that drive ROI.", icon: <BarChart />, color: "from-orange-500 to-amber-400" },
  { title: "SEO Optimization", desc: "Rank higher and get found by your audience.", icon: <Search />, color: "from-emerald-500 to-green-400" },
  { title: "Content Writing", desc: "Compelling copy that communicates authority.", icon: <FileText />, color: "from-teal-500 to-cyan-400" },
  { title: "Video Editing", desc: "Turning raw footage into cinematic experiences.", icon: <Video />, color: "from-red-500 to-orange-500" },
  { title: "Social Media", desc: "Engaging audiences across all platforms.", icon: <Share2 />, color: "from-indigo-500 to-blue-500" }
];

export const PORTFOLIO = [
  { title: "FinTech Dashboard", category: "Web App", tags: ["React", "Node", "Finance"], color: "bg-blue-900" },
  { title: "EcoStore Shop", category: "E-Commerce", tags: ["Shopify", "UI/UX", "Green"], color: "bg-emerald-900" },
  { title: "Urban Realty", category: "Marketing", tags: ["SEO", "PPC", "Lead Gen"], color: "bg-purple-900" }
];

export const BRANDS = ["NEXT.JS", "REACT", "TAILWIND", "NODE.JS", "TYPESCRIPT", "GRAPHQL", "AWS", "VERCEL"];
