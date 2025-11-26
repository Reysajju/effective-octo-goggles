import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur transition hover:border-white/30 hover:bg-white/10",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/0 opacity-0 transition group-hover:opacity-100" />
      <div className="relative z-10 space-y-2">{children}</div>
    </div>
  );
}
