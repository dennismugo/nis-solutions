"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  MessageSquare,
  X,
  Send,
  Volume2,
  VolumeX,
  ArrowUpRight,
} from "lucide-react";

interface ChatMessage {
  id: string;
  sender: "bot" | "user";
  text: string;
  showDemoBtn?: boolean;
}

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: "welcome-1",
    sender: "bot",
    text: "Habari! How can we help today? Ask a question about software, infrastructure, security or systems—or book a walkthrough below.",
  },
];

function getReplyForInput(input: string): Omit<ChatMessage, "id" | "sender"> {
  const q = input.toLowerCase();
  if (/bank|sacco|loan|credit|reconcil|mpesa|wallet|ledger/.test(q)) {
    return {
      text: "Our financial systems team handles core banking, SACCO apps, credit workflows and M-Pesa/bank reconciliation across Kenya. Let’s walk through your setup together.",
      showDemoBtn: true,
    };
  }
  if (/network|wifi|wi-fi|cabling|cctv|camera|security|firewall|cyber/.test(q)) {
    return {
      text: "We begin with an on-site technical assessment in Nairobi or countrywide and issue an itemised Bill of Materials before any work starts.",
      showDemoBtn: true,
    };
  }
  if (/website|app|software|erp|crm|pos|school|real estate|portal|autom/.test(q)) {
    return {
      text: "Our engineering team scopes custom platforms, CRM, POS/ERP and workflow automation around how your staff actually operate.",
      showDemoBtn: true,
    };
  }
  return {
    text: "Thanks for sharing that. Would you like to walk through your requirements live with our engineering team?",
    showDemoBtn: true,
  };
}

