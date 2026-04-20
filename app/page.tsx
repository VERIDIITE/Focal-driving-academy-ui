import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      
          <main className="flex-1">
        {/* Editorial Hero Section */}
        <section className="relative pt-32 pb-16 md:pt-60 md:pb-40 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
              <div className="flex-1 relative order-2 lg:order-1">
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-red mb-8 md:mb-12 block border-l-2 border-red pl-6">
                  Performance Pedagogy
                </h3>
                <h1 className="text-5xl md:text-[140px] font-black leading-[0.9] md:leading-[0.8] tracking-tighter text-black uppercase mb-8 md:mb-12">
                  Drive <br />
                  <span className="text-red ml-0 md:ml-12 italic-serif lowercase font-normal tracking-normal normal-case text-6xl md:text-[160px]">To Win</span>
                </h1>
                <div className="max-w-lg">
                  <p className="text-lg md:text-2xl text-black/40 leading-tight font-medium">
                    Leicester's most <span className="text-red italic-serif underline decoration-red/20 underline-offset-8">refined</span> driving academy. 
                    A professional approach to your independence since 1995.
                  </p>
                  <div className="mt-8 md:mt-12 flex items-center gap-6 md:gap-8">
                     <Button variant="primary" size="lg">Explore Courses</Button>
                     <div className="flex flex-col">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/30">Established</span>
                        <span className="text-xl font-serif italic text-red">1995</span>
                     </div>
                  </div>
                </div>
              </div>

              {/* High-relief overlapping visual */}
              <div className="flex-1 relative order-1 lg:order-2 w-full max-w-sm lg:max-w-none">
                <div className="relative aspect-[4/5] bg-red/5 rounded-[4rem] md:rounded-[10rem] overflow-hidden transform rotate-3 shadow-2xl transition-all duration-700 hover:rotate-0 group">
                   <div className="absolute inset-0 bg-red/10 group-hover:bg-red/20 transition-all duration-700"></div>
                   <div className="absolute inset-0 flex items-center justify-center text-red/10 font-black text-[120px] md:text-[200px] select-none tracking-tighter transition-all duration-700 group-hover:scale-110">
                      FOCL
                   </div>
                   {/* Abstract shadow text overlap */}
                   <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 text-[60px] md:text-[100px] font-black text-white opacity-10 group-hover:opacity-20 transition-all duration-700">RACE</div>
                </div>
                {/* Floating Circular CTA - Responsive visibility */}
                <div className="absolute -bottom-6 -left-6 z-20 hidden md:block group">
                   <Button variant="circular">
                      <span className="mb-1">Start</span>
                      <span className="font-serif italic lowercase">Here</span>
                   </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-10 -left-10 md:-bottom-20 md:-left-20 text-[150px] md:text-[500px] font-black text-red/[0.03] select-none pointer-events-none tracking-tighter">
            FOCAL
          </div>
        </section>

        {/* Section 01: The Bold Proposition (Black Block) */}
        <section className="bg-black py-20 md:py-40 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
              <div>
                <h2 className="text-5xl md:text-9xl font-serif font-medium leading-[0.9] text-white tracking-tighter">
                  Not your <br />
                  <span className="italic text-red">typical</span> <br />
                  school.
                </h2>
              </div>
              <div className="space-y-8 md:space-y-12">
                <p className="text-xl md:text-4xl text-white/50 leading-tight font-medium italic-serif">
                   “We believe driving is a mastery, not a chore. Our approach is designed for the modern learner who values precision, technology, and results.”
                </p>
                <div className="h-px bg-white/10 w-full"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 text-[10px] font-black uppercase tracking-[0.4em] text-white/40">
                   <div className="flex items-center gap-4 hover:text-red transition-colors duration-300">
                      <span className="w-2 h-2 rounded-full bg-red block shadow-[0_0_10px_rgba(220,38,38,0.5)]"></span>
                      Manual Instruction
                   </div>
                   <div className="flex items-center gap-4 hover:text-red transition-colors duration-300">
                      <span className="w-2 h-2 rounded-full bg-red block shadow-[0_0_10px_rgba(220,38,38,0.5)]"></span>
                      Performance Coaching
                   </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-10 -right-10 md:-bottom-20 md:-right-20 text-[200px] md:text-[400px] font-black text-white/[0.03] select-none tracking-tighter uppercase leading-none">GEAR</div>
        </section>

        {/* Section 02: Services (Magazine Layout) */}
        <section id="lessons" className="py-20 md:py-40 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-32 border-b border-black/5 pb-8 md:pb-10 gap-6 md:gap-8">
               <h2 className="text-6xl md:text-[180px] font-black text-black uppercase tracking-tighter leading-none opacity-5">
                  Tuition
               </h2>
               <div className="text-[10px] font-black text-red pb-2 border-b-2 border-red uppercase tracking-[0.4em] mb-4">
                  View Available Courses
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
              {[
                { title: "Manual Lessons", desc: "Expert 1-on-1 instruction in our modern manual fleet. From first gear to the final test." },
                { title: "Intensive Blocks", desc: "Fast-track your freedom. Comprehensive 1-2 week courses designed for rapid progress." },
                { title: "Instructor Academy", desc: "Join the elite. We train the next generation of DVSA-qualified driving instructors." }
              ].map((service, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="aspect-[4/5] bg-red/5 rounded-[2.5rem] md:rounded-[4rem] mb-8 md:mb-12 overflow-hidden relative transition-all duration-700 group-hover:bg-red group-hover:shadow-[0_40px_80px_rgba(220,38,38,0.15)]">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl md:text-8xl font-black text-black/5 pointer-events-none uppercase tracking-tighter select-none transition-all duration-700 group-hover:text-white group-hover:scale-110">{service.title.split(' ')[0]}</span>
                    </div>
                  </div>
                  <h4 className="text-3xl md:text-4xl font-serif italic text-black mb-4 md:mb-6 group-hover:text-red transition-all duration-500">{service.title}</h4>
                  <p className="text-base md:text-lg text-black/40 font-medium leading-tight mb-8 md:mb-10 group-hover:text-black/70 transition-colors duration-500">{service.desc}</p>
                  <div className="h-px bg-black/5 w-full mb-6"></div>
                  <div className="text-[9px] font-black uppercase tracking-[0.3em] text-black/30 group-hover:text-red transition-colors">Start Your Journey →</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 03: The Focal Spirit (Red Block) */}
        <section className="bg-red py-20 md:py-40 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
             <div className="text-center mb-20 md:mb-32">
                <h2 className="text-6xl md:text-[150px] font-sans font-black leading-[0.8] tracking-tighter uppercase text-white/20">The Spirit</h2>
                <h3 className="text-3xl md:text-7xl font-serif italic -mt-8 md:-mt-20 text-white relative z-10">Leicester's Finest Tuition</h3>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
                <div className="text-center group">
                   <div className="text-6xl md:text-8xl font-sans font-black mb-6 md:mb-8 italic-serif text-black/10 leading-none tracking-tighter transition-all duration-700 group-hover:text-white/20">01</div>
                   <h4 className="text-xl md:text-2xl font-serif font-black mb-4 md:mb-6 italic underline decoration-white/20 underline-offset-[12px]">Precision Routes</h4>
                   <p className="text-white/70 font-medium leading-relaxed text-base md:text-lg">
                      Every junction in Wigston and Cannock Street mapped to perfection.
                   </p>
                </div>
                <div className="text-center group">
                   <div className="text-6xl md:text-8xl font-sans font-black mb-6 md:mb-8 italic-serif text-black/10 leading-none tracking-tighter transition-all duration-700 group-hover:text-white/20">02</div>
                   <h4 className="text-xl md:text-2xl font-serif font-black mb-4 md:mb-6 italic underline decoration-white/20 underline-offset-[12px]">High Stakes</h4>
                   <p className="text-white/70 font-medium leading-relaxed text-base md:text-lg">
                      Tuition that values your technical ability as much as your clutch control.
                   </p>
                </div>
                <div className="text-center group">
                   <div className="text-6xl md:text-8xl font-sans font-black mb-6 md:mb-8 italic-serif text-black/10 leading-none tracking-tighter transition-all duration-700 group-hover:text-white/20">03</div>
                   <h4 className="text-xl md:text-2xl font-serif font-black mb-4 md:mb-6 italic underline decoration-white/20 underline-offset-[12px]">Elite Mentors</h4>
                   <p className="text-white/70 font-medium leading-relaxed text-base md:text-lg">
                      Training by ADI Grade A instructors who define the academy's heritage.
                   </p>
                </div>
             </div>
          </div>
          <div className="absolute -bottom-10 -left-10 md:-bottom-20 md:-left-20 text-[200px] md:text-[400px] font-black text-white/5 select-none tracking-tighter uppercase leading-none">RACE</div>
        </section>

        {/* Final Editorial Footer */}
        <footer className="bg-black pt-32 pb-16 text-white overflow-hidden relative">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="flex flex-col lg:flex-row justify-between items-start gap-24 mb-32">
                 <div className="flex-1">
                    <div className="relative w-64 h-20 mb-12 opacity-80 hover:opacity-100 transition-opacity">
                       <Image 
                          src="/logo.png" 
                          alt="Focal Driving Academy" 
                          fill 
                          className="object-contain object-left"
                       />
                    </div>
                    <div className="text-4xl md:text-8xl font-serif italic text-white leading-tight mb-12">
                       Master the road. <br /><span className="text-red">Earn your freedom.</span>
                    </div>
                    <div className="flex flex-col gap-6 text-[10px] font-black uppercase tracking-[0.4em] text-white/30">
                       <span className="hover:text-white transition-colors cursor-pointer">Leicester, UK</span>
                       <span className="hover:text-white transition-colors cursor-pointer">hello@focaldriving.com</span>
                       <span className="text-red text-lg font-serif italic lowercase tracking-normal">07890 000 000</span>
                    </div>
                 </div>
                 
                 <div className="w-full lg:w-max grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-32">
                    <div>
                       <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-red mb-10">Navigation</h5>
                       <ul className="space-y-6 text-[11px] font-black uppercase tracking-widest text-white/40 italic-serif">
                          <li><a href="#" className="hover:text-red transition-colors">Home Experience</a></li>
                          <li><a href="#" className="hover:text-red transition-colors">Client Portal</a></li>
                          <li><a href="#" className="hover:text-red transition-colors">Vlog Archive</a></li>
                          <li><a href="#" className="hover:text-red transition-colors">Tutorials</a></li>
                       </ul>
                    </div>
                    <div>
                       <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-red mb-10">Academy</h5>
                       <ul className="space-y-6 text-[11px] font-black uppercase tracking-widest text-white/40 italic-serif">
                          <li><a href="#" className="hover:text-red transition-colors">Instructor Path</a></li>
                          <li><a href="#" className="hover:text-red transition-colors">Intensive Courses</a></li>
                          <li><a href="#" className="hover:text-red transition-colors">Safety Response</a></li>
                          <li><a href="#" className="hover:text-red transition-colors">Terms</a></li>
                       </ul>
                    </div>
                    <div>
                       <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-red mb-10">Social</h5>
                       <ul className="space-y-6 text-[11px] font-black uppercase tracking-widest text-white/40 italic-serif">
                          <li><a href="#" className="hover:text-red transition-colors">YouTube</a></li>
                          <li><a href="#" className="hover:text-red transition-colors">Instagram</a></li>
                          <li><a href="#" className="hover:text-red transition-colors">Twitter</a></li>
                       </ul>
                    </div>
                 </div>
              </div>
              
              <div className="flex flex-col md:flex-row justify-between items-center gap-12 pt-16 border-t border-white/5 text-[10px] font-black uppercase tracking-[0.4em] text-white/20">
                 <div>© 2024 FOCAL DRIVING ACADEMY. ALL RIGHTS RESERVED.</div>
                 <div className="flex gap-8">
                    <span className="hover:text-white transition-colors cursor-pointer">Privacy</span>
                    <span className="hover:text-white transition-colors cursor-pointer">Cookie Policy</span>
                    <span className="text-white/40">ESTABLISHED 1995</span>
                 </div>
              </div>
           </div>
        </footer>
      </main>
    </div>
  );
}
