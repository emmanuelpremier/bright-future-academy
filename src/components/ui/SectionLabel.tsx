interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <span className={`flex items-center gap-3 text-xs uppercase tracking-widest text-gold font-medium ${className}`}>
      <span aria-hidden="true" className="h-px w-8 shrink-0 bg-current" />
      <span>{children}</span>
    </span>
  );
}
