"use client";

import { motion } from "framer-motion";
import { Tent, Siren, Ambulance, Mountain, Baby, CloudRain, ArrowRight } from "lucide-react";
import SectionTitle from "./SectionTitle";

const services = [
  {
    icon: Tent,
    title: "Free Medical Camps",
    desc: "We deploy qualified doctors and medical teams to remote villages across Baltistan, providing free consultations, medications, and screenings.",
    color: "from-primary-600 to-primary-400",
    bg: "bg-primary-50 dark:bg-primary-900/20",
    border: "border-primary-100 dark:border-primary-800/50",
    stats: "200+ camps held",
    image: "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?w=600&q=80",
  },
  {
    icon: Siren,
    title: "Emergency Healthcare",
    desc: "24/7 emergency medical support connecting patients to the nearest healthcare facility with trained first responders on call.",
    color: "from-red-600 to-red-400",
    bg: "bg-red-50 dark:bg-red-900/20",
    border: "border-red-100 dark:border-red-800/50",
    stats: "500+ emergencies handled",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80",
  },
  {
    icon: Ambulance,
    title: "Ambulance Services",
    desc: "Our fleet of ambulances ensures rapid patient transfer from remote areas to hospitals, covering distances of up to 200km.",
    color: "from-orange-500 to-amber-400",
    bg: "bg-amber-50 dark:bg-amber-900/20",
    border: "border-amber-100 dark:border-amber-800/50",
    stats: "3 ambulances operational",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&q=80",
  },
  {
    icon: Mountain,
    title: "Rural Healthcare",
    desc: "Specially designed programs for remote mountain villages — training community health workers and establishing mini health posts.",
    color: "from-teal-600 to-teal-400",
    bg: "bg-teal-50 dark:bg-teal-900/20",
    border: "border-teal-100 dark:border-teal-800/50",
    stats: "30+ villages reached",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
  },
  {
    icon: Baby,
    title: "Mother & Child Care",
    desc: "Dedicated maternal and child health programs including prenatal checkups, safe delivery support, and child immunization drives.",
    color: "from-pink-500 to-rose-400",
    bg: "bg-pink-50 dark:bg-pink-900/20",
    border: "border-pink-100 dark:border-pink-800/50",
    stats: "1,200+ mothers supported",
    image: "https://images.unsplash.com/photo-1576669801820-a9ab287ac2d1?w=600&q=80",
  },
  {
    icon: CloudRain,
    title: "Disaster Relief",
    desc: "Rapid medical response during floods, earthquakes, and other disasters — deploying medical teams and supplies within hours.",
    color: "from-slate-600 to-slate-400",
    bg: "bg-slate-50 dark:bg-slate-800/40",
    border: "border-slate-200 dark:border-slate-700/50",
    stats: "10+ disaster responses",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function MedicalServices() {
  return (
    <section id="services" className="py-20 md:py-28 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle
          tag="Our Services"
          title="Comprehensive Care for "
          highlight="Every Community"
          description="From emergency response to preventive care, our programs address the full spectrum of healthcare needs in Gilgit-Baltistan."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className={`group relative rounded-3xl overflow-hidden border ${service.border} ${service.bg} card-hover`}
            >
              {/* Service image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
                {/* Icon badge */}
                <div
                  className={`absolute top-4 left-4 w-11 h-11 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}
                >
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                {/* Stats badge */}
                <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs font-medium">
                  {service.stats}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 font-heading">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {service.desc}
                </p>
                <button className="flex items-center gap-1.5 text-xs font-semibold text-primary-700 dark:text-teal-400 hover:gap-2.5 transition-all">
                  Learn More
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 relative overflow-hidden rounded-3xl p-8 md:p-12 mountain-gradient text-white"
        >
          <div className="absolute inset-0 mountain-pattern opacity-20" />
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold font-heading mb-2">
                Need Medical Help?
              </h3>
              <p className="text-white/80 text-sm md:text-base max-w-md">
                Our team is available 24/7 for medical emergencies. Don&apos;t hesitate — reach out
                now and we&apos;ll be there for you.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+92-5812-920920"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-primary-800 font-bold text-sm hover:bg-primary-50 transition-all whitespace-nowrap shadow-lg"
              >
                <Siren className="w-4 h-4" />
                Call Emergency
              </a>
              <a
                href="/#contact"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/15 border border-white/30 text-white font-semibold text-sm hover:bg-white/25 transition-all whitespace-nowrap"
              >
                Request a Camp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
