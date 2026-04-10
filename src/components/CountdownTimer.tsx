import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

interface CountdownTimerProps {
  /** Duration in hours for the countdown loop */
  hours?: number;
  className?: string;
  compact?: boolean;
}

function getTimeLeft(hours: number) {
  const now = Date.now();
  const cycle = hours * 60 * 60 * 1000;
  const remaining = cycle - (now % cycle);

  const h = Math.floor(remaining / 3600000);
  const m = Math.floor((remaining % 3600000) / 60000);
  const s = Math.floor((remaining % 60000) / 1000);
  return { h, m, s };
}

export default function CountdownTimer({ hours = 8, className = "", compact = false }: CountdownTimerProps) {
  const [time, setTime] = useState(() => getTimeLeft(hours));

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft(hours)), 1000);
    return () => clearInterval(id);
  }, [hours]);

  const pad = (n: number) => String(n).padStart(2, "0");

  if (compact) {
    return (
      <span className={`inline-flex items-center gap-1 text-[10px] font-heading font-bold text-cta ${className}`}>
        <Clock className="w-3 h-3" />
        {pad(time.h)}:{pad(time.m)}:{pad(time.s)}
      </span>
    );
  }

  return (
    <div className={`inline-flex items-center gap-1.5 rounded-lg bg-cta/10 border border-cta/20 px-2 py-1 ${className}`}>
      <Clock className="w-3.5 h-3.5 text-cta flex-shrink-0" />
      <div className="flex items-center gap-0.5 font-heading font-black text-xs text-cta tabular-nums">
        <span className="bg-cta/15 rounded px-1 py-0.5">{pad(time.h)}</span>
        <span className="animate-pulse">:</span>
        <span className="bg-cta/15 rounded px-1 py-0.5">{pad(time.m)}</span>
        <span className="animate-pulse">:</span>
        <span className="bg-cta/15 rounded px-1 py-0.5">{pad(time.s)}</span>
      </div>
    </div>
  );
}
