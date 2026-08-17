"use client";

import { useEffect, useRef } from "react";

interface Dot {
  x: number;
  y: number;
  baseRadius: number;
  radius: number;
  alpha: number;
}

export default function InteractiveDots() {
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

    // Grid configuration
    const spacing = 32; // Distance between dots in pixels
    const baseRadius = 2.5; // Default dot size

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
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      dots.forEach((dot) => {
        // Distance calculation between cursor and static dot position
        const distX = mouse.x - dot.x;
        const distY = mouse.y - dot.y;
        const distance = Math.hypot(distX, distY);

        // Calculate intensity factor (1 at exact cursor center, 0 at outer threshold)
        if (distance < mouse.maxRadius) {
          const intensity = 1 - distance / mouse.maxRadius;
          
          // Max expansion up to 350% larger depending on intensity
          const targetRadius = dot.baseRadius + intensity * 7;
          
          // Smooth interpolation for fluid growth and shrink
          dot.radius += (targetRadius - dot.radius) * 0.15;
          dot.alpha = 0.35 + intensity * 0.55;
        } else {
          // Return smoothly to base size
          dot.radius += (dot.baseRadius - dot.radius) * 0.1;
          dot.alpha += (0.35 - dot.alpha) * 0.1;
        }

        // Draw static dot
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);

        // Brand color gradient with glow on expanded dots
        ctx.fillStyle = `rgba(0, 190, 178, ${dot.alpha})`;
        ctx.shadowColor = `rgba(0, 190, 178, ${dot.alpha})`;
        ctx.shadowBlur = dot.radius > dot.baseRadius + 1 ? 8 : 0;

        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
    />
  );
}