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
  imageUrl?: string;
}

export default function InteractiveDots({
  isButtonHovered = false,
  imageUrl = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
}: InteractiveDotsProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const timeRef = useRef<number>(0);
  const imgRef = useRef<HTMLImageElement | null>(null);

  // Preload image
  useEffect(() => {
    if (!imageUrl) return;
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = imageUrl;
    img.onload = () => {
      imgRef.current = img;
    };
  }, [imageUrl]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const mouse = { x: -1000, y: -1000, maxRadius: 200 };
    let dots: Dot[] = [];

    const spacing = 32;
    const baseRadius = 2.5;

    const generateGrid = () => {
      dots = [];
      const cols = Math.floor(width / spacing);
      const rows = Math.floor(height / spacing);

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
      timeRef.current += 0.03;
      ctx.clearRect(0, 0, width, height);

      // Define Right-Side Image Boundary (Right 45% of the canvas)
      const rightZoneStart = width * 0.55;

      // --- 1. UPDATE DOT STATES ---
      dots.forEach((dot) => {
        const isRightZone = dot.x >= rightZoneStart;

        // Larger base size for right-side image dots
        const effectiveBaseRadius = isRightZone ? 10 : dot.baseRadius;

        // Wave calculations
        const waveX = Math.sin(dot.x * 0.008 + timeRef.current) * 4;
        const waveY = Math.cos(dot.y * 0.008 + timeRef.current) * 4;
        const waveOffset = waveX + waveY;

        let targetRadius = effectiveBaseRadius + waveOffset * 0.6;
        let targetAlpha = 0.35 + (waveOffset / 8) * 0.25;

        if (isButtonHovered) {
          targetRadius = effectiveBaseRadius * 0.5;
          targetAlpha = 0.9;
        } else {
          const distX = mouse.x - dot.x;
          const distY = mouse.y - dot.y;
          const distance = Math.hypot(distX, distY);

          if (distance < mouse.maxRadius) {
            const intensity = 1 - distance / mouse.maxRadius;
            // Expand squares further on mouse proximity for clarity
            targetRadius += intensity * (isRightZone ? 10 : 8);
            targetAlpha += intensity * 0.55;
          }
        }

        dot.radius += (targetRadius - dot.radius) * 0.15;
        dot.alpha += (targetAlpha - dot.alpha) * 0.15;
      });

      // --- 2. DRAW BASE DOT GRID (Left side + Unfilled background) ---
      dots.forEach((dot) => {
        const isRightZone = dot.x >= rightZoneStart;

        ctx.beginPath();
        if (isRightZone) {
          // Draw subtle background placeholders on the right side
          const squareSize = Math.max(1, dot.radius * 1.8);
          ctx.roundRect(
            dot.x - squareSize / 2,
            dot.y - squareSize / 2,
            squareSize,
            squareSize,
            4
          );
        } else {
          // Draw standard circles on the left side
          ctx.arc(dot.x, dot.y, Math.max(0.5, dot.radius), 0, Math.PI * 2);
        }

        const color = isButtonHovered ? "#fdc806" : `rgba(0, 190, 178, ${dot.alpha})`;
        ctx.fillStyle = color;
        ctx.shadowColor = color;
        ctx.shadowBlur = dot.radius > dot.baseRadius + 2 ? 8 : 0;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // --- 3. CLIP IMAGE INSIDE SQUARES (Right side only) ---
      if (imgRef.current) {
        const img = imgRef.current;
        const rightZoneWidth = width - rightZoneStart;

        // Offscreen canvas layer dedicated to masking
        const offCanvas = document.createElement("canvas");
        offCanvas.width = width;
        offCanvas.height = height;
        const offCtx = offCanvas.getContext("2d");

        if (offCtx) {
          // Step 3a: Draw larger rounded square masks for dots in the right zone
          dots.forEach((dot) => {
            if (dot.x >= rightZoneStart) {
              const squareSize = Math.max(1, dot.radius * 2.1);
              offCtx.beginPath();
              offCtx.roundRect(
                dot.x - squareSize / 2,
                dot.y - squareSize / 2,
                squareSize,
                squareSize,
                4 // Corner radius for rounded squares
              );
              offCtx.fillStyle = "#ffffff";
              offCtx.fill();
            }
          });

          // Step 3b: Mask image inside the squares
          offCtx.globalCompositeOperation = "source-in";

          const imgAspect = img.naturalWidth / img.naturalHeight;
          let drawW = rightZoneWidth;
          let drawH = drawW / imgAspect;

          if (drawH < height) {
            drawH = height;
            drawW = drawH * imgAspect;
          }

          const drawX = rightZoneStart + (rightZoneWidth - drawW) / 2;
          const drawY = (height - drawH) / 2;

          offCtx.drawImage(img, drawX, drawY, drawW, drawH);

          // Step 3c: Stamp clipped image onto main canvas
          ctx.drawImage(offCanvas, 0, 0);
        }
      }

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