import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { portfolio } from "../data/portfolio";
import { Button } from "./ui";

export default function Hero() {
  const { hero, personal } = portfolio;

  const scrollTo = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el)
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 80,
        behavior: "smooth",
      });
  };

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden pt-32 md:pt-28 pb-16"
    >
      {/* Background glows */}
      <div className="absolute top-[-25%] left-[-100%] w-[300%] h-[150%] pointer-events-none -z-10">
        <div className="absolute top-[20%] left-1/2 w-[800px] h-[500px] bg-primary/20 blur-[150px] rounded-full" />
      </div>
      <div className="absolute top-[15%] right-8 w-[500px] h-[500px] bg-secondary/20 blur-[150px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-8 w-[300px] h-[300px] bg-purple-600/20 blur-[150px] rounded-full -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          {/* ---------------- Left : text ---------------- */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary mb-6"
            >
              {hero.greeting}
            </motion.h2>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-bold font-heading leading-[1.05] tracking-tight mb-8">
              {hero.headingLines.map((line, i) => (
                <motion.span
                  key={line.text}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
                  className="block"
                >
                  {line.highlight ? (
                    <span className="text-gradient-animated">{line.text}</span>
                  ) : (
                    <span className="text-white">{line.text}</span>
                  )}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-gray-400 text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8"
            >
              {hero.description}
            </motion.p>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-10"
            >
              {hero.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full glass text-sm font-medium text-gray-300 border border-primary/30"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Button
                as="a"
                href={hero.primaryButton.href}
                onClick={(e) => scrollTo(e, hero.primaryButton.href)}
                size="lg"
                className="w-full sm:w-auto"
              >
                <Play className="w-4 h-4" />
                {hero.primaryButton.label}
              </Button>
              <Button
                as="a"
                href={hero.secondaryButton.href}
                onClick={(e) => scrollTo(e, hero.secondaryButton.href)}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                {hero.secondaryButton.label}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>

            {/* Mini stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="mt-14 flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-white/10 text-center lg:text-left"
            >
              {hero.stats.map((s) => (
                <div key={s.label} className="py-4 md:py-0 md:px-8 md:first:pl-0">
                  <div className="text-3xl md:text-4xl font-bold font-heading text-gradient">
                    {s.value}
                  </div>
                  <div className="text-gray-500 text-xs uppercase tracking-wider mt-1 max-w-[140px] mx-auto lg:mx-0">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ---------------- Right : photo ---------------- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[320px] sm:max-w-md lg:max-w-[480px] xl:max-w-[600px] xl:mr-10">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/30 blur-[100px] rounded-full" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/30 blur-[100px] rounded-full" />

              <div className="relative rounded-[2rem] overflow-hidden border border-white/10 glass p-2">
                <img
                  src={personal.profileImage}
                  alt={`${personal.name} — ${personal.title}`}
                  loading="eager"
                  className="w-full h-auto rounded-[1.6rem] object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-[2rem]" />
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
