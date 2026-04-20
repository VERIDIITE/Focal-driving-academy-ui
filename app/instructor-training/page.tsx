import React from "react";
import { Navbar } from "@/components/Navbar";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/Button";

export default function InstructorTrainingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-black">
      <Navbar />
      <PageHeader 
        title="Forge a Career"
        subtitle="Transform your driving expertise into a professional legacy. Joining the ranks of Leicester's elite instructors."
        breadcrumbs={[{ label: "Training", href: "/instructor-training" }]}
      />
      
      <main className="flex-1 pb-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-32 items-start mb-24 md:mb-40">
              {/* Left: Philosophy */}
              <div className="space-y-8 md:space-y-12">
                 <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-red block border-b border-black/10 pb-4 md:pb-6">
                    The Focal Standard
                 </h3>
                 <p className="text-4xl md:text-8xl font-serif italic text-black leading-tight">
                    Beyond the <span className="text-red">Manual</span>. Precision in Pedagogy.
                 </p>
                 <p className="text-xl md:text-2xl text-black/40 font-medium leading-relaxed">
                    We don't just train instructors; we mentor professionals. Our pass rates for ADI Parts 1, 2, and 3 are significantly above the national average.
                 </p>
                 <div className="pt-4 md:pt-8">
                    <Button variant="primary" size="lg">Request Prospectus</Button>
                 </div>
              </div>

              {/* Right: Path Card */}
              <div className="p-10 md:p-20 bg-black rounded-[3rem] md:rounded-[6rem] text-white shadow-2xl relative overflow-hidden group transition-all duration-700 hover:shadow-[0_40px_80px_rgba(220,38,38,0.1)]">
                 <h4 className="text-4xl md:text-5xl font-serif italic mb-6 md:mb-8 text-red">Part 3 Mastery</h4>
                 <p className="text-white/60 font-medium leading-tight mb-10 md:mb-12 text-base md:text-lg">
                    Specialised training for the instructional ability test. Focus on client-centred learning and lesson planning.
                 </p>
                 <div className="space-y-4 md:space-y-6">
                    <div className="flex justify-between items-center p-6 md:p-8 bg-white/5 rounded-[2rem] md:rounded-[2.5rem] group-hover:bg-white/10 transition-all duration-500">
                       <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-white/40">Training Hours</span>
                       <span className="font-serif italic text-lg md:text-xl">40+ Direct</span>
                    </div>
                    <div className="flex justify-between items-center p-6 md:p-8 bg-white/5 rounded-[2rem] md:rounded-[2.5rem] group-hover:bg-white/10 transition-all duration-500">
                       <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-white/40">Success Rate</span>
                       <span className="font-serif italic font-black text-lg md:text-xl text-red">92%</span>
                    </div>
                 </div>
                 <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 text-[150px] md:text-[250px] font-black text-white/[0.03] select-none tracking-tighter leading-none group-hover:text-white/5 group-hover:-translate-x-4 transition-all duration-1000">ADI</div>
              </div>
           </div>

           {/* The 3 Stage Path */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
              {[
                 { step: "01", title: "Theory & Hazard", desc: "Digital study packs and 1-on-1 support for the qualifying theory exam." },
                 { step: "02", title: "Driving Ability", desc: "Advanced driving techniques to meet the highest professional standards." },
                 { step: "03", title: "Instructional Skills", desc: "The art of teaching. Client-centred learning methods for success." }
              ].map((path, i) => (
                 <div key={i} className="p-8 md:p-12 border border-black/10 rounded-[2.5rem] md:rounded-[4rem] group hover:bg-white hover:shadow-2xl transition-all duration-700">
                    <div className="text-6xl md:text-8xl font-black text-red/5 mb-6 md:mb-10 group-hover:text-red/10 transition-colors uppercase tracking-widest transition-all duration-700">{path.step}</div>
                    <h5 className="text-3xl md:text-4xl font-serif italic mb-4 md:mb-6 leading-none group-hover:text-red transition-all duration-500">{path.title}</h5>
                    <p className="text-black/40 font-medium leading-tight text-base md:text-lg group-hover:text-black/70 transition-colors duration-500">{path.desc}</p>
                 </div>
              ))}
           </div>

           {/* Large CTA */}
           <div className="mt-24 md:mt-40 p-10 md:p-20 bg-red rounded-[3rem] md:rounded-[6rem] text-white flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16 relative overflow-hidden group shadow-[0_50px_100px_rgba(220,38,38,0.25)]">
              <div className="max-w-xl relative z-10 text-center md:text-left">
                 <h2 className="text-5xl md:text-9xl font-serif italic mb-6 md:mb-8 leading-tight">Begin Your <span className="text-black">Evolution</span>.</h2>
                 <p className="text-white/60 font-medium text-lg md:text-xl leading-tight">
                    Flexible training schedules to fit around your current career.
                 </p>
              </div>
              <div className="relative z-10">
                 <Button variant="secondary" size="lg" className="px-12">Call Training Lead</Button>
              </div>
              <div className="absolute -bottom-10 -left-10 md:-bottom-20 md:-left-20 text-[200px] md:text-[400px] font-black text-white/5 select-none tracking-tighter leading-none pointer-events-none uppercase transition-all duration-1000 group-hover:text-white/10 group-hover:scale-110">WORK</div>
           </div>
        </div>
      </main>
    </div>
  );
}
