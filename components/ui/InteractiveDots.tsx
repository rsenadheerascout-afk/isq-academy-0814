"use client";

import { useEffect, useRef } from "react";

interface Dot {
  x: number;
  y: number;
  baseRadius: number;
  radius: number;
  alpha: number;
}

interface InteractiveDotsProps {
  isButtonHovered?: boolean;
}

export default function InteractiveDots({ isButtonHovered = false }: InteractiveDotsProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    // Mouse position & interactive influence zone
    const mouse = { x: -1000, y: -1000, maxRadius: 180 };

    let dots: Dot[] = [];

    // Uniform grid configuration
    const spacing = 32; // Distance between dots in pixels
    const baseRadius = 2.5; // Fixed base dot size across all dots

    const generateGrid = () => {
      dots = [];
      const cols = Math.floor(width / spacing);
      const rows = Math.floor(height / spacing);

      // Offset to center the grid perfectly
      const offsetX = (width - cols * spacing) / 2 + spacing / 2;
      const offsetY = (height - rows * spacing) / 2 + spacing / 2;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          dots.push({
            x: offsetX + i * spacing,
            y: offsetY + j * spacing,
            baseRadius,
            radius: baseRadius,
            alpha: 0.35,
          });
        }
      }
    };

    generateGrid();

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      generateGrid();
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

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      dots.forEach((dot) => {
        let targetRadius = dot.baseRadius;
        let targetAlpha = 0.35;
        let dotColor = `rgba(0, 190, 178, ${dot.alpha})`;
        let shadowColor = `rgba(0, 190, 178, ${dot.alpha})`;

        // --- STATE 1: Button Hovered State (All dots uniformly turn yellow and expand) ---
        if (isButtonHovered) {
          targetRadius = dot.baseRadius * 0.5;
          targetAlpha = 0.9;
          dotColor = `#fdc806`;
          shadowColor = `#fdc806`;
        } 
        // --- STATE 2: Proximity Cursor Interaction ---
        else {
          const distX = mouse.x - dot.x;
          const distY = mouse.y - dot.y;
          const distance = Math.hypot(distX, distY);

          if (distance < mouse.maxRadius) {
            const intensity = 1 - distance / mouse.maxRadius;
            targetRadius = dot.baseRadius + intensity * 7;
            targetAlpha = 0.35 + intensity * 0.55;
          }
        }

        // Smooth interpolation
        dot.radius += (targetRadius - dot.radius) * 0.15;
        dot.alpha += (targetAlpha - dot.alpha) * 0.15;

        // Draw dot
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);

        ctx.fillStyle = dotColor;
        ctx.shadowColor = shadowColor;
        ctx.shadowBlur = dot.radius > dot.baseRadius + 1 ? 8 : 0;

        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isButtonHovered]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}