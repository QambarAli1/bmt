"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, Phone, Mail, MapPin, Globe, MessageCircle, Share2, Video, ArrowRight, CheckCircle, Droplets } from "lucide-react";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Blood Donation", href: "/blood-donation" },
  { label: "Medical Services", href: "/#services" },
  { label: "Donate", href: "/#donate" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Events", href: "/#events" },
  { label: "Contact", href: "/contact" },
];

const programs = [
  { label: "Free Medical Camps", href: "/#services" },
  { label: "Emergency Blood Network", href: "/blood-donation" },
  { label: "Ambulance Services", href: "/#services" },
  { label: "Rural Health Workers", href: "/#services" },
  { label: "Mother & Child Care", href: "/#services" },
  { label: "Disaster Relief", href: "/#services" },
];

const socials = [
  { icon: Globe, label: "Facebook", href: "#", color: "hover:bg-blue-600" },
  { icon: Share2, label: "Instagram", href: "#", color: "hover:bg-pink-600" },
  { icon: MessageCircle, label: "Twitter", href: "#", color: "hover:bg-sky-500" },
  { icon: Video, label: "YouTube", href: "#", color: "hover:bg-red-600" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-primary-950 dark:bg-[#060c1a] text-white">
      {/* Newsletter / CTA band */}
      <div className="bg-gradient-to-r from-teal-600 to-primary-700">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold font-heading">Stay Updated on Our Work</h3>
            <p className="text-white/75 text-sm mt-1">
              Get impact reports, event announcements, and healthcare updates from Baltistan.
            </p>
          </div>
          <form onSubmit={handleSubscribe} className="flex gap-2 w-full md:w-auto">
            {subscribed ? (
              <div className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/20 text-white text-sm font-medium">
                <CheckCircle className="w-4 h-4" />
                Subscribed! JazakAllah Khair
              </div>
            ) : (
              <>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="flex-1 md:w-64 px-4 py-2.5 rounded-xl bg-white/15 border border-white/25 text-white placeholder-white/50 text-sm focus:outline-none focus:bg-white/25 transition-all"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-white text-primary-800 font-bold text-sm hover:bg-primary-50 transition-all whitespace-nowrap"
                >
                  Subscribe
                </button>
              </>
            )}
          </form>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary-500 to-teal-500 flex items-center justify-center shadow-lg">
                <Heart className="w-6 h-6 text-white fill-white" />
              </div>
              <div>
                <p className="font-bold text-base font-heading">Baltistan</p>
                <p className="text-xs text-teal-400 font-medium">Medical Trust</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              A non-profit healthcare organization serving the people of Gilgit-Baltistan, Pakistan,
              with free medical care, blood donation support, and emergency healthcare since 2009.
            </p>

            <div className="space-y-2.5">
              <a href="tel:03022496566" className="flex items-center gap-2.5 text-sm text-white/70 hover:text-white transition-colors group">
                <Phone className="w-4 h-4 text-red-400" />
                <span>0302-2496566 <span className="text-red-400 text-xs">(Cell)</span></span>
              </a>
              <a href="https://wa.me/923463524295" className="flex items-center gap-2.5 text-sm text-white/70 hover:text-white transition-colors group">
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>0346-3524295 <span className="text-emerald-400 text-xs">(WhatsApp)</span></span>
              </a>
              <a href="mailto:baltistanmedicaltrust@gmail.com" className="flex items-center gap-2.5 text-sm text-white/70 hover:text-white transition-colors break-all">
                <Mail className="w-4 h-4 text-teal-400 flex-shrink-0" />
                baltistanmedicaltrust@gmail.com
              </a>
              <a href="https://www.baltistanmedicaltrust.com" className="flex items-center gap-2.5 text-sm text-white/70 hover:text-white transition-colors">
                <Globe className="w-4 h-4 text-primary-300" />
                www.baltistanmedicaltrust.com
              </a>
              <div className="flex items-start gap-2.5 text-sm text-white/70">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                BMT Head Office, LG 2, Plot # M-02, Jinnah Complex, Near Taj Complex, M.A. Jinnah Road, Karachi, Pakistan
              </div>
            </div>

            <div className="flex gap-2 mt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className={`w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all hover:-translate-y-0.5 ${s.color}`}
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm font-heading mb-5 text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-teal-500 group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold text-sm font-heading mb-5 text-white uppercase tracking-wider">
              Our Programs
            </h4>
            <ul className="space-y-2.5">
              {programs.map((p) => (
                <li key={p.label}>
                  <Link
                    href={p.href}
                    className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-teal-500 group-hover:translate-x-1 transition-transform" />
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Donation CTA */}
          <div>
            <h4 className="font-bold text-sm font-heading mb-5 text-white uppercase tracking-wider">
              Support Our Mission
            </h4>
            <div className="space-y-3">
              <a
                href="/#donate"
                className="flex items-center gap-2 w-full px-4 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-teal-600 text-white font-semibold text-sm hover:from-primary-700 hover:to-teal-700 transition-all shadow-lg hover:-translate-y-0.5"
              >
                <Heart className="w-4 h-4 fill-white" />
                Donate Now
              </a>
              <a
                href="/blood-donation"
                className="flex items-center gap-2 w-full px-4 py-3 rounded-xl bg-red-600/80 border border-red-500/30 text-white font-semibold text-sm hover:bg-red-600 transition-all hover:-translate-y-0.5"
              >
                <Droplets className="w-4 h-4" />
                Donate Blood
              </a>
              <a
                href="/#volunteer"
                className="flex items-center gap-2 w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-semibold text-sm hover:bg-white/15 transition-all"
              >
                Become a Volunteer
              </a>
            </div>

            {/* NGO Registration */}
            <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-xs font-bold text-white mb-1">Registration Info</p>
              <p className="text-xs text-white/50">Reg. No: NGO/GB/2009/0042</p>
              <p className="text-xs text-white/50">FBR Tax Exemption: NGO/2010/FBR</p>
              <p className="text-xs text-white/50">Zakat & Sadaqah eligible</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>
            © {new Date().getFullYear()} Baltistan Medical Trust. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link href="/transparency" className="hover:text-white transition-colors">Transparency Report</Link>
          </div>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-500 fill-red-500 inline" /> for Baltistan
          </p>
        </div>
      </div>
    </footer>
  );
}
