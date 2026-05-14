"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  tag?: string;
  title: string;
  highlight?: string;
  description?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionTitle({
  tag,
  title,
  highlight,
  description,
  center = true,
  light = false,
}: SectionTitleProps) {
  const titleParts = highlight ? title.split(highlight) : [title];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${center ? "text-center" : ""}`}
    >
      {tag && (
        <span
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 ${
            light
              ? "bg-white/15 text-white border border-white/25"
              : "bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-teal-400 border border-primary-100 dark:border-primary-800/50"
          }`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${light ? "bg-teal-300" : "bg-teal-500"}`} />
          {tag}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight font-heading mb-4 ${
          light ? "text-white" : "text-slate-900 dark:text-white"
        }`}
      >
        {highlight ? (
          <>
            {titleParts[0]}
            <span className="gradient-text">{highlight}</span>
            {titleParts[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {description && (
        <p
          className={`text-lg max-w-2xl leading-relaxed ${center ? "mx-auto" : ""} ${
            light ? "text-white/75" : "text-slate-500 dark:text-slate-400"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
