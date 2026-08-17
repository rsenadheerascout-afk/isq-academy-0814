"use client";

import { useEffect, useRef } from "react";

interface Dot {
  x: number;
  y: number;
  baseRadius: number;
  currentRadius: number;
  alpha: number;
}

export interface InteractiveDotsProps {
  isButtonHovered: boolean;
}

export default function InteractiveDots({ isButtonHovered }: InteractiveDotsProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const dotsRef = useRef<Dot[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const mouse = { x: -1000, y: -1000, radius: 150 };

    // Setup - Generate STATIC grid of dots
    const setupDots = () => {
      dotsRef.current = [];
      const spacing = 35; // Space between dots
      const rows = Math.ceil(height / spacing);
      const cols = Math.ceil(width / spacing);

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          // Slight jitter for an organic grid look, but position stays fixed
          const jitter = 5;
          const x = c * spacing + spacing / 2 + (Math.random() - 0.5) * jitter;
          const y = r * spacing + spacing / 2 + (Math.random() - 0.5) * jitter;
          const baseRadius = Math.random() * 1.5 + 1; // Base dot size (1px - 2.5px)

          dotsRef.current.push({
            x,
            y,
            baseRadius,
            currentRadius: baseRadius,
            alpha: Math.random() * 0.3 + 0.1, // 10% to 40% opacity
          });
        }
      }
    };

    setupDots();

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      setupDots();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    // Rendering loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      dotsRef.current.forEach((dot) => {
        let targetRadius = dot.baseRadius;
        let color = `rgba(0, 190, 178, ${dot.alpha})`; // Default brand teal

        // --- 1. STATE: Button Hovered (All dots grow & turn yellow) ---
        if (isButtonHovered) {
          targetRadius = dot.baseRadius * 3.5; // Scale every dot
          color = "#fdc806"; // Change every dot to yellow
        } 
        // --- 2. STATE: Normal Mouse Proximity Interaction ---
        else {
          const distX = mouse.x - dot.x;
          const distY = mouse.y - dot.y;
          const distance = Math.hypot(distX, distY);

          if (distance < mouse.radius) {
            // Intensity based on proximity (0.0 to 1.0)
            const proximityIntensity = (mouse.radius - distance) / mouse.radius;
            // Bigger scale the closer the mouse gets
            const growthFactor = 1 + proximityIntensity * 2.5; 
            targetRadius = dot.baseRadius * growthFactor;
          }
        }

        // Smooth transition easing
        dot.currentRadius += (targetRadius - dot.currentRadius) * 0.2;

        // Draw dot
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isButtonHovered]); // Triggers transition when hover state prop updates

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.8 }}
    />
  );
}