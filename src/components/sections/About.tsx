export default function About() {
  return (
    <section className="py-24 px-8 bg-surface-container-low">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-8 bg-surface-container p-10 flex flex-col justify-between group overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="font-headline text-3xl font-bold mb-6">
              Based in Thrissur, Kerala. Engineering Scalable Solutions.
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed max-w-2xl">
              Web and ML Developer experienced in building scalable,
              enterprise-grade applications using TypeScript, Python, and
              Golang. Adept at full-stack development, integrating robust REST
              APIs with React interfaces, and leveraging AI models for complex
              problem-solving. Proven ability to take ownership of features from
              conception to deployment in fast-paced environments.
            </p>
          </div>
          <div className="absolute -right-12 -bottom-12 opacity-5 group-hover:opacity-10 transition-opacity">
            <span
              className="material-symbols-outlined text-[200px]"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              developer_board
            </span>
          </div>
        </div>
        <div className="md:col-span-4 bg-primary p-10 text-on-primary flex flex-col justify-center items-center text-center">
          <div className="font-label text-4xl font-black mb-2">CET '27</div>
        </div>
      </div>
    </section>
  );
}
