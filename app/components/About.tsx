"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart, Award, Shield, Handshake } from "lucide-react";
import SectionTitle from "./SectionTitle";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { value: 5000, suffix: "+", label: "Blood Donors", color: "text-red-600", bg: "bg-red-50 dark:bg-red-900/20" },
  { value: 12000, suffix: "+", label: "Patients Helped", color: "text-primary-700", bg: "bg-primary-50 dark:bg-primary-900/20" },
  { value: 200, suffix: "+", label: "Medical Camps", color: "text-teal-600", bg: "bg-teal-50 dark:bg-teal-900/20" },
  { value: 500, suffix: "+", label: "Volunteers", color: "text-amber-600", bg: "bg-amber-50 dark:bg-amber-900/20" },
];

const values = [
  {
    icon: Heart,
    title: "Compassion",
    desc: "We treat every patient with dignity and care, regardless of their background or financial status.",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: Shield,
    title: "Integrity",
    desc: "Full transparency in operations and donations — every rupee goes where it's needed most.",
    color: "from-primary-600 to-primary-400",
  },
  {
    icon: Handshake,
    title: "Community",
    desc: "Built by the people of Baltistan, for the people of Baltistan — a true grassroots movement.",
    color: "from-teal-600 to-teal-400",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle
          tag="About Us"
          title="A Beacon of Hope in the "
          highlight="Heart of Karakoram"
          description="Baltistan Medical Trust was founded on the belief that every person in Gilgit-Baltistan — no matter how remote their village — deserves quality healthcare."
        />

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative p-8 rounded-3xl bg-gradient-to-br from-primary-700 to-primary-900 text-white overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-teal-400/10 translate-y-1/2 -translate-x-1/2" />
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center mb-5">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 font-heading">Our Mission</h3>
              <p className="text-white/80 leading-relaxed">
                To provide accessible, compassionate, and life-saving healthcare services to the
                underprivileged communities of Gilgit-Baltistan through blood donation drives,
                free medical camps, emergency healthcare, and rural health outreach programs —
                bridging the gap between need and service.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative p-8 rounded-3xl bg-gradient-to-br from-teal-600 to-teal-900 text-white overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-primary-400/10 translate-y-1/2 -translate-x-1/2" />
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center mb-5">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 font-heading">Our Vision</h3>
              <p className="text-white/80 leading-relaxed">
                A Gilgit-Baltistan where no mother dies in childbirth due to lack of blood, no
                child suffers from preventable illness, and every mountain community has access to
                dignified medical care — regardless of geography, income, or circumstance.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Our Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 text-xs font-semibold tracking-wider uppercase border border-amber-100 dark:border-amber-800/50 mb-6">
              <Award className="w-3.5 h-3.5" />
              Our Story
            </div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-5 font-heading leading-tight">
              Born from a Mountain Community&apos;s Cry for Help
            </h3>
            <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                In the high-altitude valleys of Gilgit-Baltistan, thousands die annually from
                preventable causes — not from lack of will, but from lack of access. Blood
                shortages, distant hospitals, and untrained healthcare workers claimed lives that
                didn&apos;t need to be lost.
              </p>
              <p>
                Baltistan Medical Trust was founded by a group of local volunteers, doctors, and
                community leaders who refused to accept this reality. What started as a single
                blood donation drive in Skardu has grown into one of Baltistan&apos;s most trusted
                healthcare organizations.
              </p>
              <p>
                Today, we operate across 15+ districts, with hundreds of trained volunteers, a
                24/7 emergency blood network, and regular free medical camps reaching villages
                that had never seen a doctor before.
              </p>
            </div>
            <div className="mt-8 flex gap-4">
              <a
                href="/about"
                className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-primary-700 to-primary-600 hover:from-primary-800 hover:to-primary-700 transition-all shadow-lg hover:-translate-y-0.5"
              >
                Read Full Story
              </a>
              <a
                href="/#donate"
                className="px-5 py-2.5 rounded-xl text-sm font-semibold text-primary-700 dark:text-teal-400 border border-primary-200 dark:border-primary-700 hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-all"
              >
                Support the Mission
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80"
                alt="Medical team in Baltistan"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent" />
            </div>
            {/* Floating card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 p-5 rounded-2xl bg-[var(--card-bg)] shadow-xl border border-[var(--border-color)]"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-900/30 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-red-500 fill-red-500" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white text-sm">Est. 2009</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Serving Baltistan</p>
                </div>
              </div>
            </motion.div>
            {/* Second floating card */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-6 -right-6 p-4 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-700 shadow-xl text-white"
            >
              <p className="text-2xl font-extrabold font-heading">15+</p>
              <p className="text-xs text-teal-100">Districts Covered</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`p-6 rounded-2xl text-center card-hover border border-[var(--border-color)] bg-[var(--card-bg)]`}
            >
              <p className={`text-4xl font-extrabold font-heading mb-1 ${stat.color}`}>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((val, i) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] card-hover"
            >
              <div
                className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${val.color} flex items-center justify-center mb-4 shadow-lg`}
              >
                <val.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 font-heading">
                {val.title}
              </h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
