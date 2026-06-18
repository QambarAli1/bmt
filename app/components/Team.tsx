"use client";

import { motion } from "framer-motion";
import { Globe, Share2, Mail } from "lucide-react";
import SectionTitle from "./SectionTitle";

const categories = [
  {
    label: "Medical Team",
    members: [
      {
        name: "Dr. Imtiaz Hussain",
        role: "Chief Medical Officer",
        specialty: "Internal Medicine",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&q=80",
        bio: "MBBS, FCPS – 20 years in internal medicine across Baltistan.",
      },
      {
        name: "Dr. Zainab Fatima",
        role: "Head of Women's Health",
        specialty: "Gynecology & Obstetrics",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&q=80",
        bio: "MBBS, FCPS – Dedicated to reducing maternal mortality in remote areas.",
      },
      {
        name: "Dr. Rashid Karim",
        role: "Emergency Medicine Lead",
        specialty: "Emergency Medicine",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&q=80",
        bio: "MBBS, MCPS – Coordinating 24/7 emergency response across the region.",
      },
      {
        name: "Dr. Nadia Malik",
        role: "Pediatrician",
        specialty: "Child Health",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
        bio: "MBBS, FCPS (Pediatrics) – Champion of child immunization programs.",
      },
    ],
  },
  {
    label: "Leadership",
    members: [
      {
        name: "Saqib Hussain",
        role: "Founder & Executive Director",
        specialty: "Community Development",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
        bio: "Social entrepreneur who founded BMT in 2009 after witnessing preventable deaths in Baltistan.",
      },
      {
        name: "Maryam Nawaz",
        role: "Director of Operations",
        specialty: "Healthcare Management",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
        bio: "MPA, 15 years managing large-scale healthcare programs across Pakistan.",
      },
      {
        name: "Ali Baig",
        role: "Director of Fundraising",
        specialty: "Non-Profit Finance",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
        bio: "Chartered Accountant and development professional ensuring transparent fund management.",
      },
    ],
  },
  {
    label: "Advisors",
    members: [
      {
        name: "Prof. Dr. Nisar Ahmed",
        role: "Medical Advisor",
        specialty: "Public Health",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&q=80",
        bio: "Former Dean of Medicine, Aga Khan University – guiding BMT's clinical standards.",
      },
      {
        name: "Tanveer Mirza",
        role: "Legal Advisor",
        specialty: "NGO Law & Compliance",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80",
        bio: "Senior Advocate, ensuring BMT's full legal compliance and governance.",
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
          description="A dedicated team of doctors, volunteers, and professionals committed to transforming healthcare in Gilgit-Baltistan."
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
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-400"
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

                  {/* Social icons */}
                  <div className="flex items-center justify-center gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    {[Globe, Share2, Mail].map((Icon, idx) => (
                      <button
                        key={idx}
                        className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-colors"
                      >
                        <Icon className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400" />
                      </button>
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
