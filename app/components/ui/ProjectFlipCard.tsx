"use client";

import { useState } from "react";

export type ProjectLink = {
  label: string;
  href?: string;
};

export type Project = {
  title: string;
  description: string;
  skills: string[];
  links: ProjectLink[];
  status?: string;
  image?: string;
};

export default function ProjectFlipCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);
  const [locked, setLocked] = useState(false);
  const isFlipped = locked || hovered;

  return (
    <div
      className="h-72 w-105 shrink-0 cursor-pointer select-none"
      style={{ perspective: "1200px" }}
      onPointerEnter={(e) => { if (e.pointerType === "mouse") setHovered(true); }}
      onPointerLeave={(e) => { if (e.pointerType === "mouse") setHovered(false); }}
      onClick={() => setLocked((l) => !l)}
    >
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10 bg-white/5"
          style={{ backfaceVisibility: "hidden" }}
        >
          {project.image && (
            <div
              className="absolute inset-0 bg-cover bg-center opacity-25"
              style={{ backgroundImage: `url(${project.image})` }}
            />
          )}
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative p-5 flex flex-col h-full">
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-medium">{project.title}</h3>
              {project.status && (
                <span className="text-xs text-neutral-200 border border-white/20 bg-black/40 px-2 py-1 rounded-full">
                  {project.status}
                </span>
              )}
            </div>
            <div className="flex-1 flex items-end justify-end">
              <span className="text-white/25 text-xs">hover or tap to see skills</span>
            </div>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 p-5 flex flex-col"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <h3 className="text-sm font-medium text-white/60">{project.title}</h3>

          <div className="mt-3 flex flex-wrap gap-2 flex-1 content-start">
            {project.skills.map((skill) => (
              <span
                key={skill}
                className="text-xs px-2.5 py-1 rounded-full border border-white/15 bg-white/10 text-neutral-200"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-3 flex justify-center gap-6 text-sm">
            {project.links.map((link) =>
              link.href ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-neutral-300 underline underline-offset-4 decoration-white/30 hover:decoration-white/60 transition"
                  onClick={(e) => e.stopPropagation()}
                >
                  {link.label}
                </a>
              ) : (
                <span key={link.label} className="text-neutral-400 cursor-default">
                  {link.label}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
