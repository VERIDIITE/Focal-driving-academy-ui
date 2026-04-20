import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/Button";

export const Navbar = () => {
  return (
    <div className="fixed top-4 md:top-8 left-0 w-full z-50 px-3 md:px-4 pointer-events-none">
      <nav className="max-w-[98vw] md:max-w-max mx-auto bg-black/90 backdrop-blur-2xl border border-white/10 rounded-full px-5 md:px-10 py-3 md:py-4 shadow-[0_20px_50px_rgba(0,0,0,0.3)] pointer-events-auto flex items-center justify-between lg:justify-start gap-4 md:gap-14 transition-all duration-500">
        <div className="flex items-center shrink-0">
          <Link href="/" className="flex flex-col group">
            <div className="relative w-24 md:w-40 h-6 md:h-10 transition-transform duration-500 group-hover:scale-105">
               <Image 
                  src="/logo.png" 
                  alt="Focal Driving Academy" 
                  fill 
                  className="object-contain"
                  priority
               />
            </div>
          </Link>
        </div>
        
        {/* Navigation Links - Scrollable on Mobile with mask */}
        <div className="flex items-center gap-5 md:gap-10 overflow-x-auto no-scrollbar scroll-smooth pr-4 lg:pr-0 -mx-1 px-1">
          {[
            { label: "Home", href: "/" },
            { label: "Client Area", href: "/client-area" },
            { label: "COVID-19 Response", href: "/covid-response" },
            { label: "Vlog", href: "/vlog" },
            { label: "Testimonials", href: "/testimonials" },
            { label: "More", href: "/instructor-training" }
          ].map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.25em] text-white/50 hover:text-red transition-all duration-300 whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden sm:flex items-center lg:ml-auto">
          <Button variant="secondary" size="sm" className="px-6 py-2.5 !text-[9px] hover:scale-105">Book Academy</Button>
        </div>
      </nav>
    </div>
  );
};
