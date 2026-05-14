"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Users, ChevronDown, Play, ArrowRight, Droplets } from "lucide-react";

const slides = [
  {
    id: 1,
    headline: "Saving Lives Through\nBlood Donation & Healthcare",
    subheadline:
      "Serving the brave people of Gilgit-Baltistan with free medical care, emergency blood support, and compassionate healthcare for all.",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1920&q=80",
    tag: "Healthcare for All",
  },
  {
    id: 2,
    headline: "Free Medical Camps\nAcross Baltistan",
    subheadline:
      "Bringing qualified doctors and medical supplies to remote mountain villages where healthcare is scarce.",
    image: "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?w=1920&q=80",
    tag: "Medical Outreach",
  },
  {
    id: 3,
    headline: "Emergency Blood\nDonation Network",
    subheadline:
      "A 24/7 verified blood donor network ensuring no life is lost due to blood shortage in Gilgit-Baltistan.",
    image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=1920&q=80",
    tag: "Blood Donation",
  },
];

const stats = [
  { value: "5,000+", label: "Blood Donors" },
  { value: "12,000+", label: "Patients Helped" },
  { value: "200+", label: "Medical Camps" },
  { value: "15+", label: "Years of Service" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((prev) => (prev + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">

      {/* Background images — CSS opacity crossfade, no JS-dependent opacity */}
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={slide.image}
            alt={slide.tag}
            fill
            className="object-cover object-center"
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/85 via-primary-800/75 to-teal-900/80" />

      {/* Mountain pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-32 mountain-pattern opacity-30" />

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center w-full">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            {/* Tag */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`tag-${current}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 text-white text-sm font-medium mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                {slides[current].tag}
              </motion.div>
            </AnimatePresence>

            {/* Headline */}
            <AnimatePresence mode="wait">
              <motion.h1
                key={`headline-${current}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 font-heading"
                style={{ whiteSpace: "pre-line" }}
              >
                {slides[current].headline}
              </motion.h1>
            </AnimatePresence>

            {/* Subheadline */}
            <AnimatePresence mode="wait">
              <motion.p
                key={`sub-${current}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-lg md:text-xl text-white/85 mb-10 max-w-2xl leading-relaxed"
              >
                {slides[current].subheadline}
              </motion.p>
            </AnimatePresence>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/blood-donation"
                className="group flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-red-600 hover:bg-red-700 transition-all shadow-xl hover:shadow-red-500/30 hover:-translate-y-1 pulse-emergency"
              >
                <Droplets className="w-5 h-5" />
                Donate Blood
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/#volunteer"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/30 transition-all hover:-translate-y-1"
              >
                <Users className="w-5 h-5" />
                Become Volunteer
              </Link>

              <Link
                href="/#donate"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-primary-900 bg-white hover:bg-primary-50 transition-all shadow-xl hover:-translate-y-1"
              >
                <Heart className="w-5 h-5 fill-red-500 text-red-500" />
                Donate Now
              </Link>

              <button
                onClick={() => setIsVideoOpen(true)}
                className="group flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-white/90 hover:text-white transition-all"
              >
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white/20 border border-white/30 group-hover:bg-white/30 transition-colors">
                  <Play className="w-4 h-4 fill-white ml-0.5" />
                </span>
                Watch Our Story
              </button>
            </motion.div>
          </motion.div>

          {/* Slide indicators */}
          <div className="flex items-center gap-2 mt-12">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`transition-all duration-300 rounded-full ${i === current ? "w-8 h-2 bg-white" : "w-2 h-2 bg-white/40 hover:bg-white/60"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 bg-black/30 backdrop-blur-md border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
              className="flex flex-col items-center justify-center py-5 px-4 border-r border-white/10 last:border-r-0"
            >
              <span className="text-2xl md:text-3xl font-extrabold text-white font-heading">
                {stat.value}
              </span>
              <span className="text-xs md:text-sm text-white/70 mt-0.5">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-28 right-8 z-10 hidden md:flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-white/50 text-xs rotate-90 tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ChevronDown className="w-5 h-5 text-white/50" />
        </motion.div>
      </motion.div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="w-full max-w-3xl aspect-video rounded-2xl overflow-hidden bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/i_of6Do76IU?si=h2X1xiEc2p0n-VZK&autoplay=1"
                title="Baltistan Medical Trust – Our Story"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
