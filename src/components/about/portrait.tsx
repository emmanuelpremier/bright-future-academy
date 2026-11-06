import { GraduationCap, MapPin } from "lucide-react";

interface PortraitProps {
  initials: string;
  name: string;
  role: string;
  subject: string;
  className?: string;
}

export default function Portrait({ initials, name, role, subject, className = "" }: PortraitProps) {
  return (
    <div className={`relative flex-shrink-0 ${className}`}>
      <div className="bg-sand rounded-lg aspect-[3/4] flex items-center justify-center overflow-hidden">
        <GraduationCap className="w-8 h-8 text-gold" />
        <span className="absolute bottom-1 left-1 right-1 text-center text-xs font-heading text-navy font-semibold">
          {initials}
        </span>
      </div>
      <div className="absolute -bottom-2 -right-2 bg-cream border border-border rounded-md px-2 py-1 text-xs text-muted">
        <MapPin size={10} className="inline mr-1 -mt-0.5" />
        {role}
      </div>
    </div>
  );
}
