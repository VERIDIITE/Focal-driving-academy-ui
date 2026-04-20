import React from "react";
import { Navbar } from "@/components/Navbar";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/Button";

export default function ClientArea() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <PageHeader 
        title="Student Portal"
        subtitle="Exclusive resources and shortcuts to fuel your independence. Managed with precision, delivered with care."
        breadcrumbs={[{ label: "Portal", href: "/client-area" }]}
      />
      
      <main className="flex-1 pb-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-start">
            
            {/* Left: Quick Actions (DVSA) */}
            <div className="lg:col-span-4 space-y-12">
               <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-red block border-b border-black/10 pb-6">
                  Official Channels
               </h3>
               
               <div className="space-y-6">
                  {[
                     { label: "Provisional Licence", href: "https://www.gov.uk/apply-first-provisional-driving-licence" },
                     { label: "Theory Test Booking", href: "https://www.gov.uk/book-theory-test" },
                     { label: "Practical Test Booking", href: "https://www.gov.uk/book-driving-test" }
                  ].map((link, i) => (
                     <a key={i} href={link.href} target="_blank" className="flex items-center justify-between p-8 bg-white border border-black/5 rounded-[2.5rem] hover:bg-black hover:text-white transition-all duration-500 group overflow-hidden relative shadow-sm hover:shadow-xl">
                        <span className="text-xl font-serif italic text-black group-hover:not-italic group-hover:font-black group-hover:uppercase group-hover:text-xs transition-all duration-500">{link.label}</span>
                        <span className="text-red group-hover:text-white group-hover:translate-x-2 transition-all duration-500">→</span>
                        <div className="absolute -bottom-2 -right-2 text-5xl font-black text-black/5 group-hover:text-white/10 uppercase tracking-tighter select-none transition-all duration-700">DVSA</div>
                     </a>
                  ))}
               </div>
            </div>

            {/* Right: Premium Resources */}
            <div className="lg:col-span-8 flex flex-col gap-12">
               <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-red block border-b border-black/10 pb-6">
                  Learning Vault
               </h3>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="p-12 bg-red rounded-[4rem] text-white overflow-hidden relative group transition-all duration-700 hover:shadow-2xl">
                     <h4 className="text-4xl font-serif italic mb-6">Theory Test Pro</h4>
                     <p className="text-white/70 font-medium leading-tight mb-10 text-lg">
                        Unlimited hazard perception and theory training. Exclusive access for Focal students.
                     </p>
                     <Button variant="secondary" className="w-full">Launch Portal</Button>
                     <div className="absolute top-0 right-0 p-8 opacity-10 font-black text-9xl select-none leading-none group-hover:scale-110 transition-transform duration-1000">PR0</div>
                  </div>

                  <div className="p-12 bg-black rounded-[4rem] text-white overflow-hidden relative group transition-all duration-700 hover:shadow-2xl">
                     <h4 className="text-4xl font-serif italic mb-6 text-red">Safety Hub</h4>
                     <p className="text-white/60 font-medium leading-tight mb-10 text-lg">
                        Master the 'Show Me, Tell Me' vehicle checks with our visual guides.
                     </p>
                     <div className="space-y-4">
                        <div className="text-[10px] font-black uppercase tracking-widest border-b border-white/10 pb-2 hover:text-red transition-all duration-300 cursor-pointer">Download Checklist PDF</div>
                        <div className="text-[10px] font-black uppercase tracking-widest border-b border-white/10 pb-2 hover:text-red transition-all duration-300 cursor-pointer">Video Walkthroughs</div>
                     </div>
                  </div>

                  <div className="md:col-span-2 p-16 bg-white rounded-[5rem] border border-black/10 flex flex-col md:flex-row items-center gap-16 shadow-2xl hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)] transition-all duration-700 overflow-hidden relative group">
                     <div className="flex-1 relative z-10">
                        <h4 className="text-5xl font-serif italic text-red mb-6">Focal Vlogs</h4>
                        <p className="text-black/40 font-medium leading-tight mb-10 text-xl">
                           Deep-dives into Leicester's test routes, junctions, and common errors at Cannock Street and Wigston.
                        </p>
                        <Button variant="primary">Watch Archive</Button>
                     </div>
                     <div className="w-full md:w-64 aspect-video bg-black/5 rounded-[2.5rem] flex items-center justify-center relative overflow-hidden group cursor-pointer transition-all duration-700">
                        <div className="w-16 h-16 rounded-full bg-red flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform duration-500">
                           <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                        </div>
                        <div className="absolute inset-0 bg-red opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>
                     </div>
                     <div className="absolute -bottom-10 -right-10 text-[250px] font-black text-black/5 select-none tracking-tighter leading-none group-hover:text-black/10 transition-all duration-1000">VLOG</div>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Floating Circle Button for Support */}
        <div className="fixed bottom-10 right-10 z-40">
           <Button variant="circular">
              <span className="mb-1">Help</span>
              <span className="font-serif italic lowercase">Me</span>
           </Button>
        </div>
      </main>
    </div>
  );
}

// Utility component for links (if needed, but using anchors in this specific dashboard)
