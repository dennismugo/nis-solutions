"use client";

import React, { useEffect, useRef } from "react";

const VERTEX_SHADER_SOURCE = `
attribute vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

// Animated cobalt wave & translucent prism-slice shader inspired by Poba Shade
const FRAGMENT_SHADER_SOURCE = `
precision highp float;

uniform vec2  u_resolution;
uniform float u_time;
uniform vec2  u_mouse;
uniform float u_cursorPresence;

float hash21(vec2 p) {
  p = mod(p, 64.0);
  p = fract(p * vec2(234.34, 435.345));
  p += dot(p, p + 34.23);
  return fract(p.x * p.y);
}

// Smooth white-noise film grain (Dave Hoskins hash12)
float grainHash(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash21(i), hash21(i + vec2(1.0, 0.0)), u.x),
    mix(hash21(i + vec2(0.0, 1.0)), hash21(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 4; i++) {
    v += a * noise(p);
    p = p * 2.04 + vec2(13.4, 7.9);
    a *= 0.5;
  }
  return v;
}

vec2 rotate2d(vec2 p, float a) {
  float c = cos(a);
  float s = sin(a);
  return mat2(c, -s, s, c) * p;
}

// Perceptual OKLab blending for luminous white -> ice -> cobalt transitions
vec3 srgbToLinear(vec3 c) {
  return mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(0.04045, c));
}

vec3 linearToSrgb(vec3 c) {
  return mix(c * 12.92, 1.055 * pow(max(c, vec3(0.0)), vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c));
}

vec3 linToOklab(vec3 c) {
  float l = pow(max(0.4122214708 * c.r + 0.5363325363 * c.g + 0.0514459929 * c.b, 0.0), 1.0 / 3.0);
  float m = pow(max(0.2119034982 * c.r + 0.6806995451 * c.g + 0.1073969566 * c.b, 0.0), 1.0 / 3.0);
  float s = pow(max(0.0883024619 * c.r + 0.2817188376 * c.g + 0.6299787005 * c.b, 0.0), 1.0 / 3.0);
  return vec3(
    0.2104542553 * l + 0.7936177850 * m - 0.0040720468 * s,
    1.9779984951 * l - 2.4285922050 * m + 0.4505937099 * s,
    0.0259040371 * l + 0.7827717662 * m - 0.8086757660 * s
  );
}

vec3 oklabToLin(vec3 c) {
  float l = c.x + 0.3963377774 * c.y + 0.2158037573 * c.z;
  float m = c.x - 0.1055613458 * c.y - 0.0638541728 * c.z;
  float s = c.x - 0.0894841775 * c.y - 1.2914855480 * c.z;
  l = l * l * l;
  m = m * m * m;
  s = s * s * s;
  return vec3(
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s
  );
}

