"use client";
import React, { useState } from "react";

type Project = {
  id: number;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  year: string;
  link?: string;
  github?: string;
  status: "completed" | "in-progress" | "archived";
  highlight?: string; // one-line "wow" talking point
};

const projects: Project[] = [
  {
    id: 1,
    title: "ChromaCanvas",
    tagline: "Browser-based vector design tool",
    description:
      "A fully functional Figma-like design tool that runs entirely in the browser. Infinite canvas with zoom/pan, real-time multiplayer cursors, shape tools, layers panel, and SVG/PNG export.",
    tags: ["Konva.js", "Liveblocks", "Zustand", "TypeScript", "Vercel"],
    year: "2025",
    link: "https://chromacanvas.vercel.app/",
    status: "completed",
    highlight: "Real-time multiplayer — open with a friend and see each other's cursors live",
  },
  {
    id: 2,
    title: "QueryMind",
    tagline: "Natural language → SQL engine",
    description:
      "Connect your own database and ask questions in plain English. QueryMind generates the SQL, runs it against your schema, returns results, and explains exactly what the query does.",
    tags: ["Next.js", "OpenAI", "PostgreSQL", "Prisma", "Railway"],
    year: "2025",
    link: "https://querymind-production-b6a4.up.railway.app/",
    status: "completed",
    highlight: "\"Show me users who signed up last month\" → SQL in seconds",
  },
];

const statusConfig = {
  completed:     { label: "Completed",   color: "#22c55e", bg: "rgba(34,197,94,0.1)"   },
  "in-progress": { label: "In Progress", color: "#3b82f6", bg: "rgba(59,130,246,0.1)"  },
  archived:      { label: "Archived",    color: "#71717a", bg: "rgba(113,113,122,0.1)" },
};

const tagPalette = [
  { bg: "rgba(43,58,111,0.25)",  text: "#93a8f4" },
  { bg: "rgba(20,80,60,0.3)",    text: "#6ee7b7" },
  { bg: "rgba(100,40,80,0.25)", text: "#f9a8d4" },
  { bg: "rgba(80,60,10,0.3)",    text: "#fcd34d" },
  { bg: "rgba(60,20,20,0.3)",    text: "#fca5a5" },
];

function tagColor(tag: string) {
  return tagPalette[(tag.charCodeAt(0) + tag.length) % tagPalette.length];
}

function ArrowIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.112-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/>
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0, marginTop: "1px" }}>
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>
    </svg>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);
  const s = statusConfig[project.status];

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        backgroundColor: hovered ? "#141414" : "#0f0f0f",
        border: `1px solid ${hovered ? "#2b3a6f" : "#1e1e1e"}`,
        borderRadius: "14px",
        padding: "1.75rem 1.75rem 1.4rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.8rem",
        transition: "all 0.25s ease",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        overflow: "hidden",
      }}
    >
      {/* Top accent line */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "2px",
        background: hovered ? "linear-gradient(to right, #2b3a6f, #6376c8)" : "transparent",
        transition: "background 0.3s ease",
        borderRadius: "14px 14px 0 0",
      }} />

      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.75rem" }}>
        <div>
          <h2 style={{ fontSize: "1.15rem", fontWeight: "700", color: "#f5f5f5", margin: "0 0 4px", lineHeight: 1.2 }}>
            {project.title}
          </h2>
          <p style={{ fontSize: "0.78rem", color: "#555", margin: 0, fontStyle: "italic" }}>
            {project.tagline}
          </p>
        </div>
        <span style={{
          fontSize: "0.68rem", fontWeight: "600", letterSpacing: "0.04em",
          color: s.color, backgroundColor: s.bg,
          padding: "3px 10px", borderRadius: "999px", whiteSpace: "nowrap", flexShrink: 0,
        }}>
          {s.label}
        </span>
      </div>

      {/* Description */}
      <p style={{ fontSize: "0.875rem", color: "#a3a3a3", margin: 0, lineHeight: 1.75, flexGrow: 1 }}>
        {project.description}
      </p>

      {/* Highlight callout */}
      {project.highlight && (
        <div style={{
          display: "flex", alignItems: "flex-start", gap: "7px",
          backgroundColor: "rgba(43,58,111,0.12)",
          border: "1px solid rgba(43,58,111,0.25)",
          borderRadius: "8px",
          padding: "8px 12px",
        }}>
          <SparkleIcon />
          <p style={{ fontSize: "0.78rem", color: "#93a8f4", margin: 0, lineHeight: 1.55 }}>
            {project.highlight}
          </p>
        </div>
      )}

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
        {project.tags.map((tag) => {
          const c = tagColor(tag);
          return (
            <span key={tag} style={{
              fontSize: "0.68rem", fontWeight: "600", letterSpacing: "0.03em",
              color: c.text, backgroundColor: c.bg,
              padding: "3px 10px", borderRadius: "6px",
            }}>
              {tag}
            </span>
          );
        })}
      </div>

      {/* Links */}
      {(project.link || project.github) && (
        <div style={{ display: "flex", gap: "1rem", marginTop: "0.1rem" }}>
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: "4px",
              fontSize: "0.78rem", fontWeight: "600",
              color: hovered ? "#93a8f4" : "#6376c8",
              textDecoration: "none", transition: "color 0.2s ease",
            }}>
              Live demo <ArrowIcon />
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: "4px",
              fontSize: "0.78rem", fontWeight: "600",
              color: "#555", textDecoration: "none",
              transition: "color 0.2s ease",
            }}
              onMouseEnter={e => (e.currentTarget.style.color = "#e5e5e5")}
              onMouseLeave={e => (e.currentTarget.style.color = "#555")}
            >
              <GithubIcon /> GitHub
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default function PreviousActivities() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "4rem 2rem",
      backgroundColor: "#0a0a0a",
    }}>
      <h1 style={{
        fontSize: "3rem",
        fontWeight: "800",
        background: "linear-gradient(to bottom right, #2b3a6f, #ffffff)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        textShadow: "0 0 8px rgba(43, 58, 111, 0.5)",
        marginBottom: "0.5rem",
      }}>
        Previous Activities
      </h1>

      <p style={{ fontSize: "0.9rem", color: "#444", marginBottom: "3rem" }}>
        {projects.length} software projects
      </p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
        gap: "1.5rem",
        width: "100%",
        maxWidth: "1000px",
      }}>
        {projects.map((p) => <ProjectCard key={p.id} project={p} />)}
      </div>
    </div>
  );
}