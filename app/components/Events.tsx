"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, CalendarDays, Phone, Tent, Droplets, IdCard, ArrowRight } from "lucide-react";
import SectionTitle from "./SectionTitle";

type Camp = { no: number; area: string; date: string };

type Branch = {
  id: string;
  name: string;
  city: string;
  accent: string; // gradient
  contacts: { role: string; name: string; phone: string }[];
  camps: Camp[];
};

const branches: Branch[] = [
  {
    id: "karachi",
    name: "BMT Karachi Branch",
    city: "Karachi",
    accent: "from-red-600 to-red-400",
    contacts: [
      { role: "Head Office Incharge", name: "Shujaat Baltistani", phone: "0311-2028526" },
      { role: "Incharge", name: "Aamir Baltistani", phone: "0314-3363508" },
      { role: "Technician Incharge", name: "Zulqarnain Baltistani", phone: "0341-0234145" },
    ],
    camps: [
      { no: 1, area: "Korangi 48/B", date: "6 Muharram" },
      { no: 2, area: "Awami Colony (during procession)", date: "7 Muharram" },
      { no: 3, area: "Awami Colony (Masjid Sufia Noor Bakhshia)", date: "7 Muharram" },
      { no: 4, area: "Orangi Town Tori Bangash", date: "7 Muharram" },
      { no: 5, area: "Mangopir", date: "8 Muharram" },
      { no: 6, area: "Power House", date: "8 Muharram" },
      { no: 7, area: "Korangi Crossing", date: "8 Muharram" },
      { no: 8, area: "Korangi 48/A", date: "8 Muharram" },
      { no: 9, area: "Manzoor Colony", date: "9 Muharram" },
      { no: 10, area: "Mehmoodabad", date: "9 Muharram" },
      { no: 11, area: "A.B. Sania Line", date: "9 Muharram" },
      { no: 12, area: "Numaish Chowrangi", date: "10 Muharram" },
      { no: 13, area: "Pahar Ganj", date: "19 Muharram" },
      { no: 14, area: "Stadium", date: "25 Muharram" },
      { no: 15, area: "Habib School", date: "First Sunday after Chehlum" },
      { no: 16, area: "Numaish Chowrangi", date: "Chehlum" },
      { no: 17, area: "Malir Jafar-e-Tayyar", date: "72 Taboot" },
      { no: 18, area: "Soldier Bazar", date: "25 Safar" },
      { no: 19, area: "Drig Road", date: "27 Safar" },
      { no: 20, area: "Brohi Khel (Mangopir)", date: "2nd Sunday of Rabi-ul-Awwal" },
      { no: 21, area: "Old Rizvia", date: "8 Rabi-ul-Awwal" },
      { no: 22, area: "Korangi 48/A (Mangopir)", date: "3 Shaban" },
      { no: 23, area: "Brohi Khel", date: "Last Sunday of Shaban" },
    ],
  },
  {
    id: "rwp-isb",
    name: "BMT Rawalpindi / Islamabad Branch",
    city: "Rawalpindi & Islamabad",
    accent: "from-primary-700 to-primary-500",
    contacts: [
      { role: "Head Office Incharge", name: "Shakir Baltistani", phone: "0312-9900815" },
      { role: "Incharge", name: "Munawar Baltistani", phone: "0316-5697301" },
      { role: "Technician Incharge", name: "Shehryar Baltistani", phone: "0343-3495265" },
    ],
    camps: [
      { no: 1, area: "Sharifabad", date: "Muharram" },
      { no: 2, area: "River Garden", date: "Muharram" },
      { no: 3, area: "Markazi Juloos, Islamabad", date: "9 Muharram" },
      { no: 4, area: "Markazi Juloos, Rawalpindi", date: "10 Muharram" },
      { no: 5, area: "Chakri", date: "Muharram" },
      { no: 6, area: "Markazi Juloos, Islamabad", date: "19 Muharram" },
      { no: 7, area: "Markazi Juloos, Rawalpindi", date: "Chehlum" },
      { no: 8, area: "Bahara Kahu", date: "Muharram" },
      { no: 9, area: "Ali Pur", date: "Muharram" },
      { no: 10, area: "Commercial Market, Rawalpindi", date: "Muharram" },
    ],
  },
  {
    id: "skardu",
    name: "BMT Skardu Branch",
    city: "Skardu & Baltistan",
    accent: "from-teal-600 to-teal-400",
    contacts: [
      { role: "Head Office Incharge", name: "Qasim Baltistani", phone: "0355-5148899" },
      { role: "Incharge", name: "Hasan Askari Baltistani", phone: "0346-3125283" },
      { role: "Technician Incharge", name: "Sikandar Ali Baltistani", phone: "0342-2852399" },
    ],
    camps: [
      { no: 1, area: "Markazi Juloos, Hussaini Chowk, Skardu", date: "10 Muharram" },
      { no: 2, area: "Markazi Juloos, Skardu", date: "Chehlum" },
      { no: 3, area: "Tolti", date: "Chehlum" },
      { no: 4, area: "Hussaini Chowk, Skardu", date: "Asad Ashura" },
      { no: 5, area: "Gamba, Skardu", date: "Asad Ashura" },
      { no: 6, area: "Kharmang Khas", date: "Asad Ashura" },
      { no: 7, area: "Hussainabad", date: "3 Shaban" },
    ],
  },
];

