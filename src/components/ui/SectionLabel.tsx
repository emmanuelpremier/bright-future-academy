interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <span className={`inline-block text-xs uppercase tracking-widest text-gold font-medium ${className}`}>
      {children}
    </span>
  );
}
