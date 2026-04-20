import React from "react";
import Link from "next/link";
import { Badge } from "./ui/Badge";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  breadcrumbs?: { label: string; href: string }[];
}

export const PageHeader = ({ title, subtitle, breadcrumbs }: PageHeaderProps) => {
  return (
    <header className="relative pt-32 pb-12 md:pt-64 md:pb-40 overflow-hidden bg-white">
      {/* Background Large Text - Editorial Watermark */}
      <div className="absolute -bottom-6 -right-6 text-[120px] md:text-[450px] font-black text-red/[0.03] select-none pointer-events-none tracking-tighter uppercase leading-none transition-all duration-1000">
        {title.split(' ')[0]}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {breadcrumbs && (
          <nav className="flex items-center gap-3 mb-8 md:mb-10 text-[9px] uppercase tracking-[0.4em] font-black text-black/30">
            <Link href="/" className="hover:text-red transition-all duration-300">Experience</Link>
            {breadcrumbs.map((crumb, i) => (
              <React.Fragment key={i}>
                <span className="text-red/40 select-none">/</span>
                <Link href={crumb.href} className="hover:text-red transition-all duration-300">{crumb.label}</Link>
              </React.Fragment>
            ))}
          </nav>
        )}
        
        <div className="max-w-5xl">
           <h1 className="text-5xl md:text-[150px] font-black text-black uppercase leading-[0.9] md:leading-[0.8] tracking-tighter mb-8 md:mb-10 drop-shadow-sm">
             {title.split(' ').map((word, i) => (
               <span key={i} className={i % 2 !== 0 ? "text-red italic-serif lowercase normal-case font-normal block md:inline md:ml-6" : "block"}>
                 {word}{' '}
               </span>
             ))}
           </h1>
           
           {subtitle && (
             <p className="text-base md:text-2xl text-black/40 max-w-2xl font-medium leading-tight">
               {subtitle}
             </p>
           )}
        </div>
      </div>
    </header>
  );
};
