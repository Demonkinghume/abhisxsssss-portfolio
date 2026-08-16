import { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Play, X } from "lucide-react";
import { portfolio } from "../data/portfolio";
import { Button, SectionTitle } from "./ui";

/* Automatically decide whether a file is a video or an image */
const VIDEO_EXT = [".mp4", ".webm", ".ogg", ".mov"];
export const isVideo = (src = "") =>
  VIDEO_EXT.some((ext) => src.toLowerCase().split("?")[0].endsWith(ext));

/* ------------------------------------------------------------------ */
/*  Thumbnail that renders <img> or <video> depending on the file      */
/* ------------------------------------------------------------------ */
function ProjectMedia({ src, alt, className = "" }) {
  const ref = useRef(null);

  if (!src) {
    return (
      <div
        className={`${className} bg-[#120B1A] flex items-center justify-center`}
        aria-label={alt}
      >
        <Play className="w-10 h-10 text-white/20" />
      </div>
    );
  }

  if (isVideo(src)) {
    return (
      <video
        ref={ref}
        src={src}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={alt}
        onMouseEnter={() => ref.current?.play()}
        onMouseLeave={() => {
          if (ref.current) {
            ref.current.pause();
            ref.current.currentTime = 0;
          }
        }}
        className={className}
      />
    );
  }

  /* YouTube thumbnails: fall back to hqdefault when maxresdefault is missing */
  const onError = (e) => {
    const img = e.currentTarget;
    if (img.src.includes("maxresdefault")) {
      img.src = img.src.replace("maxresdefault", "hqdefault");
    }
  };

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={onError}
      className={className}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  Section                                                            */
/* ------------------------------------------------------------------ */
export default function Portfolio() {
  const { projects, portfolioSection } = portfolio;
  const [filter, setFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [openProject, setOpenProject] = useState(null);

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.category).filter(Boolean)))],
    [projects]
  );

  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter, projects]
  );

  const visible = showAll ? filtered : filtered.slice(0, portfolioSection.initialCount);

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      <div className="absolute top-[-20%] right-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl">
        <SectionTitle
          title={portfolioSection.title}
          subtitle={portfolioSection.subtitle}
        />

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12 hide-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat);
                setShowAll(false);
              }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                filter === cat
                  ? "bg-gradient text-white border-transparent shadow-lg shadow-primary/30"
                  : "glass text-gray-400 hover:text-white hover:bg-white/10 border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((project, i) => (
              <motion.article
                layout
                key={project.title + i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
                onClick={() => setOpenProject(project)}
                className="group cursor-pointer rounded-2xl overflow-hidden bg-[#111111] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <ProjectMedia
                    src={project.media}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                  {/* Play overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                    <div className="w-16 h-16 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300">
                      <Play className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Category badge */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] md:text-xs font-semibold uppercase tracking-wider glass backdrop-blur-xl text-white border border-white/20">
                    {project.category}
                  </span>
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold font-heading mb-2 text-white group-hover:text-primary transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {(project.technologies || []).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-md text-xs font-medium bg-white/5 border border-white/10 text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length > portfolioSection.initialCount && (
          <div className="mt-16 flex justify-center">
            <Button size="lg" onClick={() => setShowAll((v) => !v)}>
              {showAll ? "Show Less" : portfolioSection.viewAllLabel}
            </Button>
          </div>
        )}
      </div>

      {/* -------------------- Project popup -------------------- */}
      <AnimatePresence>
        {openProject && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpenProject(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-[#111111] border border-white/10 rounded-3xl shadow-2xl max-w-4xl w-full overflow-hidden"
              role="dialog"
              aria-modal="true"
              aria-label={openProject.title}
            >
              <button
                onClick={() => setOpenProject(null)}
                aria-label="Close"
                className="absolute top-4 right-4 z-20 text-gray-400 hover:text-white transition-colors bg-black/50 rounded-full p-2"
              >
                <X size={22} />
              </button>

              <div className="aspect-video w-full bg-black">
                {openProject.videoUrl ? (
                  <iframe
                    src={openProject.videoUrl}
                    title={openProject.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                ) : isVideo(openProject.media) ? (
                  <video
                    src={openProject.media}
                    controls
                    autoPlay
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <img
                    src={openProject.media}
                    alt={openProject.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              <div className="p-8">
                <div className="text-xs uppercase tracking-widest text-primary mb-2">
                  {openProject.category}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold font-heading mb-3">
                  {openProject.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {openProject.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {(openProject.technologies || []).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-md text-xs font-medium bg-white/5 border border-white/10 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {(openProject.liveUrl || openProject.githubUrl) && (
                  <div className="flex flex-wrap gap-4 mt-8">
                    {openProject.liveUrl && (
                      <Button as="a" href={openProject.liveUrl} target="_blank" rel="noopener noreferrer">
                        View Live
                      </Button>
                    )}
                    {openProject.githubUrl && (
                      <Button
                        as="a"
                        variant="outline"
                        href={openProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Source Code
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
