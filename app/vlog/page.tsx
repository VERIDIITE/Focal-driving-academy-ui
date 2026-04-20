import React from "react";
import { Navbar } from "@/components/Navbar";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/Button";

export default function VlogPage() {
  const vlogs = [
    { id: 1, title: "Wigston Roundabout", cat: "Test Routes", dur: "12:45" },
    { id: 2, title: "Vehicle Safety", cat: "Show Me Tell Me", dur: "08:20" },
    { id: 3, title: "Parallel Park", cat: "Manoeuvres", dur: "05:15" },
    { id: 4, title: "Test Day Mindset", cat: "Prep", dur: "10:00" },
    { id: 5, title: "Cannock Street", cat: "Test Routes", dur: "15:30" },
    { id: 6, title: "Sat Nav Use", cat: "Practice", dur: "07:45" }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-black">
      <Navbar />
      <PageHeader 
        title="Visual Learning"
        subtitle="Leicester's most comprehensive video archive for the modern learner. Precision demonstrated, performance perfected."
        breadcrumbs={[{ label: "Archive", href: "/vlog" }]}
      />
      
      <main className="flex-1 pb-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           
           {/* Section Label */}
           <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 border-b border-black/10 pb-12 gap-8">
              <h3 className="text-8xl md:text-[180px] font-black uppercase tracking-tighter opacity-5 leading-none">Vlog</h3>
              <div className="flex gap-8">
                 <button className="text-[10px] font-black uppercase tracking-[0.4em] text-red border-b-2 border-red pb-2">All Courses</button>
                 <button className="text-[10px] font-black uppercase tracking-[0.4em] text-black/30 hover:text-red transition-all duration-300 pb-2 border-b-2 border-transparent hover:border-red">Test Routes</button>
              </div>
           </div>

           {/* Video Grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-20">
              {vlogs.map((v) => (
                 <div key={v.id} className="group cursor-pointer">
                    <div className="relative aspect-video bg-red/5 rounded-[3rem] overflow-hidden mb-10 shadow-sm group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-700">
                       <div className="absolute inset-0 bg-red/10 group-hover:bg-red group-hover:bg-opacity-100 transition-all duration-700"></div>
                       <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-xl text-red flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-black group-hover:text-white transition-all duration-500">
                             <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                          </div>
                       </div>
                       <div className="absolute bottom-6 right-6 px-4 py-1.5 bg-black/90 text-white text-[9px] font-black rounded-full backdrop-blur-md uppercase tracking-widest transition-all group-hover:bg-white group-hover:text-red">
                          {v.dur}
                       </div>
                    </div>
                    <div>
                       <div className="text-[10px] font-black uppercase tracking-[0.4em] text-red mb-4 italic-serif">{v.cat}</div>
                       <h4 className="text-3xl font-serif italic mb-6 leading-none group-hover:text-red transition-all duration-500">{v.title}</h4>
                       <div className="h-px bg-black/10 w-full mb-6"></div>
                       <div className="text-[10px] font-black uppercase tracking-[0.3em] text-black/30 group-hover:text-black transition-colors">Start Lesson →</div>
                    </div>
                 </div>
              ))}
           </div>

           {/* Large YouTube CTA */}
           <div className="mt-40 p-20 bg-red rounded-[6rem] text-white flex flex-col md:flex-row items-center justify-between gap-16 relative overflow-hidden group shadow-[0_50px_100px_rgba(220,38,38,0.25)]">
              <div className="max-w-xl relative z-10">
                 <h2 className="text-6xl md:text-9xl font-serif italic mb-8 leading-tight">Join the <span className="text-black">Subscribers</span>.</h2>
                 <p className="text-white/60 font-medium text-xl leading-tight mb-12">
                    We host over 200 hours of precision instructional content on our official channel.
                 </p>
                 <Button variant="secondary" size="lg">Follow on YouTube</Button>
              </div>
              <div className="w-64 h-64 rounded-full border-4 border-white/10 flex items-center justify-center text-white relative">
                 <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor" className="group-hover:scale-125 transition-transform duration-1000"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505a3.017 3.017 0 0 0-2.122 2.136C0 8.055 0 12 0 12s0 3.945.501 5.814a3.017 3.017 0 0 0 2.122 2.136C4.495 20.455 12 20.455 12 20.455s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.945 24 12 24 12s0-3.945-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                 <div className="absolute inset-0 rounded-full border border-white/20 animate-ping"></div>
              </div>
              <div className="absolute -bottom-20 -left-20 text-[400px] font-black text-white/5 select-none tracking-tighter leading-none pointer-events-none transition-all duration-1000 group-hover:text-white/10 group-hover:scale-110">VLOG</div>
           </div>
        </div>
      </main>
    </div>
  );
}
