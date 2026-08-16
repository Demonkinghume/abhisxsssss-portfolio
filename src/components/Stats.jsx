import { motion } from "framer-motion";
import { portfolio } from "../data/portfolio";

export default function Stats() {
  const { about } = portfolio;

  return (
    <section
      id="about"
      className="py-16 md:py-20 border-y border-white/10 bg-[#050505] relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-primary/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 justify-items-center">
          {about.stats.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col items-center text-center"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-2">
                <span className="text-gradient hover:scale-110 transition-transform duration-300 inline-block">
                  {s.value}
                </span>
                <span className="text-white text-3xl md:text-4xl">{s.suffix}</span>
              </div>
              <div className="text-gray-400 font-medium tracking-wide text-sm md:text-base uppercase max-w-[150px]">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
