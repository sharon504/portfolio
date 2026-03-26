import { useCallback, useEffect, useState } from "react";
import { motion } from "motion/react";
import useEmblaCarousel from "embla-carousel-react";

const projects = [
  {
    title: "Vitalis – AI Wellness Agent for Elderly Care",
    tech: "Python, TypeScript",
    award: "1st Prize, CodeReCet 2.0",
    description: [
      "Developed the full-stack infrastructure for a voice-based AI agent using Python, handling real-time data streams and LLM integration.",
      "Designed an event-driven architecture to process health alerts instantaneously, mimicking enterprise-grade automated workflows.",
    ],
    screenshot: "/projects/vitalis.svg",
  },
  {
    title: "Blue Collar Connect Platform",
    tech: "Python, ML",
    award: "3rd Prize National, UST D3code",
    description: [
      "Engineered a job-matching platform using Python and predictive ML models (Random Forest), processing complex user datasets to recommend optimal job matches.",
      "Optimized database interactions to handle concurrent search requests from a distributed user base.",
    ],
    screenshot: "/projects/blue-collar-connect.svg",
  },
  {
    title: "High-Performance HTTP Server from Scratch",
    tech: "Golang, Systems Programming",
    award: "Self-Initiated",
    description: [
      "Built a concurrent HTTP/1.1 server purely in Golang using the 'net' package (TCP sockets), bypassing standard HTTP libraries to understand low-level networking.",
      "Engineered a Goroutine pool to handle thousands of concurrent connections efficiently, ensuring non-blocking I/O operations.",
    ],
    screenshot: "/projects/http-server.svg",
  },
];

export default function Projects() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
    containScroll: false,
    skipSnaps: false,
    dragFree: false,
  });

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi || isPaused) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [emblaApi, isPaused]);

  const actualActiveIndex = selectedIndex;

  return (
    <section
      className="py-32 bg-surface-container-low overflow-hidden"
      id="projects"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-8 mb-16">
        <h2 className="font-headline text-5xl font-extrabold tracking-tighter text-center">
          Projects
        </h2>
      </div>

      <div className="relative w-full">
        <div
          className="overflow-hidden relative"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%), linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%), linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
          ref={emblaRef}
        >
          <div className="flex py-4">
            {projects.map((project, index) => {
              const isActive = index === actualActiveIndex;
              const isPrev =
                (actualActiveIndex - 1 + projects.length) % projects.length ===
                index;
              const isNext =
                (actualActiveIndex + 1) % projects.length === index;
              const isAdjacent = isPrev || isNext;

              return (
                <motion.div
                  key={index}
                  className="flex-[0_0_85%] md:flex-[0_0_55%] lg:flex-[0_0_40%] min-w-0 -mx-6 md:-mx-8"
                  onClick={() => !isActive && scrollTo(index)}
                  animate={{
                    scale: isActive ? 1 : isAdjacent ? 0.85 : 0.75,
                    opacity: isActive ? 1 : isAdjacent ? 0.6 : 0.3,
                    zIndex: isActive ? 30 : isAdjacent ? 20 : 10,
                    cursor: isActive ? "default" : "pointer",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    duration: 0.6,
                  }}
                  style={{
                    willChange: "transform",
                  }}
                >
                  <motion.div
                    className="relative aspect-video rounded-xl border border-outline-variant/10 overflow-hidden"
                    animate={{
                      borderColor: isActive
                        ? "rgba(63, 255, 139, 0.3)"
                        : "rgba(73, 72, 71, 0.1)",
                      boxShadow: isActive
                        ? "0 20px 50px rgba(63, 255, 139, 0.15)"
                        : "0 4px 10px rgba(0, 0, 0, 0.1)",
                    }}
                    whileHover={
                      isActive
                        ? { scale: 1.02 }
                        : {
                            scale: 1.05,
                            borderColor: "rgba(63, 255, 139, 0.5)",
                            boxShadow: "0 15px 40px rgba(63, 255, 139, 0.2)",
                          }
                    }
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 25,
                    }}
                  >
                    <motion.img
                      src={project.screenshot}
                      alt={project.title}
                      className="absolute inset-0 z-0 w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    />

                    <motion.div
                      className="absolute inset-0 z-10 bg-gradient-to-t from-black/85 via-black/60 to-transparent"
                      whileHover={{ opacity: 0.8 }}
                      transition={{ duration: 0.3 }}
                    />

                    <div className="absolute inset-0 z-20 p-6 md:p-8 flex flex-col justify-between">
                      <div className="flex items-start justify-between">
                        <div className="font-label text-xs font-medium tracking-wider uppercase text-primary text-glow drop-shadow-sm">
                          {project.award}
                        </div>
                        <span className="material-symbols-outlined text-primary text-glow drop-shadow-sm">
                          emoji_events
                        </span>
                      </div>

                      <div className="flex-1 flex flex-col justify-center items-center text-center px-4 py-8">
                        <div className="max-w-lg">
                          <h3 className="font-headline text-xl md:text-2xl font-semibold text-white mb-2 drop-shadow-md">
                            {project.title}
                          </h3>

                          <div className="text-white/90 text-sm font-light mb-3 drop-shadow-sm">
                            {project.tech}
                          </div>

                          <div className="text-white/80 space-y-1.5 text-xs md:text-sm font-light">
                            {project.description.map((desc, i) => (
                              <p key={i} className="drop-shadow-sm line-clamp-2">
                                {desc}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="h-6"></div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center gap-3 mt-12 px-8">
          {projects.map((_, index) => {
            const isActiveDot = index === actualActiveIndex;

            return (
              <motion.button
                key={index}
                onClick={() => scrollTo(index)}
                className="h-2 rounded-full"
                animate={{
                  width: isActiveDot ? 32 : 8,
                  backgroundColor: isActiveDot ? "#3fff8b" : "#777575",
                }}
                whileHover={{
                  backgroundColor: isActiveDot ? "#3fff8b" : "#adaaaa",
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
