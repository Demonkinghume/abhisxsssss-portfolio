import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { portfolio } from "../data/portfolio";
import { Button } from "./ui";

export default function Navbar() {
  const { nav, personal } = portfolio;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      // active section detection
      let current = "";
      nav.links.forEach((l) => {
        const el = document.querySelector(l.href);
        if (el && el.getBoundingClientRect().top <= 140) current = l.href;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [nav.links]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (e, href) => {
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(href);
    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 80,
        behavior: "smooth",
      });
    }
  };

  const openBookNow = () => {
    setOpen(false);
    window.dispatchEvent(new Event("open-book-now"));
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-black/50 backdrop-blur-xl border-b border-white/10"
          : "py-5 bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-2xl font-bold font-heading tracking-tight"
        >
          <span className="text-gradient-animated">{personal.logo}</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center space-x-8">
          {nav.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => go(e, link.href)}
              className={`group relative text-sm font-medium transition-colors ${
                active === link.href ? "text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-gradient transition-all duration-300 group-hover:w-full ${
                  active === link.href ? "w-full" : "w-0"
                }`}
              />
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            as="a"
            href={nav.ctaHref}
            onClick={(e) => go(e, nav.ctaHref)}
            variant="outline"
            size="sm"
          >
            {nav.ctaLabel}
          </Button>
          <Button size="sm" onClick={openBookNow}>
            {nav.bookNowLabel}
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2 -mr-2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col space-y-4">
              {nav.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => go(e, link.href)}
                  className="text-gray-300 hover:text-white text-lg font-medium py-1"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-2">
                <Button
                  as="a"
                  href={nav.ctaHref}
                  onClick={(e) => go(e, nav.ctaHref)}
                  variant="outline"
                >
                  {nav.ctaLabel}
                </Button>
                <Button onClick={openBookNow}>{nav.bookNowLabel}</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
