export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#131313]/70 backdrop-blur-xl border-b border-[#3fff8b]/10 shadow-[0_0_30px_rgba(63,255,139,0.05)] h-16 flex items-center">
      <div className="flex justify-between items-center px-8 w-full max-w-7xl mx-auto">
        <div className="text-lg font-bold tracking-tighter text-[#3fff8b] uppercase font-headline">
          Sharon P Shajan
        </div>
        <div className="hidden md:flex gap-8 font-sans tracking-tight text-sm font-medium">
          <a className="nav-link text-[#adaaaa] hover:text-[#3fff8b] transition-colors" href="#projects">Projects</a>
          <a className="nav-link text-[#adaaaa] hover:text-[#3fff8b] transition-colors" href="#experience">Experience</a>
          <a className="nav-link text-[#adaaaa] hover:text-[#3fff8b] transition-colors" href="#skills">Skills</a>
          <a className="nav-link text-[#adaaaa] hover:text-[#3fff8b] transition-colors" href="#contact">Contact</a>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex gap-3 text-[#3fff8b]">
            <span className="material-symbols-outlined cursor-pointer hover:bg-[#3fff8b]/10 p-1.5 rounded transition-all">terminal</span>
            <span className="material-symbols-outlined cursor-pointer hover:bg-[#3fff8b]/10 p-1.5 rounded transition-all">code</span>
          </div>
          <a
            href="CV.pdf"
            download
            className="bg-[#3fff8b] text-[#004820] px-4 py-1.5 font-label text-xs font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all inline-block"
          >
            Read Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