vec3 mixOklab(vec3 a, vec3 b, float t) {
  vec3 la = linToOklab(srgbToLinear(a));
  vec3 lb = linToOklab(srgbToLinear(b));
  return clamp(linearToSrgb(oklabToLin(mix(la, lb, clamp(t, 0.0, 1.0)))), 0.0, 1.0);
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  float minDim = min(u_resolution.x, u_resolution.y);
  vec2 p = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / minDim;

  // Interactive cursor-reactive swirl
  if (u_cursorPresence > 0.001) {
    vec2 cursor = (0.5 * u_mouse * u_resolution.xy) / minDim;
    vec2 delta = p - cursor;
    float dist = length(delta);
    float mask = u_cursorPresence * (1.0 - smoothstep(0.0, 0.64, dist));
    float angle = mask * 1.15;
    p = cursor + rotate2d(delta, angle);
  }

  float t = u_time * 0.42;

  // Subtle tilted coordinate space for stepped prism ribbons
  vec2 q = rotate2d(p, 0.22);
  vec2 q2 = rotate2d(p, -0.14);

  // Flowing multi-harmonic crest rising along the lower hero third
  float n = fbm(vec2(q.x * 1.5 - t * 0.22, q.y * 0.85 + t * 0.12));
  float waveCrest =
    0.20 +
    0.095 * sin(uv.x * 4.4 - t * 0.85 + 0.6) +
    0.055 * cos(uv.x * 7.8 + t * 0.55) +
    0.075 * (n - 0.5);

  // Faceted vertical-diagonal prism glass bands resembling Poba Shade texture
  float sliceCoord1 = q.x * 9.5 - t * 0.25;
  float sliceId1 = floor(sliceCoord1);
  float sliceEdge1 = smoothstep(0.0, 0.08, fract(sliceCoord1)) *
                     (1.0 - smoothstep(0.92, 1.0, fract(sliceCoord1)));
  float sliceTone1 = hash21(vec2(sliceId1, 4.0));
  float sliceLift1 = (sliceTone1 - 0.45) * 0.14 * mix(0.6, 1.0, sliceEdge1);

  float sliceCoord2 = q2.x * 16.0 + q2.y * 2.2 + t * 0.18;
  float sliceId2 = floor(sliceCoord2);
  float sliceTone2 = hash21(vec2(sliceId2, 11.0));
  float sliceLift2 = (sliceTone2 - 0.5) * 0.09;

  // Stepped terrace height modulation for overlapping translucent sheets
  float effectiveY = uv.y - sliceLift1 * 0.48 - sliceLift2 * 0.35;
  float waveField = 1.0 - smoothstep(waveCrest - 0.14, waveCrest + 0.16, effectiveY);

  // Soft internal depth & shimmering ribbon curtains inside the blue wave zone
  float shimmer =
    0.58 +
    0.24 * sliceTone1 +
    0.18 * sliceTone2 +
    0.14 * sin(q.x * 5.2 + q.y * 3.1 - t);
  float intensity = clamp(waveField * shimmer, 0.0, 1.0);

  // Sharp prism seam boost right near active stepped fronts
  float bandBoost = smoothstep(0.08, 0.85, waveField) * (0.65 + 0.35 * sliceTone1);
  float mixVal = clamp(mix(intensity, bandBoost, 0.45), 0.0, 1.0);

  // Crisp pure white upper ground blending into vibrant cobalt & deep NIS blue
  vec3 colWhite = vec3(1.0, 1.0, 1.0);
  vec3 colSky   = vec3(0.45, 0.68, 1.0);
  vec3 colAzure = vec3(0.04, 0.36, 1.0);
  vec3 colDeep  = vec3(0.0, 0.13, 0.72);

  vec3 col = colWhite;
  col = mixOklab(col, colSky,   smoothstep(0.02, 0.36, mixVal));
  col = mixOklab(col, colAzure, smoothstep(0.28, 0.74, mixVal));
  col = mixOklab(col, colDeep,  smoothstep(0.68, 1.0,  mixVal));

  // Analog fine grain concentrated subtly in pigmented wave zone (keeps white pure)
  float grainMask = smoothstep(0.02, 0.25, mixVal);
  float grain = (grainHash(gl_FragCoord.xy + vec2(fract(u_time) * 7.0, 31.0)) - 0.5) * 0.058 * grainMask;
  col = clamp(col + grain, 0.0, 1.0);

  gl_FragColor = vec4(col, 1.0);
}
`;

function compileShader(
  gl: WebGLRenderingContext,
  type: number,
  source: string
) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

export default function HeroPobaShader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", {
      antialias: false,
      alpha: false,
      powerPreference: "high-performance",
      preserveDrawingBuffer: false,
    });
    if (!gl) return;

    const vert = compileShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER_SOURCE);
    const frag = compileShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER_SOURCE);
    if (!vert || !frag) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vert);
    gl.attachShader(program, frag);
    gl.linkProgram(program);
    gl.deleteShader(vert);
    gl.deleteShader(frag);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      gl.deleteProgram(program);
      return;
    }

    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    // Full-screen single covering triangle
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW
    );

    const posLoc = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const uResLoc = gl.getUniformLocation(program, "u_resolution");
    const uTimeLoc = gl.getUniformLocation(program, "u_time");
    const uMouseLoc = gl.getUniformLocation(program, "u_mouse");
    const uPresenceLoc = gl.getUniformLocation(program, "u_cursorPresence");

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let rafId = 0;
    let isVisible = true;
    let isTabVisible = document.visibilityState === "visible";
    let lastStamp: number | null = null;
    let simTime = 1.4;

    let rect = canvas.getBoundingClientRect();
    let targetMouseX = 0;
    let targetMouseY = 0;
    let smoothMouseX = 0;
    let smoothMouseY = 0;
    let targetPresence = 0;
    let smoothPresence = 0;

    const syncSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.max(1, Math.floor(canvas.clientWidth * dpr));
      const h = Math.max(1, Math.floor(canvas.clientHeight * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
      gl.viewport(0, 0, canvas.width, canvas.height);
      rect = canvas.getBoundingClientRect();
    };

    const drawFrame = (now: number) => {
      rafId = 0;
      const dt = lastStamp === null ? 0 : Math.min((now - lastStamp) / 1000, 0.1);
      lastStamp = now;

      if (!motionQuery.matches) {
        simTime += dt;
      }

      const damp = 1 - Math.exp(-10 * dt);
      smoothMouseX += (targetMouseX - smoothMouseX) * damp;
      smoothMouseY += (targetMouseY - smoothMouseY) * damp;
      smoothPresence += (targetPresence - smoothPresence) * damp;

      gl.uniform2f(uResLoc, canvas.width, canvas.height);
      gl.uniform1f(uTimeLoc, simTime);
      gl.uniform2f(uMouseLoc, smoothMouseX, smoothMouseY);
      gl.uniform1f(uPresenceLoc, smoothPresence);
      gl.drawArrays(gl.TRIANGLES, 0, 3);

      if (isVisible && isTabVisible && !motionQuery.matches) {
        rafId = requestAnimationFrame(drawFrame);
      } else {
        lastStamp = null;
      }
    };

    const scheduleRender = () => {
      if (!rafId && isVisible && isTabVisible) {
        rafId = requestAnimationFrame(drawFrame);
      }
    };

    const stopRender = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = 0;
      }
      lastStamp = null;
    };

    const onPointerMove = (e: PointerEvent) => {
      rect = canvas.getBoundingClientRect();
      if (
        rect.width === 0 ||
        rect.height === 0 ||
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom
      ) {
        targetPresence = 0;
        return;
      }
      targetMouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      targetMouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetPresence = 1;
      scheduleRender();
    };

    const onPointerLeave = () => {
      targetPresence = 0;
    };

    const onVisibilityChange = () => {
      isTabVisible = document.visibilityState === "visible";
      if (isTabVisible) scheduleRender();
      else stopRender();
    };

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        isVisible = entries.some((entry) => entry.isIntersecting);
        if (isVisible) scheduleRender();
        else stopRender();
      },
      { threshold: 0.01 }
    );
    intersectionObserver.observe(canvas);

    const resizeObserver = new ResizeObserver(() => {
      syncSize();
      scheduleRender();
    });
    resizeObserver.observe(canvas);

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onPointerLeave);
    document.addEventListener("visibilitychange", onVisibilityChange);
    motionQuery.addEventListener?.("change", scheduleRender);

    syncSize();
    scheduleRender();

    return () => {
      stopRender();
      intersectionObserver.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener(
        "pointerleave",
        onPointerLeave
      );
      document.removeEventListener("visibilitychange", onVisibilityChange);
      motionQuery.removeEventListener?.("change", scheduleRender);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-white"
    >
      {/* Subtle CSS Gradient Fallback Until WebGL Paints */}
      <div className="absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-[#0B4BFF]/25 via-[#7DB3FF]/10 to-transparent" />
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
}
