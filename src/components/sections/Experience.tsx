const experiences = [
  {
    company: "CAFMADS Agency, CET",
    role: "FULL STACK DEVELOPER INTERN",
    period: "Jan 2025 — Present",
    description: "Architected and implemented a centralized Faculty Repository System serving 500+ users, leveraging NestJS microservices and React for the UI layer. Implemented comprehensive Role-Based Access Control (RBAC) and secure authentication protocols. Established automated testing practices with Vitest to ensure code quality and prevent regressions in critical modules.",
    highlights: ["500+ users", "Role-Based Access Control (RBAC)"]
  },
  {
    company: "PgBee",
    role: "BACKEND TEAM LEAD",
    period: "2023",
    description: "Led backend architecture development for a hostel discovery platform using Node.js and TypeScript. Optimized PostgreSQL queries and database schema to efficiently handle complex search operations and large-scale datasets, achieving sub-second response times. Established API contracts and error handling standards for seamless integration with React frontend applications.",
    highlights: ["PostgreSQL"]
  },
  {
    company: "Rehabilitation Plantation Ltd. (Government)",
    role: "BACKEND TEAM LEAD (ERP SYSTEM)",
    period: "2022",
    description: "Leading the development of a mission-critical ERP system using NestJS (TypeScript) and PostgreSQL, managing financial, HR, and inventory operations for a large government enterprise. Designed idempotent API endpoints ensuring data consistency across distributed modules during complex financial transactions. Implemented comprehensive E2E testing with Supertest and Vitest, reducing production incidents. Currently in Production.",
    highlights: ["NestJS (TypeScript)", "idempotent API endpoints", "Currently in Production."]
  },
  {
    company: "Oronium",
    role: "BACKEND DEVELOPER INTERN",
    period: "Sep 2024 — Dec 2024",
    description: "Developed high-throughput REST APIs with NoSQL databases, handling production-level data volumes and concurrent requests. Integrated payment gateway solutions and third-party authentication systems with emphasis on security and error handling. Conducted performance profiling and load testing to identify optimization opportunities, implementing distributed caching strategies.",
    highlights: []
  },
];

export default function Experience() {
  return (
    <section className="py-32 px-8 bg-surface-container-low" id="experience">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-4">
          <div className="font-label text-primary text-xs tracking-[0.3em] uppercase mb-4">TECHNICAL CAREER PATH</div>
          <h2 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tighter">Experience Registry.</h2>
        </div>
        
        <div className="mt-24 space-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-[280px_1fr_140px] gap-8 items-start">
              {/* Left: Company and Role */}
              <div className="flex flex-col">
                <h3 className="font-headline text-xl font-bold text-primary mb-1">
                  {exp.company}
                </h3>
                <div className="font-label text-on-surface-variant text-xs tracking-widest uppercase">
                  {exp.role}
                </div>
              </div>
              
              {/* Middle: Description */}
              <div className="flex items-start">
                <p className="text-on-surface-variant text-base leading-relaxed">
                  {exp.description.split(/(\b500\+ users\b|\bRole-Based Access Control \(RBAC\)\b|\bPostgreSQL\b|\bNestJS \(TypeScript\)\b|\bidempotent API endpoints\b|\bCurrently in Production\.\b)/g).map((part, i) => {
                    if (exp.highlights.includes(part.trim())) {
                      return <span key={i} className="text-on-surface font-semibold">{part}</span>;
                    }
                    return part;
                  })}
                </p>
              </div>
              
              {/* Right: Period */}
              <div className="flex items-start md:justify-end">
                <div className="text-on-surface font-medium text-sm whitespace-nowrap">
                  {exp.period}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
