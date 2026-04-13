"use client";

import { useState } from "react";

export type Certificate = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  skills: string[];
  backClassName: string;
  lightBack?: boolean;
};

const CARD_OVERLAY = "absolute inset-0 bg-black/40";

export default function CertFlipCard({ cert }: { cert: Certificate }) {
  const [hovered, setHovered] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const showBack = isFlipped || hovered;

  const titleLines = cert.title.split("\n");

  return (
    <div
      className="relative h-72 w-105 shrink-0 cursor-pointer select-none rounded-2xl overflow-hidden border border-white/10"
      onPointerEnter={(e) => { if (e.pointerType === "mouse") setHovered(true); }}
      onPointerLeave={(e) => { if (e.pointerType === "mouse") setHovered(false); }}
      onClick={() => { setHovered(false); setIsFlipped((f) => !f); }}
    >
      {!showBack ? (
        /* Front */
        <div className="absolute inset-0 bg-white/5">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-25"
            style={{ backgroundImage: `url('${cert.image}')` }}
          />
          <div className={CARD_OVERLAY} />
          <div className="absolute inset-y-0 left-0 z-10 flex items-center p-5">
            <div>
              <h3
                className="font-medium text-white"
                style={{ textShadow: "0 1px 4px rgba(0,0,0,0.95)" }}
              >
                {titleLines.map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < titleLines.length - 1 && <br />}
                  </span>
                ))}
              </h3>
              <p
                className="mt-1 text-sm text-white/70"
                style={{ textShadow: "0 1px 4px rgba(0,0,0,0.95)" }}
              >
                {cert.subtitle}
              </p>
            </div>
          </div>
        </div>
      ) : (
        /* Back */
        <div className={`absolute inset-0 ${cert.backClassName} p-5 flex flex-col`}>
          <div className="flex h-full items-center">
            <div className="flex flex-col gap-3">
              <h3 className={`text-sm font-medium ${cert.lightBack ? "text-black/60" : "text-white/60"}`}>
                {cert.title.replace("\n", " ")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`text-xs px-2.5 py-1 rounded-full border ${
                      cert.lightBack
                        ? "border-black/15 bg-black/10 text-neutral-900"
                        : "border-white/15 bg-white/10 text-neutral-200"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
