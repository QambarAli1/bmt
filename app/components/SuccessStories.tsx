"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star, Heart } from "lucide-react";
import SectionTitle from "./SectionTitle";

const testimonials = [
  {
    name: "Fatima Bibi",
    role: "Mother of 3, Shigar Valley",
    type: "Patient",
    story:
      "My son needed O-negative blood urgently after a road accident. The hospital had none. I was desperate. I called Baltistan Medical Trust at midnight and within 2 hours, they found a donor and arranged the transfusion. My son is alive because of them. No words can describe my gratitude.",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=150&q=80",
    rating: 5,
    tag: "Emergency Blood",
  },
  {
    name: "Dr. Rizwan Ali",
    role: "Volunteer Doctor, Skardu",
    type: "Volunteer",
    story:
      "I've joined 12 medical camps organized by BMT. What amazes me is seeing villagers walk for hours to reach our camp — they've never been seen by a doctor. One elderly man in Khaplu thanked us with tears saying we were the first medical team to visit his village in 30 years. This work matters.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&q=80",
    rating: 5,
    tag: "Medical Camp",
  },
  {
    name: "Karim Hussain",
    role: "Blood Donor, Gilgit",
    type: "Donor",
    story:
      "I donated blood for the first time 5 years ago because BMT visited our university. When I saw that my blood type saved a pregnant woman in an emergency, I became a regular donor. I've donated 14 times now. It costs me 30 minutes but saves a life. Why would I not?",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    rating: 5,
    tag: "Blood Donor",
  },
  {
    name: "Amina Khatun",
    role: "Community Health Worker, Ghanche",
    type: "Community",
    story:
      "BMT trained me as a health worker for my village. Now I monitor pregnant women, refer emergencies, and educate on hygiene. Infant mortality in our village has dropped. My neighbors call me their doctor. I am not a doctor — but BMT gave me the knowledge to save lives.",
    image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=150&q=80",
    rating: 5,
    tag: "Rural Health",
  },
  {
    name: "Tariq Mirza",
    role: "Donor from Karachi",
    type: "Donor",
    story:
      "I'm from Karachi but my family is from Baltistan. I wanted to give back but didn't know how. BMT's transparent reporting showed me exactly where my money went — photos, names, impact numbers. I give monthly now and share it with my friends. This is how charity should work.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
    rating: 5,
    tag: "Monthly Donor",
  },
];

const impactCards = [
  {
    before: "3-hour drive to nearest hospital",
    after: "Medical camp in the village",
    tag: "Khaplu Village",
    image: "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?w=300&q=80",
  },
  {
    before: "No qualified blood donors registered",
    after: "200+ registered donors network",
    tag: "Skardu District",
    image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=300&q=80",
  },
  {
    before: "High infant & maternal mortality",
    after: "Trained health workers in 10 villages",
    tag: "Shigar Valley",
    image: "https://images.unsplash.com/photo-1576669801820-a9ab287ac2d1?w=300&q=80",
  },
];

export default function SuccessStories() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section id="stories" className="py-20 md:py-28 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle
          tag="Impact Stories"
          title="Lives Changed, "
          highlight="Hope Restored"
          description="Behind every number is a real human story. Here are some of the lives transformed through your support."
        />

        {/* Testimonial Carousel */}
        <div className="mb-16 relative">
          <div className="max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="relative p-8 md:p-10 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] shadow-xl"
              >
                <Quote className="absolute top-6 right-8 w-12 h-12 text-primary-100 dark:text-primary-900" />

                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-2 text-xs px-2.5 py-1 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-teal-400 font-medium border border-primary-100 dark:border-primary-800/50">
                    {testimonials[current].tag}
                  </span>
                </div>

                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6 text-base md:text-lg italic">
                  &ldquo;{testimonials[current].story}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary-200 dark:border-primary-700 flex-shrink-0">
                    <img
                      src={testimonials[current].image}
                      alt={testimonials[current].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white text-sm">
                      {testimonials[current].name}
                    </p>
                    <p className="text-xs text-slate-400">{testimonials[current].role}</p>
                  </div>
                  <div className="ml-auto">
                    <span className="text-xs px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-400 border border-teal-100 dark:border-teal-800/50 font-medium">
                      {testimonials[current].type}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-[var(--border-color)] bg-[var(--card-bg)] flex items-center justify-center hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:border-primary-300 transition-all"
              >
                <ChevronLeft className="w-4 h-4 text-slate-600 dark:text-slate-300" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`rounded-full transition-all ${
                      i === current ? "w-6 h-2.5 bg-primary-600" : "w-2.5 h-2.5 bg-slate-200 dark:bg-slate-700"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-[var(--border-color)] bg-[var(--card-bg)] flex items-center justify-center hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:border-primary-300 transition-all"
              >
                <ChevronRight className="w-4 h-4 text-slate-600 dark:text-slate-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Before / After Impact Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {impactCards.map((card, i) => (
            <motion.div
              key={card.tag}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-3xl overflow-hidden bg-[var(--card-bg)] border border-[var(--border-color)] card-hover"
            >
              <div className="relative h-36 overflow-hidden">
                <img src={card.image} alt={card.tag} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-3 left-3 text-white text-xs font-bold px-2.5 py-1 rounded-full bg-primary-700/80 backdrop-blur-sm">
                  {card.tag}
                </span>
              </div>
              <div className="p-5 space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-red-50 dark:bg-red-900/15 border border-red-100 dark:border-red-900/30">
                  <span className="text-red-500 font-bold text-xs flex-shrink-0 mt-0.5">BEFORE</span>
                  <p className="text-xs text-red-700 dark:text-red-400">{card.before}</p>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl bg-green-50 dark:bg-green-900/15 border border-green-100 dark:border-green-900/30">
                  <span className="text-green-600 font-bold text-xs flex-shrink-0 mt-0.5">AFTER</span>
                  <p className="text-xs text-green-700 dark:text-green-400">{card.after}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Be part of the next success story. Your donation creates real change.
          </p>
          <a
            href="/#donate"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-primary-700 to-teal-600 hover:from-primary-800 hover:to-teal-700 transition-all shadow-xl hover:-translate-y-1"
          >
            <Heart className="w-5 h-5 fill-white" />
            Make a Difference Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}
