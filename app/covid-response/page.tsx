import React from "react";
import { Navbar } from "@/components/Navbar";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/Button";

export default function CovidResponse() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <PageHeader 
        title="Safety Protocol"
        subtitle="Our commitment to health and precision. Maintaining the highest standards of hygiene for our Leicester learners."
        breadcrumbs={[{ label: "Safety", href: "/covid-response" }]}
      />
      
      <main className="flex-1 pb-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-start">
             
             {/* Left: Philosophy */}
             <div className="space-y-12">
                <div className="p-16 bg-red rounded-[5rem] text-white shadow-2xl relative overflow-hidden group transition-all duration-700 hover:shadow-[0_40px_80px_rgba(220,38,38,0.2)]">
                   <h2 className="text-5xl md:text-7xl font-serif italic mb-8 leading-tight">Operating as <span className="text-black">Normal</span>.</h2>
                   <p className="text-white/60 font-medium leading-relaxed mb-12 text-lg">
                      We are currently conducting all lessons in accordance with the latest government mandates. Your safety is our primary focus.
                   </p>
                   <Button variant="secondary" className="w-full">Book First Lesson</Button>
                   <div className="absolute -bottom-10 -right-10 text-[250px] font-black text-white/5 select-none tracking-tighter leading-none group-hover:text-white/10 transition-all duration-1000">SAFE</div>
                </div>
                
                <div className="p-12 border border-black/10 rounded-[4rem] bg-white transition-all duration-700 hover:shadow-xl">
                   <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-red mb-12 pb-6 border-b border-black/10">Health Checklist</h3>
                   <ul className="space-y-8">
                      {[
                         "Pre-lesson health assessments",
                         "Symptom-free requirement",
                         "Flexible cancellation for illness",
                         "Track & Trace cooperation"
                      ].map((item, i) => (
                         <li key={i} className="flex items-center gap-6 group hover:translate-x-3 transition-transform duration-500">
                            <span className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-red text-xs italic font-serif group-hover:bg-red group-hover:text-white group-hover:border-red transition-all duration-500">{i + 1}</span>
                            <span className="text-xl font-serif italic text-black group-hover:not-italic group-hover:font-black group-hover:uppercase group-hover:text-xs transition-all duration-500">{item}</span>
                         </li>
                      ))}
                   </ul>
                </div>
             </div>

             {/* Right: Detailed Procedures */}
             <div className="space-y-24 md:pt-24">
                <section className="group">
                   <h3 className="text-8xl font-black text-black uppercase tracking-tighter leading-none mb-12 opacity-5 group-hover:opacity-10 transition-opacity duration-700">01</h3>
                   <h4 className="text-4xl font-serif italic text-red mb-6">Standard Hygiene</h4>
                   <p className="text-black/40 font-medium leading-relaxed mb-10 text-xl">
                      High-touch surfaces—including the steering wheel, gear stick, and door handles—are disinfected with clinical-grade sanitisers between every student.
                   </p>
                   <div className="h-px bg-black/10 w-full mb-8"></div>
                   <div className="text-[9px] font-black uppercase tracking-[0.3em] text-black/30 hover:text-red transition-all duration-300 cursor-pointer">View Sanitisation Log →</div>
                </section>

                <section className="group">
                   <h3 className="text-8xl font-black text-black uppercase tracking-tighter leading-none mb-12 opacity-5 group-hover:opacity-10 transition-opacity duration-700">02</h3>
                   <h4 className="text-4xl font-serif italic text-red mb-6">Air Filtration</h4>
                   <p className="text-black/40 font-medium leading-relaxed mb-10 text-xl">
                      Windows remain slightly open whenever appropriate to ensure a continuous flow of fresh air, reducing aerosol concentration significantly.
                   </p>
                   <div className="h-px bg-black/10 w-full mb-8"></div>
                </section>

                <section className="bg-black p-16 rounded-[5rem] relative overflow-hidden group transition-all duration-700 hover:shadow-2xl">
                   <h4 className="text-5xl font-serif italic text-white mb-6 leading-tight">Shared <span className="text-red">Responsibility</span></h4>
                   <p className="text-white/60 font-medium leading-relaxed mb-10 text-lg">
                      Safety is a partnership. We thank all our Leicester learners for their adherence to these evolving standards.
                   </p>
                   <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none transform rotate-12 group-hover:rotate-0 transition-transform duration-1000">
                      <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="red" strokeWidth="1"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                   </div>
                </section>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
}
