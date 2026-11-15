import Link from "next/link";
import { ReactNode } from "react";

import { ArrowRight, Calendar, CalendarCheck } from "lucide-react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "gold" | "onDark";
  className?: string;
  onClick?: () => void;
  icon?: "arrow" | "calendar" | "calendarCheck" | null;
  iconPosition?: "left" | "right";
}

export default function Button({ children, href, variant = "primary", className = "", onClick, icon, iconPosition }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9A6B2F]/50 focus-visible:ring-offset-2 motion-reduce:transition-none min-h-[44px]";
  const variants = {
    primary: "bg-[#0F2A44] text-white hover:bg-[#1B3A5C] hover:shadow-lg hover:shadow-[#0F2A44]/20",
    outline: "bg-transparent border border-[#0F2A44]/15 text-[#0F2A44] hover:bg-[#F8E9C6]/70 hover:border-[#9A6B2F] hover:text-[#9A6B2F] transition-colors duration-300",
    gold: "bg-gold text-navy hover:opacity-90",
    onDark: "border border-cream/40 text-cream hover:bg-cream hover:text-navy"
  };

  const resolvedIcon = icon === null ? null : icon ?? (variant === "outline" ? "calendarCheck" : "arrow");
  const resolvedPosition = resolvedIcon === null ? "right" : iconPosition ?? (resolvedIcon === "arrow" ? "right" : "left");
  const Icon = resolvedIcon === "calendarCheck" ? CalendarCheck : resolvedIcon === "calendar" ? Calendar : ArrowRight;
  const iconEl = resolvedIcon ? <Icon size={16} className={variant === "outline" ? "text-[#0F2A44]" : ""} /> : null;

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  const content = (
    <>
      {resolvedPosition === "left" && iconEl}
      <span>{children}</span>
      {resolvedPosition === "right" && iconEl}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={styles}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={styles}>
      {content}
    </button>
  );
}
