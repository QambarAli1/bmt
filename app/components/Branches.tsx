"use client";

import { motion } from "framer-motion";
import {
  Droplets, HeartHandshake, GraduationCap, Megaphone, Users, ShieldCheck,
  Network, Building2, UserCog, ClipboardList,
} from "lucide-react";
import SectionTitle from "./SectionTitle";

const objectives = [
  {
    icon: Droplets,
    title: "Blood Bank Accounts",
    desc: "Opening and maintaining blood accounts at major blood banks so patients always have access.",
    color: "from-red-600 to-red-400",
  },
  {
    icon: HeartHandshake,
    title: "Blood Donation Facility",
    desc: "Providing the community with blood donation facilities to save lives across Pakistan.",
    color: "from-rose-600 to-pink-400",
  },
  {
    icon: GraduationCap,
    title: "Training Courses",
    desc: "Arranging and managing training courses for various medical and organisational objectives.",
    color: "from-primary-700 to-primary-500",
  },
  {
    icon: Megaphone,
    title: "Awareness Seminars",
    desc: "Holding seminars to spread essential knowledge and awareness about health and blood donation.",
    color: "from-amber-600 to-orange-500",
  },
  {
    icon: Users,
    title: "Support for Remote Areas",
    desc: "Guiding and assisting patients from underserved and far-flung areas of the country.",
    color: "from-teal-600 to-teal-400",
  },
  {
    icon: ShieldCheck,
    title: "Human Welfare",
    desc: "Protecting, developing and promoting initiatives that advance human welfare.",
    color: "from-emerald-600 to-green-500",
  },
];

// Organisational hierarchy (top → bottom)
const structure = [
  {
    icon: Network,
    role: "Chief Supervisor of Branches",
    note: "Represents the central Trust and oversees all branches nationwide.",
  },
  {
    icon: Building2,
    role: "Head of Branch",
    note: "Plans, strengthens and runs all affairs of an individual branch.",
  },
  {
    icon: UserCog,
    role: "Branch Incharge & Technician",
    note: "Manages units, camp logistics, publicity material and the technician team.",
  },
  {
    icon: ClipboardList,
    role: "Working Committee & Units",
    note: "Unit Head, Unit Incharge and Unit Assistant deliver camps on the ground.",
  },
];

export default function Branches() {
  return (
    <section id="branches" className="py-20 md:py-28 bg-[var(--section-alt)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle
          tag="Our Branch Network"
          title="Bringing Care "
          highlight="Closer to You"
          description="To deliver on its promise of blood donation, BMT established branches across the cities of Pakistan where its community lives — a decision taken at the Central Secretariat on 2 January 2011 — so that life-saving support is always within reach."
        />

        {/* Objectives */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {objectives.map((obj, i) => (
            <motion.div
              key={obj.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] card-hover"
            >
              <div
                className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${obj.color} flex items-center justify-center mb-4 shadow-lg`}
              >
                <obj.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 font-heading">
                {obj.title}
              </h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {obj.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Organisational structure */}
        <div className="rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)] p-6 md:p-10">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-heading mb-2">
              How a Branch Is Organised
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
              A clear chain of responsibility keeps every camp accountable — from the central Trust
              down to the volunteers running each unit.
            </p>
          </div>

          <div className="flex flex-col items-center gap-0">
            {structure.map((node, i) => (
              <div key={node.role} className="w-full flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="w-full max-w-xl flex items-center gap-4 p-4 rounded-2xl bg-[var(--background)] border border-[var(--border-color)]"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary-700 to-teal-600 flex items-center justify-center flex-shrink-0 shadow">
                    <node.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-slate-900 dark:text-white text-sm font-heading">
                      {node.role}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-snug mt-0.5">
                      {node.note}
                    </p>
                  </div>
                </motion.div>
                {i < structure.length - 1 && (
                  <div className="w-px h-6 bg-gradient-to-b from-primary-400 to-teal-400" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
