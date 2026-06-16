"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import SectionTitle from "./SectionTitle";

const categories = ["All", "Medical Camps", "Blood Drives", "Community", "Team"];

const galleryItems = [
  { src: "/516393162_23874569478873403_561393224367461418_n.jpg", alt: "BMT Blood Donation Camp set up during Muharram", category: "Blood Drives", span: "" },
  { src: "/515865711_23874563282207356_8395193868951604663_n.jpg", alt: "Donors giving blood at a BMT camp during Muharram", category: "Blood Drives", span: "" },
  { src: "/536685970_24237221459274868_601388883361823419_n.jpg", alt: "BMT volunteers and donors at a Baltistan Medical Trust blood camp", category: "Team", span: "" },
  { src: "/519994821_23966162043047479_8295503902269187784_n.jpg", alt: "A donor giving blood at a BMT camp", category: "Blood Drives", span: "" },
  { src: "/517401686_23901856099478074_2589746068792865794_n.jpg", alt: "BMT Blood Donation Camp tent in Baltistan", category: "Medical Camps", span: "" },
  { src: "/534137669_24183743424622672_2250665550058036798_n.jpg", alt: "BMT Karachi team at a blood donation camp", category: "Team", span: "" },
  { src: "/518122143_23874562492207435_718034704989846716_n.jpg", alt: "Community gathering at a BMT camp during Ashura", category: "Community", span: "" },
  { src: "/520536428_23966159906381026_6964571386710265349_n.jpg", alt: "Blood donation in progress at a BMT camp", category: "Blood Drives", span: "" },
  { src: "/519417492_23966428329687517_992158734539418905_n.jpg", alt: "Families at a BMT camp during Muharram", category: "Community", span: "" },
  { src: "/534816791_24183046874692327_4385463650775045670_n.jpg", alt: "A donor and his family at a BMT blood camp", category: "Community", span: "" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxImg, setLightboxImg] = useState<{ src: string; alt: string } | null>(null);

  const filtered =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[var(--section-alt)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle
          tag="Gallery"
          title="Lives We&apos;ve "
          highlight="Touched"
          description="A visual story of our work across the mountains and valleys of Gilgit-Baltistan."
        />

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-primary-700 to-teal-600 text-white shadow-lg"
                  : "bg-[var(--card-bg)] text-slate-600 dark:text-slate-400 border border-[var(--border-color)] hover:border-primary-300 dark:hover:border-primary-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <motion.div layout className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          <AnimatePresence>
            {filtered.map((item, i) => (
              <motion.div
                key={item.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="relative group break-inside-avoid rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => setLightboxImg({ src: item.src, alt: item.alt })}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                    <span className="text-white text-xs font-medium line-clamp-2">{item.alt}</span>
                    <ZoomIn className="w-5 h-5 text-white flex-shrink-0 ml-2" />
                  </div>
                </div>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white font-medium">
                    {item.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setLightboxImg(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              className="relative max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImg.src.replace("w=400", "w=1200").replace("w=600", "w=1200")}
                alt={lightboxImg.alt}
                className="w-full h-full object-contain"
              />
              <button
                onClick={() => setLightboxImg(null)}
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/80 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white text-sm">{lightboxImg.alt}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