export default function Events() {
  const [active, setActive] = useState(branches[0].id);
  const branch = branches.find((b) => b.id === active)!;

  return (
    <section id="events" className="py-20 md:py-28 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle
          tag="Blood Donation Camps 2026–2027"
          title="Find a "
          highlight="Blood Camp Near You"
          description="Baltistan Medical Trust is holding blood grouping, blood donation & camp drives across Karachi, Rawalpindi/Islamabad and Skardu. Join us in this noble cause and help save lives."
        />

        {/* CNIC notice */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 flex items-start gap-3 p-4 rounded-2xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50"
        >
          <IdCard className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
            <span className="font-bold">Please note:</span> Under the Sindh Blood Transfusion Authority
            law, all donors attending these camps must bring their original CNIC (National Identity Card).
          </p>
        </motion.div>

        {/* Branch tabs */}
        <div className="flex flex-wrap gap-2 md:gap-3 mb-8">
          {branches.map((b) => {
            const isActive = b.id === active;
            return (
              <button
                key={b.id}
                onClick={() => setActive(b.id)}
                className={`flex items-center gap-2 px-4 md:px-5 py-2.5 rounded-xl text-sm font-semibold transition-all border ${
                  isActive
                    ? `text-white bg-gradient-to-r ${b.accent} border-transparent shadow-lg`
                    : "text-slate-600 dark:text-slate-300 bg-[var(--card-bg)] border-[var(--border-color)] hover:border-primary-300 dark:hover:border-primary-700"
                }`}
              >
                <MapPin className="w-4 h-4" />
                {b.city}
                <span
                  className={`ml-1 text-xs font-bold px-2 py-0.5 rounded-full ${
                    isActive ? "bg-white/25" : "bg-slate-100 dark:bg-slate-800"
                  }`}
                >
                  {b.camps.length}
                </span>
              </button>
            );
          })}
        </div>

        <motion.div
          key={branch.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid lg:grid-cols-3 gap-6"
        >
          {/* Schedule table */}
          <div className="lg:col-span-2 rounded-3xl overflow-hidden bg-[var(--card-bg)] border border-[var(--border-color)]">
            <div className={`flex items-center gap-3 px-5 py-4 bg-gradient-to-r ${branch.accent} text-white`}>
              <Droplets className="w-5 h-5" />
              <h3 className="font-bold font-heading">{branch.name}</h3>
              <span className="ml-auto text-xs font-medium bg-white/20 px-2.5 py-1 rounded-full">
                {branch.camps.length} camps
              </span>
            </div>

            <div className="divide-y divide-[var(--border-color)]">
              {/* Header row */}
              <div className="hidden sm:grid grid-cols-[3rem_1fr_auto] gap-4 px-5 py-3 text-xs font-bold uppercase tracking-wide text-slate-400 dark:text-slate-500">
                <span>#</span>
                <span>Area / Location</span>
                <span>Islamic Date</span>
              </div>
              {branch.camps.map((camp) => (
                <div
                  key={camp.no}
                  className="grid grid-cols-[2.5rem_1fr] sm:grid-cols-[3rem_1fr_auto] gap-3 sm:gap-4 px-5 py-3.5 items-center hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors"
                >
                  <span className="w-8 h-8 rounded-lg bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-teal-400 text-sm font-bold flex items-center justify-center">
                    {camp.no}
                  </span>
                  <div className="flex items-center gap-2 min-w-0">
                    <MapPin className="w-4 h-4 text-slate-400 flex-shrink-0 hidden sm:block" />
                    <span className="text-sm font-medium text-slate-800 dark:text-slate-100">
                      {camp.area}
                    </span>
                  </div>
                  <span className="col-start-2 sm:col-start-3 flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-red-600 dark:text-red-400 whitespace-nowrap">
                    <CalendarDays className="w-3.5 h-3.5 flex-shrink-0" />
                    {camp.date}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Branch contacts */}
          <div className="rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] p-5 h-fit">
            <h4 className="font-bold text-slate-900 dark:text-white mb-1 font-heading">
              {branch.city} — Branch Contacts
            </h4>
            <p className="text-xs text-slate-400 mb-5">
              For camp queries, registration or to donate blood, contact the team directly.
            </p>
            <div className="space-y-3">
              {branch.contacts.map((c) => (
                <a
                  key={c.role}
                  href={`tel:${c.phone.replace(/-/g, "")}`}
                  className="flex items-start gap-3 p-3 rounded-2xl bg-[var(--background)] border border-[var(--border-color)] hover:border-primary-300 dark:hover:border-primary-700 transition-colors"
                >
                  <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${branch.accent} flex items-center justify-center flex-shrink-0`}>
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">
                      {c.role}
                    </p>
                    <p className="text-sm font-semibold text-slate-800 dark:text-white truncate">
                      {c.name}
                    </p>
                    <p className="text-xs text-primary-600 dark:text-teal-400 font-medium">{c.phone}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
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
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
