import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, Phone, X } from "lucide-react";
import { portfolio } from "../data/portfolio";
import {
  DiscordIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "./SocialIcons";

export default function BookNowModal() {
  const [open, setOpen] = useState(false);
  const { contact, socialLinks, handles } = portfolio;

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("open-book-now", handler);
    return () => window.removeEventListener("open-book-now", handler);
  }, []);

  useEffect(() => {
    const esc = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            role="dialog"
            aria-modal="true"
            aria-label="Book a project"
            className="relative bg-[#111111] border border-white/10 p-8 rounded-3xl shadow-2xl max-w-md w-full overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-[80px]" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-secondary/20 rounded-full blur-[80px]" />

            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <div className="relative z-10">
              <h2 className="text-3xl font-bold font-heading mb-2 text-white">
                Let's Talk
              </h2>
              <p className="text-gray-400 mb-8">
                Reach out directly on any of the platforms below to book a project.
              </p>

              <div className="space-y-4">
                {/* Phone — only shown when a phone number is set in the config */}
                {contact.phone ? (
                  <a
                    href={`tel:${contact.phone}`}
                    className="flex items-center p-4 rounded-xl glass hover:bg-white/5 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Phone</div>
                      <div className="text-lg font-medium text-white">
                        {contact.phone}
                      </div>
                    </div>
                  </a>
                ) : null}

                {/* Email */}
                {contact.email ? (
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center p-4 rounded-xl glass hover:bg-white/5 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6 text-purple-400" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm text-gray-400">Email</div>
                      <div className="text-lg font-medium text-white truncate">
                        {contact.email}
                      </div>
                    </div>
                  </a>
                ) : null}

                {/* YouTube */}
                {socialLinks.youtube ? (
                  <a
                    href={socialLinks.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 rounded-xl glass hover:bg-white/5 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <YoutubeIcon className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">YouTube</div>
                      <div className="text-lg font-medium text-white">
                        {handles.youtube}
                      </div>
                    </div>
                  </a>
                ) : null}

                {/* Instagram */}
                {socialLinks.instagram ? (
                  <a
                    href={socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 rounded-xl glass hover:bg-white/5 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-pink-500/20 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <InstagramIcon className="w-6 h-6 text-pink-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Instagram</div>
                      <div className="text-lg font-medium text-white">
                        {handles.instagram}
                      </div>
                    </div>
                  </a>
                ) : null}

                {/* Discord */}
                <div className="flex items-center p-4 rounded-xl glass group cursor-default">
                  <div className="w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform cursor-text">
                    <DiscordIcon className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Discord</div>
                    <div className="text-lg font-medium text-white select-all">
                      {contact.discord}
                    </div>
                  </div>
                </div>

                {/* Twitter */}
                {socialLinks.twitter ? (
                  <a
                    href={socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 rounded-xl glass hover:bg-white/5 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <TwitterIcon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Twitter</div>
                      <div className="text-lg font-medium text-white">
                        {handles.twitter}
                      </div>
                    </div>
                  </a>
                ) : null}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
