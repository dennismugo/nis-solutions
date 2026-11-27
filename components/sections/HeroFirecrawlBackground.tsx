"use client";

import React, { useEffect, useMemo, useRef } from "react";

const FRAME_COUNT = 48;
const ROWS = 22;
const COLS = 58;
const FONT_SIZE = 9;
const LINE_HEIGHT = 11;
const FRAME_INTERVAL_MS = 85;
const FONT_SPEC = `${FONT_SIZE}px "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace`;

const COBALT_INK = "rgba(0, 27, 155, 0.34)";
const EMBER_INK = "rgba(230, 96, 44, 0.42)";

interface AsciiFramePair {
  baseLines: string[];
  emberLines: string[];
}

/**
 * Generates seamless-looping 48-frame ASCII plume data resembling Firecrawl's
 * low-opacity terminal embers, shaped cleanly to taper upward from bottom rails.
 */
function buildProceduralFlameFrames(): AsciiFramePair[] {
  const frames: AsciiFramePair[] = [];
  const ramp = "  ..::--==++**XX";

  for (let f = 0; f < FRAME_COUNT; f++) {
    const phase = (f / FRAME_COUNT) * Math.PI * 2;
    const baseLines: string[] = [];
    const emberLines: string[] = [];

    for (let r = 0; r < ROWS; r++) {
      const yNorm = r / (ROWS - 1);
      let baseRow = "";
      let emberRow = "";

      for (let c = 0; c < COLS; c++) {
        const xNorm = c / (COLS - 1);

        const leftEnvelope = Math.exp(-Math.pow((xNorm - 0.14) / 0.42, 2));
        const tongueWave =
          0.32 * Math.sin(xNorm * 9.5 + phase * 2 - yNorm * 4.2) +
          0.22 * Math.cos(xNorm * 16.0 - phase * 3 - yNorm * 7.0) +
          0.14 * Math.sin(xNorm * 27.0 + phase - yNorm * 10.5);

        const verticalMask = Math.pow(yNorm, 1.45);
        const emberSpark =
          Math.sin(xNorm * 23.0 + phase * 2 - yNorm * 13.0) *
          Math.cos(yNorm * 11.0 - phase);

        const density =
          leftEnvelope * verticalMask * (0.78 + 0.35 * tongueWave) +
          (yNorm > 0.25 ? emberSpark * 0.09 * leftEnvelope : 0);

        const isSpark =
          yNorm > 0.08 &&
          yNorm < 0.65 &&
          leftEnvelope > 0.22 &&
          emberSpark > 0.86;

        if (isSpark) {
          baseRow += ".";
          emberRow += (c + r + f) % 3 === 0 ? "+" : " ";
          continue;
        }

        const clamped = Math.max(0, Math.min(1, density));
        const idx = Math.floor(clamped * (ramp.length - 1));
        const ch = ramp[idx];

        if ((ch === "X" || ch === "*") && (c * 3 + r + f) % 5 === 0) {
          baseRow += " ";
          emberRow += ch === "X" ? "X" : "+";
        } else {
          baseRow += ch;
          emberRow += " ";
        }
      }

      baseLines.push(baseRow);
      emberLines.push(emberRow);
    }

    frames.push({ baseLines, emberLines });
  }

  return frames;
}

function sizeRetinaCanvas(canvas: HTMLCanvasElement) {
  const probe = document.createElement("canvas").getContext("2d");
  if (!probe) return null;
  probe.font = FONT_SPEC;
  const charW = probe.measureText("X").width || FONT_SIZE * 0.6;
  const width = COLS * charW;
  const height = ROWS * LINE_HEIGHT;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);

  canvas.width = Math.ceil(width * dpr);
  canvas.height = Math.ceil(height * dpr);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;

  const ctx = canvas.getContext("2d");
  if (!ctx) return null;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  return { ctx, width, height };
}

