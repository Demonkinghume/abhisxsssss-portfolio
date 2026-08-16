import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";

import { portfolio } from "./data/portfolio";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Clients from "./components/Clients";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BookNowModal from "./components/BookNowModal";
import Admin from "./components/Admin";
import { BackToTop, CustomCursor, Loader } from "./components/Effects";

function setMeta(attr: string, key: string, content: string) {
  let tag = document.querySelector(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [showTop, setShowTop] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const { seo } = portfolio;
    document.title = seo.title;
    setMeta("name", "description", seo.description);
    setMeta("property", "og:title", seo.ogTitle || seo.title);
    setMeta("property", "og:description", seo.ogDescription || seo.description);

    if (seo.favicon) {
      let link = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
      if (!link) {
        link = document.createElement("link");
        link.rel = "icon";
        document.head.appendChild(link);
      }
      link.href = seo.favicon;
    }

    const onHash = () => setIsAdmin(window.location.hash === "#admin");
    onHash();
    window.addEventListener("hashchange", onHash);

    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("hashchange", onHash);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <div className="hidden md:block">
            <CustomCursor />
          </div>

          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-gradient origin-left z-[60]"
            style={{ scaleX }}
          />

          <Navbar />

          <main>
            {isAdmin ? (
              <Admin />
            ) : (
              <>
                <Hero />
                <Stats />
                <Skills />
                <Portfolio />
                <Clients />
                <Testimonials />
                <Contact />
              </>
            )}
          </main>

          <Footer />
          <BookNowModal />

          <AnimatePresence>{showTop && <BackToTop />}</AnimatePresence>
        </>
      )}
    </>
  );
}
