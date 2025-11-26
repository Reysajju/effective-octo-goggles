"use client";

import { useEffect } from "react";

export function CursorGlow() {
  useEffect(() => {
    const handler = (event: MouseEvent) => {
      document.documentElement.style.setProperty("--cursor-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${event.clientY}px`);
    };

    window.addEventListener("pointermove", handler);
    return () => window.removeEventListener("pointermove", handler);
  }, []);

  return <div className="pointer-events-none fixed inset-0 z-0" aria-hidden />;
}
