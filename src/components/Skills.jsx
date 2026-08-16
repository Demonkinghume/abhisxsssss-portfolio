import { motion } from "framer-motion";
import { portfolio } from "../data/portfolio";
import { SectionTitle } from "./ui";

export default function Skills() {
  const { skills } = portfolio;

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute top-[20%] left-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl">
        <SectionTitle title={skills.title} subtitle={skills.subtitle} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.items.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group glass glass-hover rounded-3xl p-8 relative overflow-hidden"
            >
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center border border-white/10 bg-white/5 group-hover:scale-110 transition-transform duration-300 shrink-0"
                    style={{ color: skill.color || "#7c3aed" }}
                  >
                    {skill.icon ? (
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        loading="lazy"
                        className="w-8 h-8 object-contain"
                      />
                    ) : (
                      <span className="font-heading font-bold text-xl">
                        {skill.name.replace(/[^A-Za-z ]/g, "").trim().charAt(0)}
                      </span>
                    )}
                  </div>
                  <p className="font-heading font-semibold text-lg">
                    <span className="text-white group-hover:text-purple-400 transition-colors">
                      {skill.name}
                    </span>
                  </p>
                </div>
                <p className="font-heading font-bold text-lg">
                  <span className="text-gradient">{skill.level}%</span>
                </p>
              </div>

              <div className="relative z-10 h-2 w-full rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient"
                />
              </div>

              {skill.description ? (
                <p className="relative z-10 text-sm text-gray-500 mt-4 leading-relaxed">
                  {skill.description}
                </p>
              ) : null}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
