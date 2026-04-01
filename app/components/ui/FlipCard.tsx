"use client";

import { useState } from "react";

type FlipCardProps = {
  front: React.ReactNode;
  back: React.ReactNode;
  backClassName?: string;
  className?: string;
};

export default function FlipCard({
  front,
  back,
  backClassName = "bg-neutral-900",
  className = "",
}: FlipCardProps) {
  const [hovered, setHovered] = useState(false);
  const [locked, setLocked] = useState(false);

  const isFlipped = locked || hovered;

  return (
    <div
      className={`h-72 w-105 shrink-0 cursor-pointer select-none ${className}`}
      style={{ perspective: "1200px" }}
      onPointerEnter={(e) => {
        if (e.pointerType === "mouse") setHovered(true);
      }}
      onPointerLeave={(e) => {
        if (e.pointerType === "mouse") setHovered(false);
      }}
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
          className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10"
          style={{ backfaceVisibility: "hidden" }}
        >
          {front}
        </div>

        {/* Back */}
        <div
          className={`absolute inset-0 rounded-2xl overflow-hidden border border-white/10 ${backClassName}`}
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {back}
        </div>
      </div>
    </div>
  );
}