function drawAsciiFrame(
  ctx: CanvasRenderingContext2D,
  frame: AsciiFramePair,
  width: number,
  height: number
) {
  ctx.clearRect(0, 0, width, height);
  ctx.font = FONT_SPEC;
  ctx.textBaseline = "top";

  ctx.fillStyle = COBALT_INK;
  for (let r = 0; r < frame.baseLines.length; r++) {
    ctx.fillText(frame.baseLines[r], 0, r * LINE_HEIGHT);
  }

  ctx.fillStyle = EMBER_INK;
  for (let r = 0; r < frame.emberLines.length; r++) {
    ctx.fillText(frame.emberLines[r], 0, r * LINE_HEIGHT);
  }
}

const CORNER_PATH =
  "M11 1L11 11L10 11L10 7C10 3.68629 7.31371 1 4 1L0 1L0 0L11 0L11 1Z";

function CurvyRectCorners({
  tone,
}: {
  tone: "blue" | "orange";
}) {
  const hoverFill =
    tone === "orange"
      ? "group-hover:fill-[#E6602C]/70"
      : "group-hover:fill-[#001B9B]/65";

  const Corner = ({ className }: { className: string }) => (
    <svg
      fill="none"
      height="11"
      width="11"
      viewBox="0 0 11 11"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={`pointer-events-none absolute z-10 transition-transform duration-500 ease-out group-hover:duration-150 group-hover:scale-125 ${className}`}
    >
      <path
        d={CORNER_PATH}
        className={`fill-[#00194F]/[0.14] transition-colors duration-500 group-hover:duration-150 ${hoverFill}`}
      />
    </svg>
  );

  return (
    <>
      <Corner className="-rotate-90 top-0 left-0" />
      <Corner className="top-0 right-0" />
      <Corner className="rotate-180 bottom-0 left-0" />
      <Corner className="rotate-90 bottom-0 right-0" />
    </>
  );
}

interface BlueprintBoxProps {
  className: string;
  tone: "blue" | "orange";
  restingWhite?: boolean;
}

function BlueprintBox({
  className,
  tone,
  restingWhite = false,
}: BlueprintBoxProps) {
  const isOrange = tone === "orange";

  const restingBg = restingWhite
    ? "bg-transparent"
    : isOrange
    ? "bg-[#FFF3EC]/70"
    : "bg-[#EFF4FF]/75";

  const surfaceStyles = isOrange
    ? `${restingBg} hover:bg-[#FFE0CE]/95 hover:ring-1 hover:ring-inset hover:ring-[#E6602C]/45 hover:shadow-[inset_0_0_26px_rgba(230,96,44,0.16),0_10px_28px_-12px_rgba(230,96,44,0.32)]`
    : `${restingBg} hover:bg-[#DCE7FF]/95 hover:ring-1 hover:ring-inset hover:ring-[#001B9B]/40 hover:shadow-[inset_0_0_26px_rgba(0,27,155,0.14),0_10px_28px_-12px_rgba(0,27,155,0.28)]`;

  const shimmerGradient = "from-transparent via-white/80 to-transparent";
  const dotColor = isOrange ? "bg-[#E6602C]" : "bg-[#001B9B]";

  return (
    <div
      className={`group pointer-events-auto overflow-hidden transition-all duration-700 ease-out hover:duration-150 hover:z-20 hover:scale-[1.018] ${surfaceStyles} ${className}`}
    >
      {/* Sweeping Specular Sheen on Hover */}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute inset-y-0 -left-full w-2/3 -skew-x-12 bg-gradient-to-r ${shimmerGradient} opacity-0 transition-all duration-700 ease-out group-hover:left-[135%] group-hover:opacity-100`}
      />

      {/* Corner Accent Fillets */}
      <CurvyRectCorners tone={tone} />

      {/* Micro Pulse Indicator Dot */}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute right-2.5 top-2.5 h-1.5 w-1.5 rounded-full opacity-0 scale-50 transition-all duration-300 group-hover:opacity-90 group-hover:scale-100 ${dotColor}`}
      />
    </div>
  );
}

function CrosshairNode({ className }: { className: string }) {
  return (
    <svg
      fill="none"
      height="21"
      width="22"
      viewBox="0 0 22 21"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={`pointer-events-none absolute ${className}`}
    >
      <path
        d="M10.5 4C10.5 7.31371 7.81371 10 4.5 10H0.5V11H4.5C7.81371 11 10.5 13.6863 10.5 17V21H11.5V17C11.5 13.6863 14.1863 11 17.5 11H21.5V10H17.5C14.1863 10 11.5 7.31371 11.5 4V0H10.5V4Z"
        fill="rgba(0, 25, 79, 0.14)"
      />
    </svg>
  );
}

