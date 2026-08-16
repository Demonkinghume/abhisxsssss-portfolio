import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { portfolio } from "../data/portfolio";
import { Button, SectionTitle } from "./ui";

export default function Testimonials() {
  const { testimonials, testimonialsSection } = portfolio;

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
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="absolute top-[25%] left-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl">
        <SectionTitle
          title={testimonialsSection.title}
          subtitle={testimonialsSection.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name + i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass glass-hover rounded-3xl p-8 flex flex-col relative overflow-hidden"
            >
              <Quote className="w-10 h-10 text-primary/40 mb-4" />

              {t.rating ? (
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      className={`w-4 h-4 ${
                        s < t.rating
                          ? "text-primary fill-current"
                          : "text-white/20"
                      }`}
                    />
                  ))}
                </div>
              ) : null}

              <p className="text-gray-300 leading-relaxed mb-8">"{t.quote}"</p>

              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-black/50 border border-white/10 flex items-center justify-center shrink-0">
                  {t.avatar ? (
                    <img
                      src={t.avatar}
                      alt={t.name}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="font-heading font-bold text-gradient">
                      {t.name.charAt(0).toUpperCase()}
                    </span>
                  )}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            as="a"
            href={testimonialsSection.buttonLink}
            onClick={(e) => scrollTo(e, testimonialsSection.buttonLink)}
            variant="outline"
            size="lg"
          >
            {testimonialsSection.buttonLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
