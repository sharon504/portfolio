import os

# Define the file structure and their respective contents for a TypeScript React project
files = {
    "index.html": """<!doctype html>
<html class="dark" lang="en">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>Sharon P Shajan | Web & ML Developer</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
""",

    "tailwind.config.js": """/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0e0e0e",
        "primary-fixed-dim": "#24f07e",
        "tertiary-fixed-dim": "#00cdec",
        "on-primary-container": "#004f24",
        error: "#ff716c",
        "secondary-dim": "#65ecae",
        "inverse-primary": "#006e35",
        "surface-dim": "#0e0e0e",
        "surface-container": "#1a1919",
        "tertiary-fixed": "#00dcfd",
        "on-secondary-fixed-variant": "#006945",
        "on-error-container": "#ffa8a3",
        "on-tertiary-container": "#004955",
        "tertiary-dim": "#00cdec",
        "on-tertiary-fixed-variant": "#005361",
        "surface-tint": "#3fff8b",
        "inverse-on-surface": "#565554",
        "surface-container-highest": "#262626",
        "secondary-container": "#006c47",
        "tertiary-container": "#00dcfd",
        "on-surface": "#ffffff",
        "on-tertiary": "#005360",
        "on-secondary-container": "#e1ffeb",
        "primary-fixed": "#3fff8b",
        "outline-variant": "#494847",
        "error-container": "#9f0519",
        "on-primary-fixed": "#004820",
        "on-error": "#490006",
        primary: "#3fff8b",
        tertiary: "#7ae6ff",
        "surface-container-low": "#131313",
        secondary: "#74fbbb",
        "on-background": "#ffffff",
        surface: "#0e0e0e",
        "surface-container-high": "#201f1f",
        "error-dim": "#d7383b",
        "on-primary": "#005d2c",
        "primary-dim": "#24f07e",
        outline: "#777575",
        "surface-container-lowest": "#000000",
        "surface-bright": "#2c2c2c",
        "secondary-fixed": "#74fbbb",
        "secondary-fixed-dim": "#65ecae",
        "on-surface-variant": "#adaaaa",
        "inverse-surface": "#fcf8f8",
        "on-secondary-fixed": "#00492f",
        "on-primary-fixed-variant": "#006832",
        "surface-variant": "#262626",
        "on-secondary": "#005e3d",
        "on-tertiary-fixed": "#00343d",
        "primary-container": "#13ea79",
      },
      fontFamily: {
        headline: ["Inter", "sans-serif"],
        body: ["Inter", "sans-serif"],
        label: ["Space Grotesk", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
};
""",

    "src/index.css": """@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }
  body {
    @apply bg-background text-on-background font-body selection:bg-primary selection:text-on-primary;
  }
}

@layer utilities {
  .material-symbols-outlined {
    font-variation-settings:
      "FILL" 0,
      "wght" 400,
      "GRAD" 0,
      "opsz" 24;
  }
  .glass-nav {
    background: rgba(19, 19, 19, 0.7);
    backdrop-filter: blur(20px);
  }
  .text-glow {
    text-shadow: 0 0 15px rgba(63, 255, 139, 0.4);
  }
  .nav-link {
    position: relative;
    text-decoration: none;
  }
  .nav-link::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: #3fff8b;
    transition: width 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  .nav-link:hover::after {
    width: 100%;
  }
  .go-to-top {
    animation: slideUp 0.3s ease-out;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
""",

    "src/main.tsx": """import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
""",

    "src/App.tsx": """import Navbar from "./components/Navbar";
import SideNav from "./components/SideNav";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Skills from "./components/sections/Skills";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer";
import GoToTop from "./components/GoToTop";

function App() {
  return (
    <div className="dark">
      <Navbar />
      <SideNav />
      <main className="pt-16">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <GoToTop />
    </div>
  );
}

export default App;
""",

    "src/components/Navbar.tsx": """export default function Navbar() {
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
""",

    "src/components/SideNav.tsx": """export default function SideNav() {
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
""",

    "src/components/Footer.tsx": """export default function Footer() {
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
""",

    "src/components/GoToTop.tsx": """import { useState, useEffect } from "react";

export default function GoToTop() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const scrollDuration = 1000;
    const scrollHeight = window.scrollY;
    const startTime = performance.now();

    function easeInOutCubic(t: number): number {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function scroll(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / scrollDuration, 1);
      const easedProgress = easeInOutCubic(progress);

      window.scrollTo(0, scrollHeight * (1 - easedProgress));

      if (progress < 1) {
        requestAnimationFrame(scroll);
      }
    }

    requestAnimationFrame(scroll);
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-40 w-12 h-12 bg-primary text-on-primary flex items-center justify-center hover:scale-110 transition-all go-to-top"
      title="Go to top"
    >
      <span className="material-symbols-outlined">arrow_upward</span>
    </button>
  );
}
""",

    "src/components/sections/Hero.tsx": """export default function Hero() {
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
""",

    "src/components/sections/About.tsx": """export default function About() {
  return (
    <section className="py-24 px-8 bg-surface-container-low">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-8 bg-surface-container p-10 flex flex-col justify-between group overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="font-headline text-3xl font-bold mb-6">
              Based in Thrissur, Kerala. Engineering Scalable Solutions.
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed max-w-2xl">
              B.Tech Computer Science & Engineering at <span className="text-primary">College of Engineering Trivandrum (Expected May 2027, CGPA: 8.63/10.0)</span>. Experienced in systems programming, distributed architectures, and AI-driven applications. Focused on delivering high-performance solutions with attention to reliability, maintainability, and measurable business impact.
            </p>
          </div>
          <div className="absolute -right-12 -bottom-12 opacity-5 group-hover:opacity-10 transition-opacity">
            <span className="material-symbols-outlined text-[200px]" style={{ fontVariationSettings: '"FILL" 1' }}>developer_board</span>
          </div>
        </div>
        <div className="md:col-span-4 bg-primary p-10 text-on-primary flex flex-col justify-center items-center text-center">
          <div className="font-label text-4xl font-black mb-2">CET '27</div>
          <div className="font-label text-xs tracking-widest uppercase opacity-80">Engineering Pedigree</div>
        </div>
      </div>
    </section>
  );
}
""",

    "src/components/sections/Projects.tsx": """export default function Projects() {
  return (
    <section className="py-32 px-8" id="projects">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-headline text-5xl font-extrabold tracking-tighter">Projects</h2>
        <p className="text-on-surface-variant mt-4">Project content goes here...</p>
      </div>
    </section>
  );
}
""",

    "src/components/sections/Experience.tsx": """export default function Experience() {
  return (
    <section className="py-32 px-8 bg-surface-container-low" id="experience">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-headline text-5xl font-extrabold tracking-tighter text-center">Experience</h2>
        <p className="text-on-surface-variant mt-4 text-center">Experience content goes here...</p>
      </div>
    </section>
  );
}
""",

    "src/components/sections/Skills.tsx": """export default function Skills() {
  return (
    <section className="py-32 px-8" id="skills">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-headline text-5xl font-black tracking-tighter mb-8">Technical Stack</h2>
        <p className="text-on-surface-variant">Skills content goes here...</p>
      </div>
    </section>
  );
}
""",

    "src/components/sections/Contact.tsx": """export default function Contact() {
  return (
    <section className="py-32 px-8 bg-[#131313]" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-headline text-5xl md:text-7xl font-black tracking-tighter mb-12">Contact</h2>
        <p className="text-on-surface-variant">Contact form goes here...</p>
      </div>
    </section>
  );
}
"""
}

def create_files():
    print("Initializing TypeScript React Project Structure...")
    for file_path, content in files.items():
        # Get the directory path for the file
        directory = os.path.dirname(file_path)
        
        # Create directories if they don't exist
        if directory:
            os.makedirs(directory, exist_ok=True)
        
        # Open file in write mode ('w' automatically overwrites existing files)
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
            
        print(f"✅ Created/Overwritten: {file_path}")
        
    print("\nAll TypeScript files generated successfully! Run 'npm run dev' to start your app.")

if __name__ == "__main__":
    create_files()
