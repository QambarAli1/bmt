"use client";

import { motion } from "framer-motion";
import { Droplets, TestTube2, MapPin, CalendarDays } from "lucide-react";
import SectionTitle from "./SectionTitle";
import AnimatedCounter from "./AnimatedCounter";

/* -------------------------------------------------------------------------- */
/*  Data — Blood Collection & Grouping Report (1st → 10th Moharram)            */
/* -------------------------------------------------------------------------- */

const collectionByCity = [
  { city: "Karachi", units: 885, pct: 80.98, color: "#dc2626" },
  { city: "Rawalpindi / Islamabad", units: 208, pct: 19.02, color: "#1d4ed8" },
  { city: "Skardu-Baltistan", units: 0, pct: 0, color: "#059669" },
];
const totalCollection = 1093;

const groupingByCity = [
  { city: "Skardu-Baltistan", units: 98, pct: 53.26, color: "#059669" },
  { city: "Rawalpindi / Islamabad", units: 86, pct: 46.74, color: "#1d4ed8" },
  { city: "Karachi", units: 0, pct: 0, color: "#dc2626" },
];
const totalGrouping = 184;

const collectionByArea = [
  {
    city: "Karachi",
    color: "#dc2626",
    areas: [
      { name: "Markazi Jalouse Numaish", units: 250 },
      { name: "Mehmoodabad / Manzoor Colony", units: 207 },
      { name: "Abyssinia Lines", units: 86 },
      { name: "Korangi Power House", units: 73 },
      { name: "Korangi 48/B", units: 69 },
      { name: "Orangi Town Turi Bangash", units: 59 },
      { name: "Awami Colony", units: 50 },
      { name: "Korangi 48/A", units: 46 },
      { name: "Mangopir", units: 35 },
      { name: "Korangi Crossing", units: 10 },
    ],
  },
  {
    city: "Rawalpindi / Islamabad",
    color: "#1d4ed8",
    areas: [
      { name: "Markazi Jalouse Islamabad", units: 116 },
      { name: "Markazi Jalouse Rawalpindi", units: 92 },
    ],
  },
];

