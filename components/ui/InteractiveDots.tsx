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
  mobileBreakpoint?: number;
}

export default function InteractiveDots({
  isButtonHovered = false,
  imageUrl = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
  mobileBreakpoint = 768,
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

    const ctx = canvas.getContext("2d", { alpha: false }); // alpha: false can improve composite performance if background is solid, but left out here to keep transparency intact. We'll stick to standard context.
    const ctx2d = canvas.getContext("2d");
    if (!ctx2d) return;

    // 1. Create Offscreen canvas ONCE
    const offCanvas = document.createElement("canvas");
    const offCtx = offCanvas.getContext("2d");

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const mouse = { x: -1000, y: -1000, maxRadius: 200 };
    let dots: Dot[] = [];

    const spacing = 32;
    const baseRadius = 2.5;

    // Cache layout variables
    let rightZoneStart = 0;
    let rightZoneWidth = 0;
    let drawW = 0;
    let drawH = 0;
    let drawX = 0;
    let drawY = 0;
    let showImage = false;

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

    const updateLayoutMath = () => {
      showImage = width >= mobileBreakpoint;
      rightZoneStart = showImage ? width * 0.55 : width + 1000;
      rightZoneWidth = width - rightZoneStart;
      
      // Update offscreen canvas dimensions
      offCanvas.width = width;
      offCanvas.height = height;

      // Pre-calculate image drawing coordinates if image is loaded
      if (showImage && imgRef.current) {
        const img = imgRef.current;
        const imgAspect = img.naturalWidth / img.naturalHeight;
        
        drawW = rightZoneWidth;
        drawH = drawW / imgAspect;

        if (drawH < height) {
          drawH = height;
          drawW = drawH * imgAspect;
        }

        drawX = rightZoneStart + (rightZoneWidth - drawW) / 2;
        drawY = (height - drawH) / 2;
      }
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      generateGrid();
      updateLayoutMath();
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

    // Initial setup
    generateGrid();
    updateLayoutMath();

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const animate = () => {
      timeRef.current += 0.08;
      ctx2d.clearRect(0, 0, width, height);

      // We need to re-calculate image math if the image loaded *after* initial mount
      if (showImage && imgRef.current && drawW === 0) {
        updateLayoutMath();
      }

      // --- 1. UPDATE & DRAW BASE DOT GRID ---
      dots.forEach((dot) => {
        const isRightZone = showImage && dot.x >= rightZoneStart;
        const effectiveBaseRadius = isRightZone ? 16 : dot.baseRadius;

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
          // Faster distance check (skip Math.hypot overhead)
          const distSq = distX * distX + distY * distY;
          const maxRadSq = mouse.maxRadius * mouse.maxRadius;

          if (distSq < maxRadSq) {
            const distance = Math.sqrt(distSq);
            const intensity = 1 - distance / mouse.maxRadius;
            targetRadius += intensity * (isRightZone ? 14 : 8);
            targetAlpha += intensity * 0.55;
          }
        }

        dot.radius += (targetRadius - dot.radius) * 0.15;
        dot.alpha += (targetAlpha - dot.alpha) * 0.15;

        ctx2d.beginPath();
        if (isRightZone) {
          const squareSize = Math.max(1, dot.radius * 2.0);
          ctx2d.roundRect(
            dot.x - squareSize / 2,
            dot.y - squareSize / 2,
            squareSize,
            squareSize,
            4
          );
        } else {
          ctx2d.arc(dot.x, dot.y, Math.max(0.5, dot.radius), 0, Math.PI * 2);
        }

        const color = isButtonHovered 
          ? "#fdc806" 
          : (isRightZone ? "#00beb2" : `rgba(0, 190, 178, ${dot.alpha})`);
          
        ctx2d.fillStyle = color;
        
        // Shadow changes are expensive; conditionally apply only if needed
        const needsShadow = dot.radius > dot.baseRadius + 2;
        if (needsShadow) {
          ctx2d.shadowColor = color;
          ctx2d.shadowBlur = 8;
        }
        
        ctx2d.fill();
        
        if (needsShadow) {
          ctx2d.shadowBlur = 0; // Reset
        }
      });

      // --- 2. CLIP IMAGE INSIDE SQUARES ---
      if (showImage && imgRef.current && offCtx) {
        // Clear the REUSED offscreen canvas
        offCtx.clearRect(0, 0, width, height);

        // Draw masks
        offCtx.fillStyle = "#ffffff";
        dots.forEach((dot) => {
          if (dot.x >= rightZoneStart) {
            const squareSize = Math.max(1, dot.radius * 2.2);
            offCtx.beginPath();
            offCtx.roundRect(
              dot.x - squareSize / 2,
              dot.y - squareSize / 2,
              squareSize,
              squareSize,
              4
            );
            offCtx.fill();
          }
        });

        // Use source-in to clip image to masks
        offCtx.globalCompositeOperation = "source-in";
        offCtx.drawImage(imgRef.current, drawX, drawY, drawW, drawH);
        
        // Reset composite operation so masks draw properly next frame
        offCtx.globalCompositeOperation = "source-over";

        // Draw offscreen result to main canvas
        ctx2d.drawImage(offCanvas, 0, 0);
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
  }, [isButtonHovered, mobileBreakpoint]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}