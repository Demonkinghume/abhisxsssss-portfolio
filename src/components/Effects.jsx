import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { portfolio } from "../data/portfolio";

/* ------------------------------------------------------------------ */
/*  Intro loading screen (2 seconds)                                   */
/* ------------------------------------------------------------------ */
export function Loader({ onComplete }) {
  useEffect(() => {
    const t = setTimeout(onComplete, 2000);
    return () => clearTimeout(t);
  }, [onComplete]);

  const word =
    portfolio.seo.title.split("|")[0].trim() || portfolio.personal.logo;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-[#0a0a0a] flex items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-primary/20 blur-[50px] rounded-full" />
        <h1 className="text-5xl md:text-7xl font-heading font-bold text-gradient-animated relative z-10">
          {word}
        </h1>
      </motion.div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Glowing custom cursor (desktop only)                               */
/* ------------------------------------------------------------------ */
export function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e) => {
      const el = e.target;
      setHovering(
        window.getComputedStyle(el).cursor === "pointer" ||
          el.tagName === "BUTTON" ||
          el.tagName === "A"
      );
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-32 h-32 bg-primary/20 rounded-full blur-[30px] pointer-events-none z-[99]"
        animate={{ x: pos.x - 64, y: pos.y - 64, scale: hovering ? 1.5 : 1 }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full mix-blend-difference pointer-events-none z-[100]"
        animate={{ x: pos.x - 8, y: pos.y - 8, scale: hovering ? 0.5 : 1 }}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      />
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Back to top button                                                 */
/* ------------------------------------------------------------------ */
export function BackToTop() {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-8 right-8 w-12 h-12 rounded-full glass bg-primary/20 hover:bg-primary/40 flex items-center justify-center text-white z-50 backdrop-blur-xl border border-white/20 shadow-lg shadow-primary/20"
    >
      <ArrowUp className="w-6 h-6" />
    </motion.button>
  );
}
