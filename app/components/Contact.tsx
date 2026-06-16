"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone, Mail, MapPin, MessageCircle, Send, CheckCircle,
  Globe, Share2, Video, MessageSquare,
} from "lucide-react";
import SectionTitle from "./SectionTitle";

const contactInfo = [
  {
    icon: Phone,
    label: "Head Office (Cell)",
    value: "0302-2496566",
    sub: "Blood & medical assistance",
    href: "tel:03022496566",
    color: "from-red-500 to-red-400",
    urgent: true,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp Helpline",
    value: "0346-3524295",
    sub: "Quick response via WhatsApp",
    href: "https://wa.me/923463524295",
    color: "from-emerald-600 to-green-500",
  },
  {
    icon: Phone,
    label: "BMT SMS Service",
    value: "0346-3163089",
    sub: "Send us an SMS anytime",
    href: "sms:03463163089",
    color: "from-primary-600 to-primary-400",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "baltistanmedicaltrust@gmail.com",
    sub: "We respond within 24 hours",
    href: "mailto:baltistanmedicaltrust@gmail.com",
    color: "from-teal-600 to-teal-400",
  },
  {
    icon: MapPin,
    label: "Head Office",
    value: "M.A. Jinnah Road, Karachi",
    sub: "LG 2, Plot # M-02, Jinnah Complex, Near Taj Complex",
    href: "#",
    color: "from-amber-500 to-orange-400",
  },
  {
    icon: Globe,
    label: "Website",
    value: "baltistanmedicaltrust.com",
    sub: "Visit us online",
    href: "https://www.baltistanmedicaltrust.com",
    color: "from-slate-500 to-slate-400",
  },
];

const socials = [
  { icon: Globe, label: "Facebook", href: "#", color: "hover:text-blue-600" },
  { icon: Share2, label: "Instagram", href: "#", color: "hover:text-pink-600" },
  { icon: MessageSquare, label: "Twitter", href: "#", color: "hover:text-sky-500" },
  { icon: Video, label: "YouTube", href: "#", color: "hover:text-red-600" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[var(--section-alt)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle
          tag="Contact Us"
          title="We&apos;d Love to "
          highlight="Hear from You"
          description="Whether you need blood, want to volunteer, donate, or partner — reach out and we&apos;ll respond promptly."
        />

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact info */}
          <div>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {contactInfo.map((info, i) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className={`flex items-start gap-3 p-4 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] card-hover ${
                    info.urgent ? "ring-2 ring-red-200 dark:ring-red-900/40" : ""
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0 shadow`}
                  >
                    <info.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wide mb-0.5">
                      {info.label}
                    </p>
                    <p className="font-semibold text-slate-900 dark:text-white text-sm truncate">
                      {info.value}
                    </p>
                    <p className="text-xs text-slate-400 leading-tight mt-0.5">{info.sub}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social links */}
            <div className="p-5 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] mb-6">
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-4">
                Follow Our Work
              </p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className={`w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 transition-all hover:-translate-y-1 ${s.color}`}
                  >
                    <s.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/923463524295"
              className="flex items-center gap-3 p-4 rounded-2xl bg-emerald-600 text-white hover:bg-emerald-700 transition-all shadow-lg hover:-translate-y-0.5"
            >
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-sm">Chat on WhatsApp</p>
                <p className="text-emerald-100 text-xs">Quick responses for urgent queries</p>
              </div>
            </a>

            {/* Map placeholder */}
            <div className="mt-6 h-48 rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-700 relative">
              <iframe
                src="https://www.google.com/maps?q=M.A.+Jinnah+Road,+Karachi,+Pakistan&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Baltistan Medical Trust Location"
              />
            </div>
          </div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 md:p-8 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] shadow-xl"
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 font-heading">
              Send Us a Message
            </h3>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-5 p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 flex items-start gap-3"
              >
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-green-700 dark:text-green-400 text-sm">
                    Message sent successfully!
                  </p>
                  <p className="text-xs text-green-600 dark:text-green-500 mt-0.5">
                    Our team will respond within 24 hours. JazakAllah Khair.
                  </p>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1.5">
                    Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--background)] text-slate-900 dark:text-white text-sm focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1.5">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--background)] text-slate-900 dark:text-white text-sm focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                    placeholder="+92 ..."
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1.5">
                  Email Address *
                </label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--background)] text-slate-900 dark:text-white text-sm focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1.5">
                  Subject *
                </label>
                <select
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--background)] text-slate-900 dark:text-white text-sm focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                >
                  <option value="">Select a subject</option>
                  <option>Blood Request / Emergency</option>
                  <option>Volunteer Application</option>
                  <option>Donation Inquiry</option>
                  <option>Request a Medical Camp</option>
                  <option>Partnership / Collaboration</option>
                  <option>Media / Press</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1.5">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--background)] text-slate-900 dark:text-white text-sm focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-primary-700 to-teal-600 hover:from-primary-800 hover:to-teal-700 transition-all shadow-lg hover:shadow-primary-500/25 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
