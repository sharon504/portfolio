export default function SideNav() {
  return (
    <aside className="hidden lg:flex flex-col h-screen w-16 fixed left-0 top-0 border-r border-[#1a1919] bg-[#0e0e0e] z-40 pt-24 items-center gap-12">
      <div className="rotate-90 origin-center whitespace-nowrap mt-4">
        <span className="font-label text-[10px] text-[#adaaaa] tracking-[0.5em] uppercase">Navigation</span>
      </div>
      <div className="flex flex-col gap-6">
        <a href="#projects" className="material-symbols-outlined text-[#adaaaa] hover:text-primary transition-colors cursor-pointer group relative" style={{ fontVariationSettings: '"FILL" 1' }} title="Projects">
          folder_open
          <span className="absolute left-16 bg-surface-container px-2 py-1 rounded text-[10px] text-primary opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Projects</span>
        </a>
        <a href="#experience" className="material-symbols-outlined text-[#adaaaa] hover:text-primary transition-colors cursor-pointer group relative" title="Experience">
          work_history
          <span className="absolute left-16 bg-surface-container px-2 py-1 rounded text-[10px] text-primary opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Experience</span>
        </a>
        <a href="#skills" className="material-symbols-outlined text-[#adaaaa] hover:text-primary transition-colors cursor-pointer group relative" title="Skills">
          terminal
          <span className="absolute left-16 bg-surface-container px-2 py-1 rounded text-[10px] text-primary opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Skills</span>
        </a>
        <a href="#contact" className="material-symbols-outlined text-[#adaaaa] hover:text-primary transition-colors cursor-pointer group relative" title="Contact">
          alternate_email
          <span className="absolute left-16 bg-surface-container px-2 py-1 rounded text-[10px] text-primary opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Contact</span>
        </a>
      </div>
    </aside>
  );
}
