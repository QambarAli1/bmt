"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Users, ArrowRight, Tent } from "lucide-react";
import SectionTitle from "./SectionTitle";

const events = [
  {
    title: "Winter Blood Drive – Skardu",
    date: "December 15, 2025",
    time: "9:00 AM – 4:00 PM",
    location: "DHQ Hospital, Skardu",
    type: "Blood Drive",
    spotsLeft: 45,
    totalSpots: 100,
    description:
      "Join our biggest blood drive of the year ahead of winter. All blood groups needed. Refreshments and certificates provided.",
    color: "from-red-600 to-red-400",
    tag: "Blood Drive",
    image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=400&q=80",
    urgent: true,
  },
  {
    title: "Free Medical Camp – Khaplu",
    date: "December 22, 2025",
    time: "8:00 AM – 5:00 PM",
    location: "Khaplu Main Market",
    type: "Medical Camp",
    spotsLeft: null,
    totalSpots: null,
    description:
      "Multi-specialist camp with cardiologist, gynecologist, eye specialist, and general physicians. Free medicines provided.",
    color: "from-primary-700 to-primary-500",
    tag: "Medical Camp",
    image: "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?w=400&q=80",
    urgent: false,
  },
  {
    title: "Volunteer Training Workshop",
    date: "January 5, 2026",
    time: "10:00 AM – 2:00 PM",
    location: "BMT Office, Gilgit",
    type: "Training",
    spotsLeft: 12,
    totalSpots: 30,
    description:
      "First aid, CPR, and patient handling training for new volunteers. Certificate of completion provided.",
    color: "from-teal-600 to-teal-400",
    tag: "Training",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80",
    urgent: false,
  },
  {
    title: "Annual Fundraising Gala",
    date: "January 20, 2026",
    time: "7:00 PM – 10:00 PM",
    location: "Serena Hotel, Islamabad",
    type: "Fundraiser",
    spotsLeft: 30,
    totalSpots: 150,
    description:
      "An evening of impact stories, live auctions, and community celebration. Help us raise funds for the next phase of rural healthcare.",
    color: "from-amber-600 to-orange-500",
    tag: "Fundraiser",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&q=80",
    urgent: false,
  },
  {
    title: "Mother & Child Health Camp – Shigar",
    date: "February 2, 2026",
    time: "9:00 AM – 3:00 PM",
    location: "Government School, Shigar",
    type: "Medical Camp",
    spotsLeft: null,
    totalSpots: null,
    description:
      "Dedicated camp for women and children — prenatal checkups, child immunizations, and nutrition counseling.",
    color: "from-pink-600 to-rose-400",
    tag: "Mother & Child",
    image: "https://images.unsplash.com/photo-1576669801820-a9ab287ac2d1?w=400&q=80",
    urgent: false,
  },
  {
    title: "Healthcare Awareness Drive – Gilgit",
    date: "February 15, 2026",
    time: "9:00 AM – 1:00 PM",
    location: "Aga Khan University, Gilgit",
    type: "Awareness",
    spotsLeft: null,
    totalSpots: null,
    description:
      "Blood pressure screening, diabetes testing, eye checkups, and health awareness talks for the public.",
    color: "from-slate-600 to-slate-400",
    tag: "Awareness",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=400&q=80",
    urgent: false,
  },
];

const tagColors: Record<string, string> = {
  "Blood Drive": "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 border-red-200 dark:border-red-800/50",
  "Medical Camp": "bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-teal-400 border-primary-100 dark:border-primary-800/50",
  Training: "bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-400 border-teal-100 dark:border-teal-800/50",
  Fundraiser: "bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 border-amber-100 dark:border-amber-800/50",
  "Mother & Child": "bg-pink-50 dark:bg-pink-900/20 text-pink-700 dark:text-pink-400 border-pink-100 dark:border-pink-800/50",
  Awareness: "bg-slate-50 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700/50",
};

export default function Events() {
  return (
    <section id="events" className="py-20 md:py-28 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle
          tag="Events & Campaigns"
          title="Join Us in "
          highlight="Making a Difference"
          description="From blood drives to medical camps, there are many ways to get involved and contribute to healthcare in Baltistan."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="group rounded-3xl overflow-hidden bg-[var(--card-bg)] border border-[var(--border-color)] card-hover flex flex-col"
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                {event.urgent && (
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-red-600 text-white text-xs font-bold">
                    REGISTER NOW
                  </div>
                )}
                {/* Date badge */}
                <div className="absolute top-3 right-3 flex flex-col items-center p-2 rounded-xl bg-white dark:bg-slate-800 shadow-lg text-center min-w-[3rem]">
                  <span className="text-[10px] font-bold text-primary-600 dark:text-teal-400 uppercase tracking-wide leading-none">
                    {event.date.split(" ")[0].slice(0, 3)}
                  </span>
                  <span className="text-xl font-extrabold text-slate-900 dark:text-white font-heading leading-none">
                    {event.date.split(" ")[1].replace(",", "")}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${tagColors[event.tag]}`}>
                    {event.tag}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2 font-heading text-sm leading-snug">
                  {event.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4 flex-1">
                  {event.description}
                </p>

                {/* Meta */}
                <div className="space-y-1.5 mb-4">
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <Clock className="w-3.5 h-3.5 flex-shrink-0" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                    {event.location}
                  </div>
                  {event.spotsLeft && (
                    <div className="flex items-center gap-2 text-xs text-amber-600 dark:text-amber-400">
                      <Users className="w-3.5 h-3.5 flex-shrink-0" />
                      {event.spotsLeft} spots left of {event.totalSpots}
                    </div>
                  )}
                </div>

                {/* Register button */}
                <button className="flex items-center justify-between w-full px-4 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-primary-50 to-teal-50 dark:from-primary-900/30 dark:to-teal-900/30 text-primary-700 dark:text-teal-400 border border-primary-100 dark:border-primary-800/50 hover:from-primary-100 hover:to-teal-100 dark:hover:from-primary-900/50 dark:hover:to-teal-900/50 transition-all group-hover:shadow-sm">
                  Register / Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all events CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">
            Want to organize a blood camp or medical outreach in your area?
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-primary-700 to-teal-600 hover:from-primary-800 hover:to-teal-700 transition-all shadow-lg hover:-translate-y-0.5"
          >
            <Tent className="w-4 h-4" />
            Request a Camp in Your Area
          </a>
        </motion.div>
      </div>
    </section>
  );
}