const groupingByArea = [
  {
    city: "Skardu-Baltistan",
    color: "#059669",
    areas: [{ name: "Markazi Jalouse Skardu", units: 98 }],
  },
  {
    city: "Rawalpindi / Islamabad",
    color: "#1d4ed8",
    areas: [
      { name: "Chakri Rawalpindi", units: 56 },
      { name: "Sharifabad Rawalpindi", units: 30 },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  Donut chart (conic-gradient)                                              */
/* -------------------------------------------------------------------------- */

function Donut({
  data,
  total,
  suffix,
}: {
  data: { pct: number; color: string }[];
  total: number;
  suffix: string;
}) {
  let acc = 0;
  const stops = data
    .filter((d) => d.pct > 0)
    .map((d) => {
      const start = acc;
      acc += d.pct;
      return `${d.color} ${start}% ${acc}%`;
    })
    .join(", ");

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative w-52 h-52 md:w-60 md:h-60 mx-auto"
    >
      <div
        className="w-full h-full rounded-full shadow-lg"
        style={{ background: `conic-gradient(${stops})` }}
      />
      <div className="absolute inset-[18%] rounded-full bg-[var(--card-bg)] flex flex-col items-center justify-center border border-[var(--border-color)]">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          Total
        </span>
        <AnimatedCounter
          target={total}
          className="text-3xl md:text-4xl font-extrabold font-heading text-slate-900 dark:text-white"
        />
        <span className="text-xs font-semibold text-slate-400 uppercase">{suffix}</span>
      </div>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*  City legend / stat rows                                                   */
/* -------------------------------------------------------------------------- */

function CityLegend({
  data,
}: {
  data: { city: string; units: number; pct: number; color: string }[];
}) {
  const max = Math.max(...data.map((d) => d.units), 1);
  return (
    <div className="space-y-4">
      {data.map((d, i) => (
        <motion.div
          key={d.city}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
        >
          <div className="flex items-center justify-between mb-1.5">
            <span className="flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-200">
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: d.color }} />
              {d.city}
            </span>
            <span className="text-sm font-bold text-slate-900 dark:text-white">
              {d.units.toLocaleString()}{" "}
              <span className="text-xs font-medium text-slate-400">({d.pct}%)</span>
            </span>
          </div>
          <div className="h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${(d.units / max) * 100}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="h-full rounded-full"
              style={{ backgroundColor: d.color }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Area breakdown table                                                     */
/* -------------------------------------------------------------------------- */

function AreaBreakdown({
  title,
  icon: Icon,
  groups,
  emptyNote,
}: {
  title: string;
  icon: typeof Droplets;
  groups: { city: string; color: string; areas: { name: string; units: number }[] }[];
  emptyNote?: { city: string; note: string };
}) {
  return (
    <div className="rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)] p-6 md:p-8">
      <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white font-heading mb-6">
        <Icon className="w-5 h-5 text-red-500" />
        {title}
      </h3>
      <div className="space-y-6">
        {groups.map((g) => (
          <div key={g.city}>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: g.color }} />
              <span className="text-sm font-bold uppercase tracking-wide text-slate-700 dark:text-slate-300">
                {g.city}
              </span>
            </div>
            <div className="space-y-2">
              {g.areas.map((a, i) => (
                <motion.div
                  key={a.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="flex items-center justify-between gap-3 px-3 py-2 rounded-xl bg-[var(--background)] border border-[var(--border-color)]"
                >
                  <span className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 min-w-0">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                    <span className="truncate">{a.name}</span>
                  </span>
                  <span className="text-sm font-bold text-slate-900 dark:text-white flex-shrink-0">
                    {a.units}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
        {emptyNote && (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-600" />
              <span className="text-sm font-bold uppercase tracking-wide text-slate-500">
                {emptyNote.city}
              </span>
            </div>
            <p className="text-xs text-slate-400 italic px-3">{emptyNote.note}</p>
          </div>
        )}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Main section                                                             */
/* -------------------------------------------------------------------------- */

export default function CampaignReport() {
  return (
    <section id="campaign-report" className="scroll-mt-28 py-20 md:py-28 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle
          tag="Muharram Blood Drive Report"
          title="Our Impact, "
          highlight="By the Numbers"
          description="Blood Collection & Grouping Report from 1st Moharram to 10th Moharram — a snapshot of the units collected and grouping camps held across our branch network."
        />

        {/* Period badge */}
        <div className="flex justify-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--card-bg)] border border-[var(--border-color)] text-sm font-medium text-slate-600 dark:text-slate-300">
            <CalendarDays className="w-4 h-4 text-red-500" />
            1st Moharram – 10th Moharram
          </span>
        </div>

        {/* Two donut summaries */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Collection */}
          <div className="rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)] p-6 md:p-8">
            <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white font-heading mb-6">
              <Droplets className="w-5 h-5 text-red-500" />
              Blood Collection by City
            </h3>
            <div className="grid sm:grid-cols-2 gap-8 items-center">
              <Donut data={collectionByCity} total={totalCollection} suffix="Units" />
              <CityLegend data={collectionByCity} />
            </div>
          </div>

          {/* Grouping */}
          <div className="rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)] p-6 md:p-8">
            <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white font-heading mb-6">
              <TestTube2 className="w-5 h-5 text-teal-500" />
              Blood Grouping Camps by City
            </h3>
            <div className="grid sm:grid-cols-2 gap-8 items-center">
              <Donut data={groupingByCity} total={totalGrouping} suffix="Units" />
              <CityLegend data={groupingByCity} />
            </div>
          </div>
        </div>

        {/* Headline stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {[
            { label: "Total Blood Collection", value: 1093, color: "text-red-600", icon: Droplets },
            { label: "Total Grouping Camps", value: 184, color: "text-teal-600", icon: TestTube2 },
            { label: "Karachi Units", value: 885, color: "text-red-600", icon: Droplets },
            { label: "Pindi / Islamabad Units", value: 208, color: "text-primary-600", icon: Droplets },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-5 rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] text-center card-hover"
            >
              <s.icon className={`w-6 h-6 mx-auto mb-2 ${s.color}`} />
              <AnimatedCounter
                target={s.value}
                className={`block text-2xl md:text-3xl font-extrabold font-heading ${s.color}`}
              />
              <span className="text-xs text-slate-500 dark:text-slate-400 mt-1 block">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Area breakdowns */}
        <div className="grid lg:grid-cols-2 gap-6">
          <AreaBreakdown
            title="Blood Collection by Area"
            icon={Droplets}
            groups={collectionByArea}
            emptyNote={{ city: "Skardu-Baltistan", note: "— No Blood Collection Recorded —" }}
          />
          <AreaBreakdown
            title="Blood Grouping Camps by Area"
            icon={TestTube2}
            groups={groupingByArea}
            emptyNote={{ city: "Karachi", note: "— No Blood Grouping Camp —" }}
          />
        </div>

        {/* Thank you note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-slate-500 dark:text-slate-400 mt-12 max-w-2xl mx-auto"
        >
          Thank you to all donors, volunteers and units for your support and contributions.
          <span className="block font-semibold text-slate-700 dark:text-slate-300 mt-1">
            — Baltistan Medical Trust
          </span>
        </motion.p>
      </div>
    </section>
  );
}
