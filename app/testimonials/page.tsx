import React from "react";
import { Navbar } from "@/components/Navbar";
import { PageHeader } from "@/components/PageHeader";

export default function TestimonialsPage() {
  const reviews = [
    { name: "Sarah Jenkins", loc: "Stoneygate", quote: "Passed First Time", text: "I was incredibly nervous after having a gap. My Focal instructor was patient, calm, and knew exactly how to build my confidence back up." },
    { name: "Marcus Thompson", loc: "Wigston", quote: "Wigston Expert", text: "The instructor's knowledge of the Wigston test routes is second to none. He pointed out junctions I would have otherwise struggled with." },
    { name: "Elena Rodriguez", loc: "LFE", quote: "Calm Mentoring", text: "Highly recommended for anyone who is anxious. The 'Focal Way' really is as calm as they say. I never felt pressured once." },
    { name: "Priya Patel", loc: "Birstall", quote: "Elite Quality", text: "Professional, punctual, and highly skilled. Focal Academy is undoubtedly the best in Leicester. Feedback was always constructive." }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-black">
      <Navbar />
      <PageHeader 
        title="Success Stories"
        subtitle="The recorded history of independence in Leicester. A testament to precision and the performance mindset."
        breadcrumbs={[{ label: "Stories", href: "/testimonials" }]}
      />
      
      <main className="flex-1 pb-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           
           {/* Section Label */}
           <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 border-b border-black/10 pb-12 gap-8">
              <h3 className="text-8xl md:text-[180px] font-black uppercase tracking-tighter opacity-5 leading-none">Voices</h3>
              <div className="text-[10px] font-black uppercase tracking-[0.4em] text-red pb-2 border-b-2 border-red">4.9/5 Certified Rating</div>
           </div>

           {/* Testimonials Grid */}
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20">
              {reviews.map((r, i) => (
                 <div key={i} className={`p-16 rounded-[4.5rem] overflow-hidden relative group transition-all duration-700 hover:shadow-2xl ${i % 2 === 0 ? 'bg-white border border-black/5' : 'bg-black text-white'}`}>
                    <div className="relative z-10 transition-transform duration-700 group-hover:-translate-y-2">
                       <h4 className={`text-4xl font-serif italic mb-10 underline decoration-red/20 underline-offset-[12px] leading-tight ${i % 2 !== 0 ? 'text-red' : ''}`}>“{r.quote}”</h4>
                       <p className={`text-2xl font-medium leading-tight mb-14 transition-colors duration-500 ${i % 2 === 0 ? 'text-black/40 group-hover:text-black' : 'text-white/40 group-hover:text-white'}`}>
                          {r.text}
                       </p>
                       <div className={`flex justify-between items-center pt-10 border-t ${i % 2 === 0 ? 'border-black/10' : 'border-white/10'}`}>
                          <div>
                             <div className="text-xs font-black uppercase tracking-[0.2em]">{r.name}</div>
                             <div className={`text-[10px] uppercase tracking-[0.3em] italic-serif mt-1 ${i % 2 === 0 ? 'opacity-30' : 'opacity-40'}`}>{r.loc}</div>
                          </div>
                          <div className={`text-[10px] font-black uppercase tracking-widest opacity-60 ${i % 2 === 0 ? 'text-red' : 'text-white'}`}>Success 2024</div>
                       </div>
                    </div>
                    {/* Shadow Quote Mark */}
                    <div className={`absolute top-10 right-10 text-[200px] font-black select-none pointer-events-none group-hover:opacity-[0.04] group-hover:rotate-12 transition-all duration-1000 ${i % 2 === 0 ? 'text-black opacity-[0.02]' : 'text-white opacity-[0.03]'}`}>”</div>
                 </div>
              ))}
           </div>

           {/* Large Stats Block */}
           <div className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 bg-red p-20 rounded-[6.5rem] text-white italic-serif shadow-[0_50px_100px_rgba(220,38,38,0.25)] overflow-hidden relative group">
              <div className="text-center relative z-10 group/stat">
                 <div className="text-8xl md:text-9xl font-black mb-6 tracking-tighter group-hover/stat:text-black transition-all duration-700 leading-none">98%</div>
                 <div className="text-[10px] uppercase tracking-[0.4em] font-black text-white/30 group-hover/stat:text-white transition-colors">First Time Pass</div>
              </div>
              <div className="text-center relative z-10 group/stat">
                 <div className="text-8xl md:text-9xl font-black mb-6 tracking-tighter group-hover/stat:text-black transition-all duration-700 leading-none">5k+</div>
                 <div className="text-[10px] uppercase tracking-[0.4em] font-black text-white/30 group-hover/stat:text-white transition-colors">Leicester Students</div>
              </div>
              <div className="text-center relative z-10 group/stat">
                 <div className="text-8xl md:text-9xl font-black mb-6 tracking-tighter group-hover/stat:text-black transition-all duration-700 leading-none">30Y</div>
                 <div className="text-[10px] uppercase tracking-[0.4em] font-black text-white/30 group-hover/stat:text-white transition-colors">Heritage</div>
              </div>
              <div className="absolute inset-0 opacity-5 pointer-events-none transition-all duration-1000 group-hover:opacity-10 group-hover:scale-110">
                 <svg width="100%" height="100%"><pattern id="stripes" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="40" stroke="white" strokeWidth="1" /></pattern><rect width="100%" height="100%" fill="url(#stripes)" /></svg>
              </div>
              <div className="absolute -bottom-20 -right-20 text-[400px] font-black text-white/5 select-none tracking-tighter leading-none group-hover:text-white/10 transition-all duration-1000">DATA</div>
           </div>
        </div>
      </main>
    </div>
  );
}
