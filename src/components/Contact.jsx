import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, Mail, MapPin, Phone } from "lucide-react";
import { portfolio } from "../data/portfolio";
import { Button, SectionTitle } from "./ui";

export default function Contact() {
  const { contact } = portfolio;
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const copyDiscord = () => {
    navigator.clipboard.writeText(contact.discord);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    /* --- simple validation --- */
    if (!name || !email || !message) {
      setStatus({ state: "error", message: "Please fill in every field." });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      setStatus({ state: "error", message: "Please enter a valid email address." });
      return;
    }

    /* --- Option A : an endpoint is configured (Formspree / Getform / ...) --- */
    if (contact.form.endpoint) {
      try {
        setStatus({ state: "sending", message: "" });
        const res = await fetch(contact.form.endpoint, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: data,
        });
        if (!res.ok) throw new Error("bad response");
        form.reset();
        setStatus({ state: "success", message: contact.form.successMessage });
      } catch {
        setStatus({ state: "error", message: contact.form.errorMessage });
      }
      return;
    }

    /* --- Option B : no service configured -> open the mail app --- */
    const subject = encodeURIComponent(`New Hire Me Entry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nProject Details:\n${message}`
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setStatus({ state: "success", message: contact.form.successMessage });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[150px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-secondary/20 blur-[150px] rounded-full -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl">
        <SectionTitle title={contact.title} subtitle={contact.subtitle} />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 max-w-6xl mx-auto">
          {/* ---------------- Details ---------------- */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl"
            >
              <h3 className="text-2xl font-bold font-heading mb-6">
                {contact.detailsTitle}
              </h3>

              <div className="space-y-6">
                {/* Email */}
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-4 text-gray-300 hover:text-white group"
                >
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm text-gray-500 mb-1">Email</div>
                    <div className="font-medium truncate">{contact.email}</div>
                  </div>
                </a>

                {/* Discord (click to copy) */}
                <button
                  onClick={copyDiscord}
                  className="flex items-center gap-4 text-gray-300 hover:text-white group w-full text-left"
                >
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#5865F2]/20 transition-colors relative shrink-0">
                    <span className="font-bold text-[#5865F2]">D</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-gray-500 mb-1 flex items-center justify-between">
                      Discord
                      {copied ? (
                        <span className="text-xs text-green-400 flex items-center gap-1">
                          <Check className="w-3 h-3" /> Copied
                        </span>
                      ) : (
                        <span className="text-xs text-primary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Copy className="w-3 h-3" /> Copy
                        </span>
                      )}
                    </div>
                    <div className="font-medium truncate">{contact.discord}</div>
                  </div>
                </button>

                {/* Phone */}
                {contact.phone ? (
                  <a
                    href={`tel:${contact.phone}`}
                    className="flex items-center gap-4 text-gray-300 hover:text-white group"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Phone</div>
                      <div className="font-medium">{contact.phone}</div>
                    </div>
                  </a>
                ) : null}

                {/* Location */}
                {contact.location ? (
                  <div className="flex items-center gap-4 text-gray-300 group">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Location</div>
                      <div className="font-medium">{contact.location}</div>
                    </div>
                  </div>
                ) : null}
              </div>
            </motion.div>
          </div>

          {/* ---------------- Form ---------------- */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass p-8 md:p-12 rounded-3xl relative"
          >
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-400 ml-1 block"
                  >
                    {contact.form.nameLabel}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-white/10 transition-all text-white"
                    placeholder={contact.form.namePlaceholder}
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-400 ml-1 block"
                  >
                    {contact.form.emailLabel}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    autoComplete="email"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-white/10 transition-all text-white"
                    placeholder={contact.form.emailPlaceholder}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-400 ml-1 block"
                >
                  {contact.form.messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-white/10 transition-all text-white resize-none"
                  placeholder={contact.form.messagePlaceholder}
                />
              </div>

              {status.state === "error" && (
                <p className="text-sm text-red-400" role="alert">
                  {status.message}
                </p>
              )}
              {status.state === "success" && (
                <p className="text-sm text-green-400" role="status">
                  {status.message}
                </p>
              )}

              <Button
                type="submit"
                size="lg"
                className="w-full sm:w-auto"
                disabled={status.state === "sending"}
              >
                {status.state === "sending" ? "Sending..." : contact.form.submitLabel}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
