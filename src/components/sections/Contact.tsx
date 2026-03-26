const contactInfo = [
  {
    icon: "mail",
    label: "Email",
    value: "sharonpshajan@gmail.com",
    href: "mailto:sharonpshajan@gmail.com",
  },
  {
    icon: "location_on",
    label: "Location",
    value: "Thrissur, Kerala",
    href: null,
  },
  {
    icon: "link",
    label: "LinkedIn",
    value: "linkedin.com/in/sharonpshajan",
    href: "https://linkedin.com/in/sharonpshajan",
  },
  {
    icon: "code",
    label: "GitHub",
    value: "github.com/sharon504",
    href: "https://github.com/sharon504",
  },
];

export default function Contact() {
  return (
    <section className="py-32 px-8 bg-[#131313]" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-headline text-5xl md:text-7xl font-black tracking-tighter mb-12">
          Get In Touch
        </h2>
        <p className="text-on-surface-variant text-lg mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.href || undefined}
              className={`bg-surface-container p-6 rounded-xl border border-outline-variant/10 hover:border-primary/50 transition-all hover:translate-y-[-4px] ${!item.href ? "cursor-default" : ""}`}
            >
              <span className="material-symbols-outlined text-primary mb-3">
                {item.icon}
              </span>
              <div className="font-label text-xs tracking-widest uppercase text-on-surface-variant mb-1">
                {item.label}
              </div>
              <div className="text-on-surface font-medium">{item.value}</div>
            </a>
          ))}
        </div>
        <div className="mt-12">
          <a
            href="mailto:sharonpshajan@gmail.com"
            className="inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-4 font-label font-bold uppercase tracking-widest text-sm hover:brightness-110 transition-all rounded-lg"
          >
            <span className="material-symbols-outlined">send</span>
            Send a Message
          </a>
        </div>
      </div>
    </section>
  );
}
