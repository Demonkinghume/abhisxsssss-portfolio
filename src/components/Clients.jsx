import { motion } from "framer-motion";
import { portfolio } from "../data/portfolio";
import { SectionTitle } from "./ui";

export default function Clients() {
  const { clients, clientsSection } = portfolio;

  return (
    <section
      id="clients"
      className="py-24 relative overflow-hidden bg-[#0A0510] border-y border-white/10"
    >
      <div className="absolute top-[-20%] right-0 w-[500px] h-[500px] bg-secondary/10 blur-[150px] rounded-full -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl">
        <SectionTitle
          title={clientsSection.title}
          subtitle={clientsSection.subtitle}
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6 justify-items-center max-w-6xl mx-auto">
          {clients.map((client, i) => {
            const Wrapper = client.url ? "a" : "div";
            return (
              <motion.div
                key={client.name + i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="w-full"
              >
                <Wrapper
                  {...(client.url
                    ? { href: client.url, target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group block w-full bg-[#120B1A] border border-white/10 hover:border-purple-500/40 group-hover:border-purple-500/40 rounded-2xl p-6 text-center transition-all duration-300 hover:bg-[#1A1025] hover:scale-105"
                >
                  <div className="mx-auto mb-4 w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-black/50 border border-white/10 flex items-center justify-center group-hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-shadow duration-300">
                    {client.logo ? (
                      <img
                        src={client.logo}
                        alt={client.name}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-2xl font-heading font-bold text-gradient">
                        {client.name.charAt(0).toUpperCase()}
                      </span>
                    )}
                  </div>
                  <h3 className="font-heading font-bold text-sm md:text-base text-white truncate group-hover:text-purple-400 transition-colors">
                    {client.name}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-1">
                    {client.projectType}
                  </p>
                </Wrapper>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
