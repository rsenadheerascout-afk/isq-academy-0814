"use client";

import { useEffect, useRef } from "react";

interface Bubble {
  x: number;
  y: number;
  radius: number;
  baseRadius: number;
  dx: number;
  dy: number;
  alpha: number;
}

export default function InteractiveBubbles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const mouse = { x: -1000, y: -1000, radius: 160 };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
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

    const bubbleCount = Math.floor((width * height) / 10000);
    const bubbles: Bubble[] = [];

    for (let i = 0; i < bubbleCount; i++) {
      const radius = Math.random() * 12 + 6;
      bubbles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius,
        baseRadius: radius,
        dx: (Math.random() - 0.5) * 0.7,
        dy: (Math.random() - 0.5) * 0.7,
        alpha: Math.random() * 0.35 + 0.15,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      bubbles.forEach((b) => {
        b.x += b.dx;
        b.y += b.dy;

        if (b.x < -20) b.x = width + 20;
        if (b.x > width + 20) b.x = -20;
        if (b.y < -20) b.y = height + 20;
        if (b.y > height + 20) b.y = -20;

        const distX = mouse.x - b.x;
        const distY = mouse.y - b.y;
        const distance = Math.hypot(distX, distY);

        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          b.radius = b.baseRadius + force * 16;
        } else {
          b.radius = Math.max(b.baseRadius, b.radius - 0.2);
        }

        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);

        // --- GLOW / BLUR EFFECT ---
        ctx.shadowColor = `rgba(0, 190, 178, ${b.alpha})`;
        ctx.shadowBlur = 10; // Increase for higher blur/glow intensity
        
        ctx.fillStyle = `rgba(0, 190, 178, ${b.alpha})`;
        ctx.fill();

        // Reset shadow for performance safety
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
      className="absolute inset-0 w-full h-full pointer-events-auto blur-[2px]"
    />
  );
}