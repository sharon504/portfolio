export default function Hero() {
  return (
    <section className="min-h-[921px] flex flex-col justify-center items-center px-8 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]"></div>
      </div>
      <div className="relative z-10 max-w-5xl w-full">
        <div className="font-label text-primary text-sm tracking-[0.3em] mb-6 uppercase flex items-center gap-3">
          <span className="w-12 h-px bg-primary/30"></span>
          Full-Stack Engineer // 2024
        </div>
        <h1 className="font-headline text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
          Sharon P Shajan — <br />
          <span className="text-primary text-glow italic">Web &amp; ML Developer.</span>
        </h1>
        <p className="font-body text-xl md:text-2xl text-on-surface-variant max-w-3xl leading-relaxed mb-12">
          Designing and implementing <span className="text-on-surface font-semibold underline decoration-primary/40 underline-offset-4">robust, scalable systems</span> with TypeScript, Python, and Golang. Specializing in full-stack architecture, high-performance APIs, and intelligent solutions.
        </p>
        <div className="flex flex-wrap gap-4">
          <a className="bg-primary text-on-primary px-8 py-4 font-label font-bold uppercase tracking-widest text-sm hover:brightness-110 transition-all flex items-center gap-2" href="#projects">
            View Projects
            <span className="material-symbols-outlined text-sm">arrow_outward</span>
          </a>
          <a className="border border-outline-variant/30 text-on-surface px-8 py-4 font-label font-bold uppercase tracking-widest text-sm hover:bg-surface-container transition-all flex items-center gap-2" href="https://github.com/sharon504">
            GitHub // src
            <span className="material-symbols-outlined text-sm">terminal</span>
          </a>
        </div>
      </div>
    </section>
  );
}