export default function NileChatWidget() {
  const [mounted, setMounted] = useState(false);
  const [launcherReady, setLauncherReady] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showNudge, setShowNudge] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [isTyping, setIsTyping] = useState(false);
  const [draft, setDraft] = useState("");

  const audioCtxRef = useRef<AudioContext | null>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const pendingPopSoundRef = useRef(false);

  // Sound synthesis via zero-asset Web Audio API
  const ensureAudioCtx = useCallback(() => {
    if (isMuted || typeof window === "undefined") return null;
    const AudioCtor =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext?: typeof AudioContext })
        .webkitAudioContext;
    if (!AudioCtor) return null;
    if (!audioCtxRef.current) {
      audioCtxRef.current = new AudioCtor();
    }
    return audioCtxRef.current;
  }, [isMuted]);

  const schedulePopNodes = useCallback((ctx: AudioContext, opening: boolean) => {
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";

    if (opening) {
      osc.frequency.setValueAtTime(420, now);
      osc.frequency.exponentialRampToValueAtTime(920, now + 0.055);
    } else {
      osc.frequency.setValueAtTime(540, now);
      osc.frequency.exponentialRampToValueAtTime(320, now + 0.045);
    }

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(opening ? 0.14 : 0.08, now + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.09);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.095);
  }, []);

  const playPopSound = useCallback(
    (opening: boolean) => {
      const ctx = ensureAudioCtx();
      if (!ctx) return;

      if (ctx.state === "running") {
        schedulePopNodes(ctx, opening);
      } else {
        ctx
          .resume()
          .then(() => {
            if (ctx.state === "running") {
              schedulePopNodes(ctx, opening);
            } else if (opening) {
              pendingPopSoundRef.current = true;
            }
          })
          .catch(() => {
            if (opening) pendingPopSoundRef.current = true;
          });
      }
    },
    [ensureAudioCtx, schedulePopNodes]
  );

  const playReplyChime = useCallback(() => {
    const ctx = ensureAudioCtx();
    if (!ctx) return;

    const triggerChime = () => {
      const notes = [587.33, 880];
      notes.forEach((freq, i) => {
        const start = ctx.currentTime + i * 0.075;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, start);

        gain.gain.setValueAtTime(0.001, start);
        gain.gain.linearRampToValueAtTime(0.075, start + 0.012);
        gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.18);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(start);
        osc.stop(start + 0.19);
      });
    };

    if (ctx.state === "running") {
      triggerChime();
    } else {
      ctx
        .resume()
        .then(() => {
          if (ctx.state === "running") triggerChime();
        })
        .catch(() => {});
    }
  }, [ensureAudioCtx]);

  // Pre-unlock browser Web Audio on first user interaction + play 4s pop sound
  useEffect(() => {
    const unlock = () => {
      const ctx = ensureAudioCtx();
      if (!ctx) return;
      ctx
        .resume()
        .then(() => {
          if (pendingPopSoundRef.current && ctx.state === "running") {
            pendingPopSoundRef.current = false;
            schedulePopNodes(ctx, true);
          }
        })
        .catch(() => {});
    };

    window.addEventListener("pointerdown", unlock, { passive: true });
    window.addEventListener("keydown", unlock, { passive: true });
    window.addEventListener("touchstart", unlock, { passive: true });

    return () => {
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("keydown", unlock);
      window.removeEventListener("touchstart", unlock);
    };
  }, [ensureAudioCtx, schedulePopNodes]);

  // Pop onto screen cleanly after 4 seconds with spring overshoot & sound
  useEffect(() => {
    setMounted(true);
    try {
      if (window.localStorage.getItem("nis_chat_muted") === "1") {
        setIsMuted(true);
      }
    } catch {
      // Ignore storage access errors
    }

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const popTimer = window.setTimeout(() => {
      setLauncherReady(true);
      setShowNudge(true);
      playPopSound(true);
    }, prefersReduced ? 100 : 4000);

    return () => {
      window.clearTimeout(popTimer);
    };
  }, [playPopSound]);

  // Scroll-progress SVG ring around floating button
  useEffect(() => {
    let rafId = 0;
    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        const scrollable =
          document.documentElement.scrollHeight - window.innerHeight;
        const p =
          scrollable > 0
            ? Math.min(1, Math.max(0, window.scrollY / scrollable))
            : 0;
        setScrollProgress(p);
        rafId = 0;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  // Scroll chat thread to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, isOpen]);

  // Escape key closes drawer cleanly
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        playPopSound(false);
        setIsOpen(false);
        launcherRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, playPopSound]);

  const dismissNudge = () => {
    setShowNudge(false);
    try {
      window.sessionStorage.setItem("nis_chat_nudge_seen", "1");
    } catch {
      // Ignore
    }
  };

  const toggleOpen = () => {
    const next = !isOpen;
    playPopSound(next);
    setIsOpen(next);
    if (next) dismissNudge();
  };

  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    try {
      window.localStorage.setItem("nis_chat_muted", nextMuted ? "1" : "0");
    } catch {
      // Ignore
    }
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = draft.trim();
    if (!clean || isTyping) return;

    playPopSound(true);
    setDraft("");
    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      sender: "user",
      text: clean,
    };
    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    const replyData = getReplyForInput(clean);
    window.setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: `b-${Date.now()}`,
          sender: "bot",
          ...replyData,
        },
      ]);
      playReplyChime();
    }, 420);
  };

  const radius = 29;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - scrollProgress);

  return (
    <>
      {/* Expanded Morphing Chat Panel (clip-path expands directly from bottom-right button) */}
      <div
        role="dialog"
        aria-modal="false"
        aria-label="Nile ICT Advisor Chat"
        aria-hidden={!isOpen}
        style={{
          clipPath: isOpen
            ? "inset(0 0 0 0 round 0px)"
            : "inset(calc(100% - 64px) 0 0 calc(100% - 64px) round 32px)",
          transition: "clip-path 0.52s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
        className={`fixed bottom-24 right-5 sm:bottom-28 sm:right-7 z-[80] w-[min(388px,calc(100vw-2.5rem))] bg-white border border-nis-navy/20 shadow-[0_28px_70px_-14px_rgba(0,12,66,0.35)] flex flex-col overflow-hidden ${
          isOpen ? "pointer-events-auto" : "pointer-events-none invisible"
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#001166] via-[#0111A2] to-[#00194F] text-white px-5 py-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 bg-[#F85508] text-white flex items-center justify-center shrink-0">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="font-heading text-base leading-tight truncate">
                Nile ICT Advisor
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1 shrink-0">
            <button
              type="button"
              onClick={toggleMute}
              aria-label={isMuted ? "Unmute chat sounds" : "Mute chat sounds"}
              title={isMuted ? "Unmute sounds" : "Mute sounds"}
              className="p-2 text-white/75 hover:text-white hover:bg-white/10 transition-colors"
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4" />
              ) : (
                <Volume2 className="w-4 h-4" />
              )}
            </button>
            <button
              type="button"
              onClick={toggleOpen}
              aria-label="Close chat assistant"
              className="p-2 text-white/75 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Messages Stream */}
        <div className="bg-[#F5F7FA] px-4 py-4 space-y-3 h-[300px] sm:h-[325px] overflow-y-auto">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${
                msg.sender === "user" ? "items-end" : "items-start"
              }`}
            >
              <div
                className={`max-w-[86%] px-3.5 py-2.5 text-[13.5px] leading-relaxed ${
                  msg.sender === "user"
                    ? "bg-[#0111A2] text-white"
                    : "bg-white border border-nis-navy/12 text-nis-navy shadow-[0_2px_8px_rgba(0,25,79,0.04)]"
                }`}
              >
                <p>{msg.text}</p>

                {msg.sender === "bot" && msg.showDemoBtn && (
                  <div className="mt-2.5 pt-2.5 border-t border-nis-navy/10">
                    <Link
                      href="/contact?intent=demo"
                      onClick={() => setIsOpen(false)}
                      className="inline-flex items-center gap-1.5 rounded-full bg-[#F85508] hover:bg-[#0111A2] text-white text-xs font-semibold px-4 py-1.5 transition-colors"
                    >
                      <span>Book a Demo</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-start">
              <div className="bg-white border border-nis-navy/12 px-3.5 py-2.5 inline-flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0111A2]/60 animate-bounce [animation-delay:0ms]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#0111A2]/60 animate-bounce [animation-delay:140ms]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#0111A2]/60 animate-bounce [animation-delay:280ms]" />
              </div>
            </div>
          )}

          {/* Single Clean Rounded CTA Button (No Topic Tabs) */}
          {messages.length === 1 && !isTyping && (
            <div className="pt-1">
              <Link
                href="/contact?intent=demo"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center gap-1.5 rounded-full bg-[#F85508] hover:bg-[#0111A2] text-white text-xs font-semibold px-4 py-2 transition-colors shadow-sm"
              >
                <span>Book a Demo</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Composer */}
        <form
          onSubmit={handleSend}
          className="bg-white border-t border-nis-navy/12 px-3 py-2.5 flex items-center gap-2"
        >
          <input
            type="text"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Ask about systems, networks or quotes..."
            className="flex-1 min-w-0 bg-[#F5F7FA] border border-nis-navy/12 focus:border-[#0111A2] focus:outline-none text-sm text-nis-navy px-3 py-2 placeholder:text-gray-400"
          />
          <button
            type="submit"
            aria-label="Send message"
            disabled={!draft.trim() || isTyping}
            className="w-9 h-9 bg-[#F85508] hover:bg-[#0111A2] disabled:opacity-45 text-white flex items-center justify-center shrink-0 transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>

      {/* Proactive Greeting Pill popping smoothly beside Bottom-Right Launcher at 4s */}
      {mounted && launcherReady && showNudge && !isOpen && (
        <div className="flex fixed bottom-7 right-24 sm:bottom-9 sm:right-26 z-[80] max-w-[calc(100vw-7rem)] items-center gap-2 bg-white border border-[#0111A2]/20 shadow-[0_14px_34px_rgba(0,12,66,0.18)] pl-3.5 pr-2 py-2.5">
          <span className="w-2 h-2 rounded-full bg-[#F85508] shrink-0" />
          <button
            type="button"
            onClick={toggleOpen}
            className="text-left text-xs font-semibold text-nis-navy hover:text-[#0111A2] transition-colors truncate"
          >
            Need help scoping a project?
          </button>
          <button
            type="button"
            onClick={dismissNudge}
            aria-label="Dismiss greeting"
            className="p-1 text-gray-400 hover:text-nis-navy transition-colors shrink-0"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Circular Bottom-Right Launcher with Scroll Ring & Spring Overshoot Pop */}
      <button
        ref={launcherRef}
        type="button"
        onClick={toggleOpen}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close chat advisor" : "Open Nile ICT Advisor"}
        style={{
          transform: launcherReady
            ? undefined
            : "scale(0)",
          transition:
            "transform 0.78s cubic-bezier(0.34, 1.56, 0.64, 1), background-color 0.35s ease, box-shadow 0.35s ease",
        }}
        className={`group fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-[81] w-16 h-16 rounded-full flex items-center justify-center overflow-hidden shadow-[0_14px_36px_rgba(1,17,162,0.4)] hover:scale-110 hover:-rotate-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F85508] focus-visible:ring-offset-2 ${
          isOpen
            ? "bg-[#00194F] text-white"
            : "bg-[#0111A2] text-white"
        }`}
      >
        {/* Bottom-Up Orange Liquid Hover Fill */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-full bg-[#F85508] scale-0 origin-[50%_100%] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-100"
        />

        {/* Circular Scroll-Progress Ring */}
        <svg
          aria-hidden="true"
          viewBox="0 0 64 64"
          className="pointer-events-none absolute inset-0 w-full h-full -rotate-90 z-10"
        >
          <circle
            cx="32"
            cy="32"
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.22)"
            strokeWidth="2"
          />
          <circle
            cx="32"
            cy="32"
            r={radius}
            fill="none"
            stroke="#FFE4D4"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
            className="transition-[stroke-dashoffset] duration-150 ease-linear"
          />
        </svg>

        {/* Center Icon Morph */}
        <span className="relative z-20 transition-transform duration-300 group-hover:rotate-6">
          {isOpen ? (
            <X className="w-6 h-6 stroke-[2]" />
          ) : (
            <MessageSquare className="w-6 h-6 stroke-[2]" />
          )}
        </span>

        {/* Live Orange Status Dot when closed */}
        {!isOpen && (
          <span
            aria-hidden="true"
            className="absolute top-3 right-3 z-20 w-2.5 h-2.5 rounded-full bg-[#F85508] ring-2 ring-[#0111A2] group-hover:ring-[#F85508]"
          />
        )}
      </button>
    </>
  );
}
