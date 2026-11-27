"use client";

import React, { useEffect, useRef, useState } from "react";

interface FooterWordmarkProps {
  text?: string;
}

function hexToRgb(hex: string): [number, number, number] {
  const clean = hex.replace("#", "");
  const num = parseInt(clean, 16);
  return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
}

export default function FooterWordmark({
  text = "NILE ICT",
}: FooterWordmarkProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const offscreen = document.createElement("canvas");
    const offCtx = offscreen.getContext("2d");
    const tiny = document.createElement("canvas");
    const tinyCtx = tiny.getContext("2d", { willReadFrequently: true });
    if (!offCtx || !tinyCtx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const canHover = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;

    const label = text.trim().toUpperCase();
    const baseColor = "#E8EEFF";
    const accentColor = "#E6602C";
    const fontFamily = getComputedStyle(document.body).fontFamily || "Inter, sans-serif";

    let width = 0;
    let height = 0;
    let dpr = 1;
    let currentStep = 1;
    let rafId = 0;
    let isMeasured = false;
    let revealed = false;

    const measureAndRenderOffscreen = () => {
      const containerW = container.clientWidth;
      if (!containerW) return false;

      dpr = Math.min(window.devicePixelRatio || 1, 2);
      offCtx.font = `800 100px ${fontFamily}`;
      const metrics = offCtx.measureText(label);
      const abLeft = metrics.actualBoundingBoxLeft || 0;
      const abRight = metrics.actualBoundingBoxRight || metrics.width;
      const naturalW = abLeft + abRight;
      if (!naturalW) return false;

      const scaledFontSize = (100 * containerW) / naturalW;
      const ascent = (metrics.actualBoundingBoxAscent / 100) * scaledFontSize;
      const topPad = scaledFontSize * 0.04;
      const totalH = Math.ceil(ascent + topPad + scaledFontSize * 0.02);

      canvas.style.height = `${totalH}px`;
      width = canvas.width = offscreen.width = Math.round(containerW * dpr);
      height = canvas.height = offscreen.height = Math.round(totalH * dpr);

      offCtx.clearRect(0, 0, width, height);
      offCtx.fillStyle = baseColor;
      offCtx.font = `800 ${scaledFontSize * dpr}px ${fontFamily}`;
      offCtx.fillText(
        label,
        (abLeft / 100) * scaledFontSize * dpr,
        (topPad + ascent) * dpr
      );

      isMeasured = true;
      setReady(true);
      return true;
    };

    const drawPixelated = (pixelSize: number, colorHex: string) => {
      if (!width || !height) return;
      const cellW = Math.max(1, Math.ceil(width / (pixelSize * dpr)));
      const cellH = Math.max(1, Math.ceil(height / (pixelSize * dpr)));

      tiny.width = cellW;
      tiny.height = cellH;
      tinyCtx.imageSmoothingEnabled = true;
      tinyCtx.clearRect(0, 0, cellW, cellH);
      tinyCtx.drawImage(
        offscreen,
        0,
        0,
        cellW * pixelSize * dpr,
        cellH * pixelSize * dpr,
        0,
        0,
        cellW,
        cellH
      );

      const imgData = tinyCtx.getImageData(0, 0, cellW, cellH);
      const data = imgData.data;
      const [r, g, b] = hexToRgb(colorHex);
      for (let i = 0; i < data.length; i += 4) {
        const solid = data[i + 3] > 95;
        data[i] = r;
        data[i + 1] = g;
        data[i + 2] = b;
        data[i + 3] = solid ? 255 : 0;
      }
      tinyCtx.putImageData(imgData, 0, 0);

      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(
        tiny,
        0,
        0,
        cellW * pixelSize * dpr,
        cellH * pixelSize * dpr
      );
    };

    const renderStep = (step: number) => {
      currentStep = step;
      if (!width || !height) return;
      ctx.clearRect(0, 0, width, height);
      if (step <= 1) {
        ctx.drawImage(offscreen, 0, 0);
        return;
      }
      drawPixelated(step, step >= 8 ? accentColor : baseColor);
    };

    let io: IntersectionObserver | null = null;
    let ro: ResizeObserver | null = null;
    const timeouts: number[] = [];

    const startReveal = () => {
      if (revealed) return;
      revealed = true;
      const steps = [40, 28, 20, 14, 10, 7, 5, 4, 3, 2, 1];
      const delays = [95, 80, 70, 60, 55, 50, 45, 40, 35, 35, 0];
      let idx = 0;
      const advance = () => {
        renderStep(steps[idx]);
        if (idx < steps.length - 1) {
          const timer = window.setTimeout(advance, delays[idx]);
          timeouts.push(timer);
          idx++;
        }
      };
      advance();
    };

    const init = () => {
      if (!measureAndRenderOffscreen()) {
        const waitRo = new ResizeObserver(() => {
          if (container.clientWidth) {
            waitRo.disconnect();
            init();
          }
        });
        waitRo.observe(container);
        return;
      }

      if (prefersReducedMotion) {
        renderStep(1);
      } else {
        renderStep(40);
        io = new IntersectionObserver(
          ([entry]) => {
            if (!entry.isIntersecting) return;
            io?.disconnect();
            startReveal();
          },
          { threshold: 0.3 }
        );
        io.observe(container);
      }

      ro = new ResizeObserver(() => {
        if (isMeasured && measureAndRenderOffscreen()) {
          renderStep(currentStep);
        }
      });
      ro.observe(container);
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!canHover || prefersReducedMotion || currentStep > 1 || !width || !height) {
        return;
      }
      const rect = canvas.getBoundingClientRect();
      const px = (e.clientX - rect.left) * dpr;
      const py = (e.clientY - rect.top) * dpr;

      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = 0;
        renderStep(1);

        const cell = 24 * dpr;
        const radius = 135 * dpr;

        ctx.save();
        ctx.beginPath();
        for (
          let gx = Math.floor((px - radius) / cell);
          gx <= Math.ceil((px + radius) / cell);
          gx++
        ) {
          for (
            let gy = Math.floor((py - radius) / cell);
            gy <= Math.ceil((py + radius) / cell);
            gy++
          ) {
            const cx = gx * cell + cell / 2;
            const cy = gy * cell + cell / 2;
            if ((cx - px) ** 2 + (cy - py) ** 2 <= radius * radius) {
              ctx.rect(gx * cell, gy * cell, cell, cell);
            }
          }
        }
        ctx.clip();
        ctx.clearRect(0, 0, width, height);
        drawPixelated(24, accentColor);
        ctx.restore();
      });
    };

    const handlePointerLeave = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = 0;
      }
      if (currentStep <= 1) {
        renderStep(1);
      }
    };

    if (canHover && !prefersReducedMotion) {
      container.addEventListener("pointermove", handlePointerMove);
      container.addEventListener("pointerleave", handlePointerLeave);
    }

    if (document.fonts) {
      document.fonts.ready.then(init);
    } else {
      init();
    }

    return () => {
      io?.disconnect();
      ro?.disconnect();
      timeouts.forEach((id) => clearTimeout(id));
      if (rafId) cancelAnimationFrame(rafId);
      container.removeEventListener("pointermove", handlePointerMove);
      container.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [text]);

  return (
    <div
      ref={containerRef}
      className="relative w-full select-none cursor-crosshair"
    >
      <p
        aria-hidden="true"
        className={`font-sans font-extrabold uppercase text-[#E8EEFF] whitespace-nowrap text-center text-[19vw] leading-[0.86] ${
          ready ? "sr-only" : "block"
        }`}
      >
        {text}
      </p>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className={`w-full h-auto block ${ready ? "block" : "hidden"}`}
      />
      <span className="sr-only">{text}</span>
    </div>
  );
}
