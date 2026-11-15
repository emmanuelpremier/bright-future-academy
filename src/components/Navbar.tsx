"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Button from "./ui/Button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/academics", label: "Academics" },
    { href: "/admissions", label: "Admissions" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-cream border-b border-border"
          : "bg-cream"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 items-center h-20">
          {/* Logo */}
          <div className="justify-self-start">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-navy rounded-lg flex items-center justify-center">
                <span className="text-white font-heading text-base sm:text-lg">B</span>
              </div>
              <div className="leading-tight">
                <div className="text-base sm:text-lg font-heading text-navy whitespace-nowrap">Bright Future</div>
                <div className="text-[9px] sm:text-[10px] text-gold tracking-[0.3em] font-semibold uppercase whitespace-nowrap">ACADEMY</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - centered */}
          <div className="hidden lg:flex items-center gap-8 justify-self-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative group text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9A6B2F]/50 focus-visible:ring-offset-2 rounded-sm min-h-[40px] inline-flex items-center ${
                    isActive ? "text-navy" : "text-[#475569] hover:text-navy"
                  }`}
                >
                  <span className="relative pb-[6px]">
                    {link.label}
                    <span
                      className={`absolute left-0 bottom-0 h-[2px] bg-[#9A6B2F] rounded-full transition-[width] duration-300 ease-out motion-reduce:transition-none ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-4 justify-self-end">
            <Link href="/login" className="text-sm font-semibold text-slate-link hover:text-[#9A6B2F] focus-visible:text-[#9A6B2F] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9A6B2F]/50 focus-visible:ring-offset-2 rounded-sm min-h-[40px] inline-flex items-center px-1">
              Login
            </Link>
            <Link href="/admissions" className="h-10 px-5 rounded-full bg-[#0F2A44] text-white flex items-center justify-center text-sm font-semibold transition-all duration-300 hover:bg-[#1B3A5C] hover:shadow-lg hover:shadow-[#0F2A44]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9A6B2F]/50 focus-visible:ring-offset-2 motion-reduce:transition-none">
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden col-start-3 justify-self-end text-navy"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-20 bg-cream">
          <div className="flex flex-col px-4 sm:px-6 py-6 gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg text-navy ${
                  pathname === link.href ? "font-medium" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg text-navy hover:text-[#9A6B2F] focus-visible:text-[#9A6B2F] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9A6B2F]/50 focus-visible:ring-offset-2 rounded-sm w-fit"
            >
              Login
            </Link>
            <Button href="/admissions" variant="primary" className="w-full h-12 justify-center gap-2 whitespace-nowrap px-6 py-0 text-[15px]">
              Apply Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
