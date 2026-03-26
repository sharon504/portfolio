export default function Footer() {
  return (
    <footer className="bg-[#0e0e0e] border-t border-[#1a1919] py-12">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="font-mono text-[10px] text-[#adaaaa] tracking-tight uppercase">
          © {new Date().getFullYear()} SHARON P SHAJAN // FULL-STACK ENGINEER
        </div>
        <div className="flex gap-8 font-mono text-[10px] text-[#adaaaa] uppercase tracking-widest">
          <a className="hover:text-[#3fff8b] underline underline-offset-4 transition-all" href="https://github.com/sharon504">GitHub</a>
          <a className="hover:text-[#3fff8b] underline underline-offset-4 transition-all" href="https://linkedin.com/in/sharonpshajan">LinkedIn</a>
          <a className="hover:text-[#3fff8b] underline underline-offset-4 transition-all" href="mailto:sharonpshajan@gmail.com">Email</a>
        </div>
        <div className="text-[#3fff8b] font-bold tracking-tighter text-sm uppercase">EST. 2024</div>
      </div>
    </footer>
  );
}
