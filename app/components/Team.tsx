"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import SectionTitle from "./SectionTitle";

const categories = [
  {
    label: "BMT Ghanche — Branch Setup",
    members: [
      {
        name: "Ehtisham Baltistani",
        role: "Head of BMT Ghanche",
        specialty: "Branch Head",
        image: "/bmt-ganche/head-ehtisham-baltistani.jpeg",
        bio: "Leads and strengthens all affairs of the Ghanche branch.",
        phones: ["03480182185", "03555130279"],
      },
      {
        name: "Mustafa Baltistani",
        role: "Incharge of BMT Ghanche",
        specialty: "Branch Incharge",
        image: "/bmt-ganche/incharge-mustafa-baltistani.jpeg",
        bio: "Manages units, camp logistics and day-to-day branch operations.",
        phones: ["03131523366", "03554467423"],
      },
      {
        name: "Inayat Baltistani",
        role: "Tech Incharge of BMT Ghanche",
        specialty: "Technician Lead",
        image: "/bmt-ganche/tech-incharge-inayat-baltistani.jpeg",
        bio: "Heads the technician team for blood screening and camp equipment.",
        phones: ["03410273788"],
      },
      {
        name: "Zubair Baltistani",
        role: "Incharge BMHD of BMT Ghanche",
        specialty: "BMHD Incharge",
        image: "/bmt-ganche/bmhd-incharge-zubair-baltistani.jpeg",
        bio: "Coordinates Baltistan Medical Help Desk services for Ghanche patients.",
        phones: ["03445688034"],
      },
    ],
  },
];

export default function Team() {
  return (
    <section id="team" className="py-20 md:py-28 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle
          tag="Our Team"
          title="The People Behind "
          highlight="Every Life Saved"
          description="A dedicated team of volunteers and professionals committed to transforming healthcare in Gilgit-Baltistan — reach any of them directly."
        />

        {categories.map((category, catIdx) => (
          <div key={category.label} className={catIdx < categories.length - 1 ? "mb-14" : ""}>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-lg font-bold text-slate-900 dark:text-white mb-6 font-heading flex items-center gap-3"
            >
              <span className="w-8 h-0.5 bg-gradient-to-r from-primary-600 to-teal-500 rounded-full" />
              {category.label}
            </motion.h3>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {category.members.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group relative p-5 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] card-hover text-center overflow-hidden"
                >
                  {/* Background accent */}
                  <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-br from-primary-50 to-teal-50 dark:from-primary-900/20 dark:to-teal-900/20" />

                  {/* Avatar */}
                  <div className="relative mb-4">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden mx-auto border-4 border-white dark:border-slate-700 shadow-lg">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-400"
                      />
                    </div>
                    <div className="absolute -bottom-1 left-0 right-0 px-3 flex justify-center">
                      <span className="max-w-full truncate text-[10px] font-bold px-2 py-0.5 rounded-full bg-gradient-to-r from-primary-600 to-teal-600 text-white shadow">
                        {member.specialty}
                      </span>
                    </div>
                  </div>

                  <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-0.5 font-heading">
                    {member.name}
                  </h4>
                  <p className="text-xs text-primary-600 dark:text-teal-400 font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Contact numbers */}
                  <div className="flex flex-col items-center gap-1.5 mt-4">
                    {member.phones.map((phone) => (
                      <div key={phone} className="flex items-center gap-1.5">
                        <a
                          href={`tel:${phone}`}
                          className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-700 dark:hover:text-teal-400 transition-colors"
                        >
                          <Phone className="w-3 h-3" />
                          {phone}
                        </a>
                        <a
                          href={`https://wa.me/92${phone.replace(/^0/, "")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`WhatsApp ${member.name} on ${phone}`}
                          className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-emerald-50 dark:hover:bg-emerald-900/30 hover:text-emerald-600 text-slate-600 dark:text-slate-400 transition-colors"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        {/* Volunteer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 p-8 rounded-3xl bg-gradient-to-br from-teal-600 to-primary-800 text-white text-center overflow-hidden relative"
        >
          <div className="absolute inset-0 mountain-pattern opacity-20" />
          <div className="relative">
            <h3 className="text-2xl font-extrabold mb-2 font-heading">Join Our Volunteer Family</h3>
            <p className="text-white/75 text-sm mb-6 max-w-md mx-auto">
              Whether you&apos;re a doctor, driver, cook, or simply someone with a compassionate heart —
              we have a place for you.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="/#contact"
                className="px-6 py-3 rounded-xl bg-white text-primary-800 font-bold text-sm hover:bg-primary-50 transition-all shadow-lg"
              >
                Apply as Volunteer
              </a>
              <a
                href="/#contact"
                className="px-6 py-3 rounded-xl bg-white/15 border border-white/30 text-white font-semibold text-sm hover:bg-white/25 transition-all"
              >
                Partner with Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
