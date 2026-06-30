import { FormEvent, useEffect, useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Brain,
  Download,
  FileBadge,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";

import portrait from "@/assets/vinay-portrait.jpg";
import ScrollReveal from "@/components/portfolio/ScrollReveal";
import TypewriterName from "@/components/portfolio/TypewriterName";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  aboutPoints,
  contactDetails,
  experiences,
  heroPills,
  highlights,
  projects,
  skillGroups,
  timelineItems,
} from "@/content/portfolioData";

const sectionClass = "section-shell py-20 md:py-28";

const Index = () => {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "ready">("idle");
  const [activeCertificate, setActiveCertificate] = useState<
    { title: string; src: string; type: "pdf" | "image" } | null
  >(null);

  useEffect(() => {
    document.documentElement.classList.add("dark");
    document.title = "Moningi Vinay Kumar | Futuristic Portfolio";

    const ensureMeta = (selector: string, attribute: "name" | "property", value: string) => {
      let tag = document.head.querySelector<HTMLMetaElement>(selector);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attribute, value);
        document.head.appendChild(tag);
      }
      return tag;
    };

    ensureMeta('meta[name="description"]', "name", "description").content =
      "Explore the journey of Moningi Vinay Kumar, a Computer Science student building across software, robotics, cloud, and innovation.";

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.href;

    let ldJson = document.head.querySelector<HTMLScriptElement>('script[data-portfolio-schema="person"]');
    if (!ldJson) {
      ldJson = document.createElement("script");
      ldJson.type = "application/ld+json";
      ldJson.dataset.portfolioSchema = "person";
      document.head.appendChild(ldJson);
    }
    ldJson.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Moningi Vinay Kumar",
      email: `mailto:${contactDetails.email}`,
      telephone: contactDetails.phone,
      jobTitle: "Computer Science and Engineering Student",
      address: {
        "@type": "PostalAddress",
        addressLocality: contactDetails.location,
      },
      alumniOf: "GIET University",
      knowsAbout: ["Python", "Web Development", "Robotics", "Cloud Computing", "Data Analysis"],
      url: window.location.href,
    });

    return () => {
      document.documentElement.classList.remove("dark");
    };
  }, []);

  const typedTagline = useMemo(
    () =>
      "Computer Science student crafting practical software, cloud-backed solutions, and robotics-driven experiences.",
    [],
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${formState.name || "a visitor"}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`,
    );
    window.location.href = `mailto:${contactDetails.email}?subject=${subject}&body=${body}`;
    setFormStatus("ready");
  };

  const githubHref = `https://github.com/${contactDetails.githubUsername}`;

  return (
    <main className="relative overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 bg-hero-grid story-grid opacity-50" />
      <div className="pointer-events-none absolute left-[8%] top-20 h-48 w-48 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
      <div className="pointer-events-none absolute right-[10%] top-[32rem] h-56 w-56 rounded-full bg-highlight/20 blur-3xl animate-pulse-glow" />

      <section className="relative min-h-screen">
        <div className="section-shell flex min-h-screen flex-col py-8 md:py-10">
          <header className="relative z-20 flex items-center justify-between gap-4">
            <a href="#top" className="font-display text-sm uppercase tracking-[0.28em] text-muted-foreground">
              MVK Portfolio
            </a>
            <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
              <a className="transition-colors hover:text-foreground" href="#journey">Journey</a>
              <a className="transition-colors hover:text-foreground" href="#projects">Projects</a>
              <a className="transition-colors hover:text-foreground" href="#experience">Experience</a>
              <a className="transition-colors hover:text-foreground" href="#contact">Contact</a>
            </nav>
          </header>

          <ScrollReveal delay={80} className="glass-panel relative mt-8 overflow-hidden rounded-[32px] p-6 py-10 md:mt-10 md:p-8 lg:mt-12 lg:p-10">
            <div className="absolute inset-0 bg-panel-sheen" />
            <div id="top" className="relative grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-8">
              <div className="space-y-10">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/60 px-4 py-2 text-sm text-muted-foreground backdrop-blur-md">
                    <Sparkles className="h-4 w-4 text-primary" />
                    Story-driven portfolio experience
                  </div>
                  <div className="space-y-5">
                    <p className="eyebrow">Moningi Vinay Kumar</p>
                    <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[0.95] sm:text-6xl lg:text-7xl">
                      <span className="gradient-text">
                        <TypewriterName text="Moningi Vinay Kumar" />
                      </span>
                    </h1>
                    <p className="max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
                      {typedTagline}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {heroPills.map((pill) => (
                    <span
                      key={pill}
                      className="rounded-full border border-border/80 bg-secondary/45 px-4 py-2 text-sm text-secondary-foreground shadow-soft backdrop-blur-md"
                    >
                      {pill}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button asChild variant="hero" size="hero">
                    <a href="#journey">
                      View My Journey
                      <ArrowDown className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild variant="glass" size="hero">
                    <a href="/Vinay_Kumar_Resume.pdf" download>
                      Download Resume
                      <Download className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>

              <div className="space-y-4 lg:justify-self-end lg:max-w-[260px]">
                <div className="overflow-hidden rounded-[24px] border border-border/70 bg-elevated shadow-soft mx-auto w-full max-w-[220px] lg:max-w-none">
                  <img
                    src={portrait}
                    alt="Portrait of Moningi Vinay Kumar"
                    className="aspect-[4/5] w-full object-cover object-top"
                    loading="eager"
                  />
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  <div className="rounded-2xl border border-border/70 bg-secondary/40 p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Current Track</p>
                    <p className="mt-2 text-lg font-semibold text-foreground">B.Tech CSE</p>
                  </div>
                  <div className="rounded-2xl border border-border/70 bg-secondary/40 p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Academic Score</p>
                    <p className="mt-2 text-lg font-semibold text-foreground">CGPA 8.64</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-4 border-t border-border/60 pt-6 text-sm text-muted-foreground md:mt-12 md:flex-row md:flex-wrap md:items-center md:justify-between md:gap-6">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" />
                {contactDetails.location}
              </div>
              <a
                className="flex items-center gap-3 transition-colors hover:text-foreground break-all"
                href={`mailto:${contactDetails.email}`}
              >
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                {contactDetails.email}
              </a>
              <a
                className="flex items-center gap-3 transition-colors hover:text-foreground"
                href={`tel:${contactDetails.phone}`}
              >
                <Phone className="h-4 w-4 text-primary" />
                {contactDetails.phone}
              </a>
            </div>
          </ScrollReveal>

        </div>
      </section>

      <section id="about" className={sectionClass}>
        <div className="section-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <ScrollReveal className="section-heading">
            <p className="eyebrow">About Me · My Beginning</p>
            <h2 className="text-balance text-3xl font-semibold md:text-5xl">
              From strong academic roots to hands-on systems, this journey is driven by curiosity that likes to build.
            </h2>
            <p className="max-w-xl text-lg leading-8 text-muted-foreground">
              What began as a disciplined student path gradually evolved into a broader technology story — one shaped by engineering study, coding practice, robotics exposure, cloud learning, and the desire to make practical ideas real.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={120} className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {aboutPoints.map((point, index) => (
              <article key={point} className="glass-panel rounded-3xl p-6">
                <p className="mb-4 text-sm uppercase tracking-[0.24em] text-primary">0{index + 1}</p>
                <p className="text-base leading-7 text-muted-foreground">{point}</p>
              </article>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <section id="journey" className={sectionClass}>
        <div className="section-shell">
          <ScrollReveal className="section-heading mb-12 max-w-3xl">
            <p className="eyebrow">Journey Timeline</p>
            <h2 className="text-balance text-3xl font-semibold md:text-5xl">
              A scrollable timeline of the milestones that shaped a future-focused developer.
            </h2>
            <p className="text-lg leading-8 text-muted-foreground">
              Each phase added something distinct: academic discipline, engineering depth, workshop leadership, data handling, cloud experimentation, and AI-driven problem solving.
            </p>
          </ScrollReveal>

          <div className="relative ml-3 space-y-8 md:ml-0">
            <div className="timeline-line absolute left-3 top-0 h-full w-px md:left-1/2 md:-translate-x-1/2" />
            {timelineItems.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;
              return (
                <ScrollReveal key={item.title} delay={index * 80}>
                  <article
                    className={`relative grid gap-6 md:grid-cols-2 ${isEven ? "" : "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1"}`}
                  >
                    <div className="hidden md:block" />
                    <div className="relative md:contents">
                      <span className="absolute left-[-0.15rem] top-6 z-10 flex h-7 w-7 items-center justify-center rounded-full border border-primary/50 bg-background md:left-1/2 md:-translate-x-1/2">
                        <span className="h-2.5 w-2.5 rounded-full bg-primary shadow-glow" />
                      </span>
                      <div className="glass-panel ml-10 rounded-3xl p-6 md:ml-0 md:max-w-xl md:justify-self-end md:p-7">
                        <div className="mb-5 flex items-start justify-between gap-4">
                          <div>
                            <p className="text-sm uppercase tracking-[0.24em] text-primary">{item.year}</p>
                            <h3 className="mt-2 text-2xl font-semibold text-foreground">{item.title}</h3>
                            <p className="mt-2 text-sm text-muted-foreground">{item.subtitle}</p>
                          </div>
                          <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border/70 bg-secondary/50">
                            <Icon className="h-5 w-5 text-primary" />
                          </span>
                        </div>
                        <p className="text-base leading-7 text-muted-foreground">{item.description}</p>
                        <div className="mt-5 inline-flex rounded-full border border-border/70 bg-secondary/40 px-4 py-2 text-sm text-secondary-foreground">
                          {item.stat}
                        </div>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="skills" className={sectionClass}>
        <div className="section-shell">
          <ScrollReveal className="section-heading mb-12 max-w-3xl">
            <p className="eyebrow">Skills</p>
            <h2 className="text-balance text-3xl font-semibold md:text-5xl">
              A toolkit that blends software fundamentals, web development, data work, and robotics curiosity.
            </h2>
          </ScrollReveal>

          <div className="grid gap-6 lg:grid-cols-3">
            {skillGroups.map((group, groupIndex) => {
              const Icon = group.icon;
              return (
                <ScrollReveal key={group.title} delay={groupIndex * 100}>
                  <article className="glass-panel rounded-3xl p-6">
                    <div className="mb-8 flex items-center justify-between">
                      <div>
                        <p className="text-sm uppercase tracking-[0.24em] text-primary">Area</p>
                        <h3 className="mt-2 text-2xl font-semibold">{group.title}</h3>
                      </div>
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border/70 bg-secondary/50">
                        <Icon className="h-5 w-5 text-primary" />
                      </span>
                    </div>
                    <div className="space-y-5">
                      {group.skills.map((skill) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <span>{skill.name}</span>
                            <span>{skill.level}%</span>
                          </div>
                          <div className="h-2 overflow-hidden rounded-full bg-secondary/70">
                            <div
                              className="skill-sheen h-full rounded-full bg-gradient-to-r from-primary via-highlight to-primary animate-shimmer"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="projects" className={sectionClass}>
        <div className="section-shell">
          <ScrollReveal className="section-heading mb-12 max-w-3xl">
            <p className="eyebrow">Projects</p>
            <h2 className="text-balance text-3xl font-semibold md:text-5xl">
              Projects that reflect a preference for useful systems, cleaner workflows, and smarter technology experiences.
            </h2>
          </ScrollReveal>

          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => {
              const Icon = project.icon;
              const viewHref = project.link ?? "#";
              return (
                <ScrollReveal key={project.title} delay={index * 80}>
                  <article className="group glass-panel flex h-full flex-col rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-2">
                    <div className="mb-5 flex items-center justify-between gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border/70 bg-secondary/50 transition-transform duration-300 group-hover:scale-105">
                        <Icon className="h-5 w-5 text-primary" />
                      </span>
                      <div className="flex flex-wrap items-center justify-end gap-2">
                        <Button asChild variant="glass" size="sm">
                          <a
                            href={viewHref}
                            target={project.link ? "_blank" : undefined}
                            rel={project.link ? "noreferrer" : undefined}
                          >
                            View Project
                            <ArrowUpRight className="h-4 w-4" />
                          </a>
                        </Button>
                        <Button asChild variant="glass" size="sm">
                          <a href="#contact">
                            Discuss Project
                            <ArrowUpRight className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                    <p className="mt-4 flex-1 text-base leading-7 text-muted-foreground">{project.summary}</p>
                    <p className="mt-4 text-sm text-foreground/90">{project.outcome}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-border/70 bg-secondary/40 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="experience" className={sectionClass}>
        <div className="section-shell">
          <ScrollReveal className="section-heading mb-12 max-w-3xl">
            <p className="eyebrow">Experience & Activities</p>
            <h2 className="text-balance text-3xl font-semibold md:text-5xl">
              Learning did not stay inside classrooms — it expanded through internships, workshops, clubs, and collaboration.
            </h2>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {experiences.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 70}>
                <article className="glass-panel flex h-full flex-col rounded-3xl p-6">
                  <span className="self-start rounded-full border border-border/70 bg-secondary/40 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-secondary-foreground">
                    {item.period}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-3 flex-1 text-base leading-7 text-muted-foreground">{item.description}</p>
                  {item.certificate && (
                    <Button
                      type="button"
                      variant="glass"
                      size="sm"
                      className="mt-5 self-start"
                      onClick={() =>
                        setActiveCertificate({
                          title: item.title,
                          src: item.certificate!,
                          type: item.certificateType ?? "image",
                        })
                      }
                    >
                      Show Certificate
                      <FileBadge className="h-4 w-4" />
                    </Button>
                  )}
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="achievements" className={sectionClass}>
        <div className="section-shell">
          <ScrollReveal className="section-heading mb-12 max-w-3xl">
            <p className="eyebrow">Achievements & Highlights</p>
            <h2 className="text-balance text-3xl font-semibold md:text-5xl">
              A few standout moments that reveal consistency, initiative, and a bias toward action.
            </h2>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-2">
            {highlights.map((highlight, index) => (
              <ScrollReveal key={highlight} delay={index * 80}>
                <article className="glass-panel rounded-3xl p-6">
                  <p className="mb-4 text-sm uppercase tracking-[0.22em] text-primary">Highlight 0{index + 1}</p>
                  <p className="text-lg leading-8 text-muted-foreground">{highlight}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="resume" className={sectionClass}>
        <div className="section-shell grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <ScrollReveal className="section-heading max-w-xl">
            <p className="eyebrow">Resume</p>
            <h2 className="text-balance text-3xl font-semibold md:text-5xl">
              The full profile, embedded for quick review and ready to download anytime.
            </h2>
            <p className="text-lg leading-8 text-muted-foreground">
              This section keeps the original resume accessible while the rest of the site tells the same story in a more human, visual, and interactive way.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild variant="hero" size="hero">
                <a href="/Vinay_Kumar_Resume.pdf" download>
                  Download Resume
                  <Download className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="glass" size="hero">
                <a href="#contact">Start a Conversation</a>
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <div className="glass-panel overflow-hidden rounded-[30px] p-3 md:p-4">
              <iframe
                src="/Vinay_Kumar_Resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
                title="Resume preview"
                className="h-[32rem] w-full rounded-[24px] border border-border/60 bg-card md:h-[46rem]"
                loading="lazy"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="contact" className="pb-20 md:pb-28">
        <div className="section-shell">
          <div className="glass-panel overflow-hidden rounded-[32px] p-6 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <ScrollReveal className="section-heading max-w-xl">
                <p className="eyebrow">Contact</p>
                <h2 className="text-balance text-3xl font-semibold md:text-5xl">
                  If the next opportunity values curiosity, discipline, and practical building, let’s connect.
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <a className="flex items-center gap-3 transition-colors hover:text-foreground" href={`mailto:${contactDetails.email}`}>
                    <Mail className="h-4 w-4 text-primary" />
                    {contactDetails.email}
                  </a>
                  <a className="flex items-center gap-3 transition-colors hover:text-foreground" href={githubHref} target="_blank" rel="noreferrer">
                    <Github className="h-4 w-4 text-primary" />
                    {contactDetails.githubUsername}
                  </a>
                  <a
                    className="flex items-center gap-3 transition-colors hover:text-foreground"
                    href={contactDetails.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Linkedin className="h-4 w-4 text-primary" />
                    {contactDetails.linkedinLabel}
                  </a>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-primary" />
                    {contactDetails.phone}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={120}>
                <form className="grid gap-4" onSubmit={handleSubmit}>
                  <div className="grid gap-4 md:grid-cols-2">
                    <label className="grid gap-2 text-sm text-muted-foreground">
                      Name
                      <input
                        required
                        value={formState.name}
                        onChange={(event) => setFormState((current) => ({ ...current, name: event.target.value }))}
                        className="rounded-2xl border border-border/80 bg-secondary/35 px-4 py-3 text-foreground outline-none transition focus:border-primary"
                        placeholder="Your name"
                      />
                    </label>
                    <label className="grid gap-2 text-sm text-muted-foreground">
                      Email
                      <input
                        required
                        type="email"
                        value={formState.email}
                        onChange={(event) => setFormState((current) => ({ ...current, email: event.target.value }))}
                        className="rounded-2xl border border-border/80 bg-secondary/35 px-4 py-3 text-foreground outline-none transition focus:border-primary"
                        placeholder="your@email.com"
                      />
                    </label>
                  </div>
                  <label className="grid gap-2 text-sm text-muted-foreground">
                    Message
                    <textarea
                      required
                      rows={6}
                      value={formState.message}
                      onChange={(event) => setFormState((current) => ({ ...current, message: event.target.value }))}
                      className="rounded-3xl border border-border/80 bg-secondary/35 px-4 py-3 text-foreground outline-none transition focus:border-primary"
                      placeholder="Tell me about the opportunity, collaboration, or idea."
                    />
                  </label>
                  <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <Button type="submit" variant="hero" size="hero">
                      Send Message
                      <ArrowUpRight className="h-4 w-4" />
                    </Button>
                    <p className="text-sm text-muted-foreground">
                      {formStatus === "ready"
                        ? "Your mail app is ready with a pre-filled message."
                        : "Submitting opens your mail app with the message prepared."}
                    </p>
                  </div>
                </form>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <a
        href="#top"
        className="fixed bottom-6 right-6 z-20 inline-flex h-12 w-12 items-center justify-center rounded-full border border-border/70 bg-card/80 text-foreground shadow-soft backdrop-blur-xl transition hover:-translate-y-1 hover:border-primary"
        aria-label="Back to top"
      >
        <ArrowDown className="h-4 w-4 rotate-180" />
      </a>

      <div className="pointer-events-none fixed inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background to-transparent" />
      <div className="sr-only">
        <Brain />
      </div>

      <Dialog
        open={Boolean(activeCertificate)}
        onOpenChange={(open) => {
          if (!open) setActiveCertificate(null);
        }}
      >
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>{activeCertificate?.title}</DialogTitle>
          </DialogHeader>
          {activeCertificate?.type === "pdf" ? (
            <iframe
              src={activeCertificate.src}
              title={activeCertificate.title}
              className="h-[70vh] w-full rounded-xl border border-border/60 bg-card"
            />
          ) : activeCertificate ? (
            <div className="max-h-[75vh] overflow-auto rounded-xl border border-border/60 bg-card p-2">
              <img
                src={activeCertificate.src}
                alt={`${activeCertificate.title} certificate`}
                className="mx-auto h-auto w-full rounded-lg object-contain"
              />
            </div>
          ) : null}
          {activeCertificate && (
            <div className="flex justify-end">
              <Button asChild variant="glass" size="sm">
                <a href={activeCertificate.src} target="_blank" rel="noreferrer">
                  Open in new tab
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default Index;
