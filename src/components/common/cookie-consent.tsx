"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [choice, setChoice] = useState<string | null>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem("clientflow-cookie-choice");
    if (!stored) {
      setVisible(true);
      return;
    }
    setChoice(stored);
  }, []);

  function handleConsent(value: string) {
    window.localStorage.setItem("clientflow-cookie-choice", value);
    setChoice(value);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-6 z-50 mx-auto flex w-[min(640px,90vw)] flex-col gap-4 rounded-3xl border border-white/20 bg-[#071428]/80 p-6 text-white backdrop-blur">
      <div>
        <p className="text-lg font-semibold">Cookies & consent</p>
        <p className="text-sm text-white/70">
          We only enable analytics and marketing pixels after you opt in. Necessary cookies keep ClientFlow secure.
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <Button variant="primary" size="sm" onClick={() => handleConsent("all")}
          >Accept all</Button>
        <Button variant="secondary" size="sm" onClick={() => handleConsent("analytics")}
          >Analytics only</Button>
        <Button variant="ghost" size="sm" onClick={() => handleConsent("required")}
          >Necessary only</Button>
      </div>
    </div>
  );
}
