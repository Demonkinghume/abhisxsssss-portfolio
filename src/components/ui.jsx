import { motion } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Button — primary (gradient pill) / outline / ghost                 */
/* ------------------------------------------------------------------ */
export function Button({
  as = "button",
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold font-heading tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer";

  const variants = {
    primary:
      "bg-gradient text-white shadow-lg shadow-primary/30 hover:shadow-[0_0_40px_rgba(124,58,237,0.8)] hover:scale-105",
    outline:
      "border border-white/20 text-white hover:bg-white/10 hover:border-white/20 hover:scale-105",
    ghost: "text-gray-300 hover:text-white hover:bg-white/5",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const Comp = as;
  return (
    <Comp
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </Comp>
  );
}

/* ------------------------------------------------------------------ */
/*  Section heading used by every section                              */
/* ------------------------------------------------------------------ */
export function SectionTitle({ title, subtitle, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className={`mb-12 md:mb-20 text-center ${className}`}
    >
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4">
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle ? (
        <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      ) : null}
      <div className="mt-6 mx-auto h-1 w-24 rounded-full bg-gradient" />
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Small helper: fade / slide in on scroll                            */
/* ------------------------------------------------------------------ */
export function Reveal({ children, delay = 0, y = 30, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