export default function HeroFirecrawlBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftCanvasRef = useRef<HTMLCanvasElement>(null);
  const rightCanvasRef = useRef<HTMLCanvasElement>(null);
  const frames = useMemo(() => buildProceduralFlameFrames(), []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer: ReturnType<typeof setInterval> | null = null;
    let isVisible = true;
    let cancelled = false;
    let frameIndex = 0;

    let leftSurface: ReturnType<typeof sizeRetinaCanvas> = null;
    let rightSurface: ReturnType<typeof sizeRetinaCanvas> = null;

    const paintFrame = (idx: number) => {
      const frame = frames[idx];
      if (!frame) return;
      if (leftSurface) {
        drawAsciiFrame(leftSurface.ctx, frame, leftSurface.width, leftSurface.height);
      }
      if (rightSurface) {
        drawAsciiFrame(
          rightSurface.ctx,
          frame,
          rightSurface.width,
          rightSurface.height
        );
      }
    };

    const syncTicker = () => {
      const shouldRun = isVisible && !document.hidden && !motionQuery.matches;
      if (shouldRun && !timer) {
        timer = setInterval(() => {
          frameIndex = (frameIndex + 1) % frames.length;
          paintFrame(frameIndex);
        }, FRAME_INTERVAL_MS);
      } else if (!shouldRun && timer) {
        clearInterval(timer);
        timer = null;
      }
    };

    const init = () => {
      if (cancelled) return;
      leftSurface = leftCanvasRef.current
        ? sizeRetinaCanvas(leftCanvasRef.current)
        : null;
      rightSurface = rightCanvasRef.current
        ? sizeRetinaCanvas(rightCanvasRef.current)
        : null;
      paintFrame(0);
      syncTicker();
    };

    if (document.fonts?.ready) {
      document.fonts.ready.then(init);
    } else {
      init();
    }

    const observer = new IntersectionObserver(
      (entries) => {
        isVisible = entries.some((entry) => entry.isIntersecting);
        syncTicker();
      },
      { threshold: 0.01 }
    );
    observer.observe(container);

    const handleVisibility = () => syncTicker();
    document.addEventListener("visibilitychange", handleVisibility);
    motionQuery.addEventListener?.("change", syncTicker);

    return () => {
      cancelled = true;
      if (timer) clearInterval(timer);
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
      motionQuery.removeEventListener?.("change", syncTicker);
    };
  }, [frames]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none select-none absolute inset-0 overflow-hidden z-0"
    >
      {/* Desktop Blueprint Rail System + Interactive Shaded Boxes */}
      <div className="hidden lg:block absolute inset-0">
        {/* Top navbar-clearance rule & bottom section rule */}
        <div className="pointer-events-none absolute top-[74px] bottom-0 inset-x-0 border-y border-[#00194F]/[0.08]" />

        {/* Centered 1314px Structural Framing Rails */}
        <div className="relative h-full max-w-[1314px] w-[calc(100%-32px)] mx-auto border-x border-[#00194F]/[0.08]">
          {/* Structural Vertical Inner Rails */}
          <div className="pointer-events-none absolute top-[74px] bottom-0 left-[128px] w-px bg-[#00194F]/[0.07]" />
          <div className="pointer-events-none absolute top-[74px] bottom-0 left-[272px] w-px bg-[#00194F]/[0.05]" />
          <div className="pointer-events-none absolute top-[74px] bottom-0 right-[128px] w-px bg-[#00194F]/[0.07]" />
          <div className="pointer-events-none absolute top-[74px] bottom-0 right-[272px] w-px bg-[#00194F]/[0.05]" />

          {/* Structural Horizontal Step Bars */}
          <div className="pointer-events-none absolute top-[214px] left-0 w-[272px] h-px bg-[#00194F]/[0.07]" />
          <div className="pointer-events-none absolute top-[326px] left-0 w-[272px] h-px bg-[#00194F]/[0.07]" />
          <div className="pointer-events-none absolute bottom-[132px] left-0 w-[272px] h-px bg-[#00194F]/[0.07]" />

          <div className="pointer-events-none absolute top-[214px] right-0 w-[272px] h-px bg-[#00194F]/[0.07]" />
          <div className="pointer-events-none absolute top-[326px] right-0 w-[272px] h-px bg-[#00194F]/[0.07]" />
          <div className="pointer-events-none absolute bottom-[132px] right-0 w-[272px] h-px bg-[#00194F]/[0.07]" />

          {/* Left Outer Column Interactive Shaded Boxes */}
          <BlueprintBox
            tone="blue"
            className="absolute top-[74px] left-0 w-[128px] h-[140px]"
          />
          <BlueprintBox
            tone="orange"
            className="absolute top-[214px] left-0 w-[128px] h-[112px]"
          />
          <BlueprintBox
            tone="blue"
            className="absolute top-[326px] bottom-[132px] left-0 w-[128px]"
          />
          <BlueprintBox
            tone="orange"
            restingWhite
            className="absolute bottom-0 left-0 w-[128px] h-[132px]"
          />

          {/* Left Inner Column Interactive Shaded Boxes */}
          <BlueprintBox
            tone="orange"
            className="absolute top-[74px] left-[128px] w-[144px] h-[140px]"
          />
          <BlueprintBox
            tone="blue"
            className="absolute top-[214px] left-[128px] w-[144px] h-[112px]"
          />
          <BlueprintBox
            tone="orange"
            restingWhite
            className="absolute bottom-0 left-[128px] w-[144px] h-[132px]"
          />

          {/* Right Outer Column Interactive Shaded Boxes */}
          <BlueprintBox
            tone="orange"
            className="absolute top-[74px] right-0 w-[128px] h-[140px]"
          />
          <BlueprintBox
            tone="blue"
            className="absolute top-[214px] right-0 w-[128px] h-[112px]"
          />
          <BlueprintBox
            tone="orange"
            className="absolute top-[326px] bottom-[132px] right-0 w-[128px]"
          />
          <BlueprintBox
            tone="blue"
            restingWhite
            className="absolute bottom-0 right-0 w-[128px] h-[132px]"
          />

          {/* Right Inner Column Interactive Shaded Boxes */}
          <BlueprintBox
            tone="blue"
            className="absolute top-[74px] right-[128px] w-[144px] h-[140px]"
          />
          <BlueprintBox
            tone="orange"
            className="absolute top-[214px] right-[128px] w-[144px] h-[112px]"
          />
          <BlueprintBox
            tone="blue"
            restingWhite
            className="absolute bottom-0 right-[128px] w-[144px] h-[132px]"
          />
        </div>
      </div>

      {/* Mobile / Tablet Simplified Framing Rails + Corner Crosshairs */}
      <div className="lg:hidden absolute top-[72px] bottom-0 inset-x-4 border-x border-[#00194F]/[0.08]">
        <div className="absolute top-0 inset-x-[-16px] h-px bg-[#00194F]/[0.08]" />
        <div className="absolute bottom-0 inset-x-[-16px] h-px bg-[#00194F]/[0.08]" />
        <CrosshairNode className="-top-[10px] -left-[10.5px]" />
        <CrosshairNode className="-top-[10px] -right-[10.5px]" />
      </div>

      {/* Flanking Mirrored 2D Canvas ASCII Plumes (Rendered Clearly Over White Ground) */}
      <div
        ref={containerRef}
        className="hidden lg:flex pointer-events-none z-10 absolute left-1/2 -translate-x-1/2 bottom-0 w-[calc(100%-290px)] max-w-[1058px] h-[230px] justify-between items-end overflow-hidden"
      >
        <div className="relative w-[360px] h-full overflow-hidden">
          <canvas
            ref={leftCanvasRef}
            className="absolute bottom-0 left-0 fc-decoration"
          />
        </div>
        <div className="relative w-[360px] h-full overflow-hidden">
          <canvas
            ref={rightCanvasRef}
            className="absolute bottom-0 right-0 -scale-x-100 fc-decoration"
          />
        </div>
      </div>
    </div>
  );
}
