"use client";
import React, { useRef, useState } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  /** Max tilt in degrees. Default 10. */
  intensity?: number;
  /** Rounding for the glare overlay so it clips to the card. Default "rounded-3xl". */
  rounded?: string;
  /** Show the cursor-following light glare. Default true. */
  glare?: boolean;
  /** Hover scale. Default 1.02. */
  scale?: number;
}

/**
 * Reusable 3D tilt wrapper. Tracks the cursor over the card and applies a
 * perspective rotation plus a soft light-glare that follows the pointer,
 * giving flat cards a sense of physical depth. Falls back to a flat, static
 * card on touch devices (no hover) automatically.
 */
export default function Card3DTilt({
  children,
  className = "",
  intensity = 10,
  rounded = "rounded-3xl",
  glare = true,
  scale = 1.02,
}: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    const rY = (mouseX / (width / 2)) * intensity;
    const rX = -(mouseY / (height / 2)) * intensity;

    setRotateX(rX);
    setRotateY(rY);
    setGlarePos({
      x: ((e.clientX - rect.left) / width) * 100,
      y: ((e.clientY - rect.top) / height) * 100,
    });
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
    setGlarePos({ x: 50, y: 50 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative transition-transform duration-300 ease-out will-change-transform [transform-style:preserve-3d] ${className}`}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      }}
    >
      {children}

      {glare && (
        <div
          className={`pointer-events-none absolute inset-0 z-20 overflow-hidden transition-opacity duration-300 ${rounded}`}
          style={{ opacity: isHovered ? 1 : 0 }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(180,155,255,0.22), rgba(255,255,255,0.04) 30%, transparent 60%)`,
            }}
          />
        </div>
      )}
    </div>
  );
}
