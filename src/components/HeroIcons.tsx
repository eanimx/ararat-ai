function Svg({
  children,
  className = "",
  strokeWidth = 2,
}: {
  children: React.ReactNode;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {children}
    </svg>
  );
}

export function StorefrontIcon({ className = "" }: { className?: string }) {
  return (
    <Svg className={className}>
      <path d="M3 21h18" />
      <path d="M5 21V7l7-4 7 4v14" />
      <path d="M9 21v-6h6v6" />
    </Svg>
  );
}

export function BotIcon({
  className = "",
  strokeWidth = 2,
}: {
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <Svg className={className} strokeWidth={strokeWidth}>
      <rect x="7.2" y="8" width="9.6" height="8" rx="1.8" />
      <path d="M12 8V6" />
      <circle cx="12" cy="5.1" r="0.75" />
      <circle cx="9.9" cy="10.5" r="0.75" fill="currentColor" stroke="none" />
      <circle cx="14.1" cy="10.5" r="0.75" fill="currentColor" stroke="none" />
      <path d="M10.8 14h2.4" />
    </Svg>
  );
}

export function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <Svg className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </Svg>
  );
}

export function ChatIcon({ className = "" }: { className?: string }) {
  return (
    <Svg className={className}>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </Svg>
  );
}

export function CalendarIcon({ className = "" }: { className?: string }) {
  return (
    <Svg className={className}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </Svg>
  );
}

export function HeroBadge({
  bg,
  children,
  size = "big",
  className = "",
  innerSize,
}: {
  bg: string;
  children: React.ReactNode;
  size?: "big" | "small";
  className?: string;
  innerSize?: string;
}) {
  const dim = size === "big" ? "w-[0.8em] h-[0.8em]" : "w-[0.56em] h-[0.56em]";
  return (
    <span
      className={`inline-flex items-center justify-center align-middle relative top-[-0.09em] rounded-full ${dim} ${bg} ${className}`}
    >
      <span
        className={innerSize ? "" : "w-[52%] h-[52%]"}
        style={innerSize ? { width: innerSize, height: innerSize } : undefined}
      >
        {children}
      </span>
    </span>
  );
}
