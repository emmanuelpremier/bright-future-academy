import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { school } from "@/lib/school";

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 transition-colors duration-300 hover:border-[#B8893B] hover:text-[#B8893B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8893B]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F2A44] motion-reduce:transition-none"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0E263B] text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-[1.4fr_0.6fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#B8893B] rounded-xl flex items-center justify-center">
                <span className="text-[#0F2A44] font-heading text-lg">B</span>
              </div>
              <div className="leading-tight">
                <div className="text-white font-heading text-xl">Bright Future</div>
                <div className="text-[11px] text-[#B8893B] tracking-[0.22em] uppercase font-semibold">ACADEMY</div>
              </div>
            </div>
            <p className="text-[15px] text-white/70 leading-relaxed mt-6 mb-6 max-w-sm">
              A private nursery, primary and secondary school in Lekki, Lagos. Established 2006, approved by the Lagos State Ministry of Education.
            </p>
            <div className="flex items-center gap-3">
              <SocialIcon href="#" label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </SocialIcon>
              <SocialIcon href="#" label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </SocialIcon>
              <SocialIcon href="#" label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </SocialIcon>
              <SocialIcon href="#" label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
              </SocialIcon>
            </div>
          </div>

          {/* The School */}
          <div>
            <h3 className="font-heading uppercase text-xs tracking-[0.18em] text-[#A98242] mb-4">THE SCHOOL</h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/academics", label: "Academics" },
                { href: "/admissions", label: "Admissions" },
                { href: "/contact", label: "Contact" },
                { href: "/login", label: "Portal Login" },
              ].map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href} className="text-[15px] leading-5 text-white/75 hover:text-[#B8893B] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8893B]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F2A44] rounded-sm motion-reduce:transition-none">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit or Call */}
          <div>
            <h3 className="font-heading uppercase text-xs tracking-[0.18em] text-[#A98242] mb-4">VISIT OR CALL</h3>
            <ul className="space-y-4 text-[15px] leading-5 text-white/75">
              <li className="flex gap-3">
                <MapPin size={16} strokeWidth={1.5} className="text-[#B8893B] mt-0.5 shrink-0" />
                <span>
                  {school.addressLines[0]}<br />
                  {school.addressLines[1]}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={16} strokeWidth={1.5} className="text-[#B8893B] mt-0.5 shrink-0" />
                <span className="flex flex-col">
                  <a href={`tel:${school.phones[0].replace(/\s/g, "")}`} className="hover:text-[#B8893B] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8893B]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F2A44] rounded-sm motion-reduce:transition-none">{school.phones[0]}</a>
                  <a href={`tel:${school.phones[1].replace(/\s/g, "")}`} className="hover:text-[#B8893B] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8893B]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F2A44] rounded-sm motion-reduce:transition-none">{school.phones[1]}</a>
                </span>
              </li>
              <li className="flex gap-3">
                <Mail size={16} strokeWidth={1.5} className="text-[#B8893B] mt-0.5 shrink-0" />
                <a href={`mailto:${school.email}`} className="hover:text-[#B8893B] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8893B]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F2A44] rounded-sm xl:whitespace-nowrap motion-reduce:transition-none">{school.email}</a>
              </li>
              <li className="flex gap-3">
                <Clock size={16} strokeWidth={1.5} className="text-[#B8893B] mt-0.5 shrink-0" />
                <span>{school.hours}</span>
              </li>
            </ul>
          </div>

          {/* Termly Newsletter */}
          <div>
            <h3 className="font-heading uppercase text-xs tracking-[0.18em] text-[#A98242] mb-4">TERMLY NEWSLETTER</h3>
            <p className="text-[15px] text-white/70 leading-relaxed mb-4">One email at the start of each term: calendar dates, results and events. No spam.</p>
            <form className="relative">
              <label htmlFor="footer-email" className="sr-only">Parent email address</label>
              <input
                id="footer-email"
                type="email"
                placeholder="Parent email address"
                className="w-full h-12 pl-4 pr-14 rounded-full border border-white/15 bg-white/5 text-sm text-white placeholder:text-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8893B]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F2A44]"
              />
              <button
                type="button"
                aria-label="Subscribe to newsletter"
                className="absolute right-1 top-1 w-10 h-10 rounded-full bg-[#B8893B] text-[#0F2A44] flex items-center justify-center hover:bg-[#8D6433] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8893B]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F2A44] motion-reduce:transition-none"
              >
                <Send size={16} strokeWidth={1.5} />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 pb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <p className="text-xs text-white/55">© 2026 {school.name}. All rights reserved.</p>
          <p className="text-xs text-white/55">Lagos State Ministry of Education approval No. {school.approvalNumber}</p>
        </div>
      </div>
    </footer>
  );
}
