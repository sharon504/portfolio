const skillCategories = [
  {
    title: "Languages",
    skills: ["Golang (Go)", "Python", "Java", "TypeScript", "JavaScript", "SQL", "C++"],
  },
  {
    title: "Full-Stack & Web",
    skills: ["React", "NestJS", "Node.js", "Express.js", "Microservices", "RESTful APIs", "gRPC", "WebSockets"],
  },
  {
    title: "Testing & QA",
    skills: ["Jest", "Supertest", "Vitest", "PyTest", "Postman", "Load Testing"],
  },
  {
    title: "Databases & Infrastructure",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Docker", "CI/CD Pipelines", "Linux"],
  },
  {
    title: "Core Competencies",
    skills: ["Concurrency", "TCP/IP Networking", "System Design", "Data Structures", "Git"],
  },
];

export default function Skills() {
  return (
    <section className="py-32 px-8" id="skills">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-headline text-5xl font-black tracking-tighter mb-16">Technical Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-surface-container p-8 rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-all hover:translate-y-[-4px]">
              <h3 className="font-label text-primary tracking-widest uppercase text-xs mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span key={i} className="px-3 py-1.5 bg-surface-dim text-on-surface-variant text-sm rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
