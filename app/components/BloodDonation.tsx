"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Droplets, AlertCircle, CheckCircle, Clock, Phone, ChevronRight, User, Mail } from "lucide-react";
import SectionTitle from "./SectionTitle";

const bloodGroups = [
  { group: "A+", available: true, count: 12, urgency: "normal" },
  { group: "A-", available: false, count: 0, urgency: "critical" },
  { group: "B+", available: true, count: 8, urgency: "normal" },
  { group: "B-", available: false, count: 1, urgency: "critical" },
  { group: "O+", available: true, count: 18, urgency: "normal" },
  { group: "O-", available: false, count: 2, urgency: "urgent" },
  { group: "AB+", available: true, count: 5, urgency: "normal" },
  { group: "AB-", available: false, count: 0, urgency: "critical" },
];

const eligibility = [
  "Age between 18 and 65 years",
  "Weight at least 50 kg",
  "Hemoglobin ≥ 12.5 g/dL",
  "No fever or cold in last 2 weeks",
  "Not donated blood in last 3 months",
  "No surgery in last 6 months",
];

const donationSteps = [
  { step: "01", title: "Registration", desc: "Fill the donor form online or at the camp", icon: User },
  { step: "02", title: "Health Check", desc: "Quick medical screening and blood pressure check", icon: AlertCircle },
  { step: "03", title: "Donate", desc: "Safe, sterile donation taking only 8-10 minutes", icon: Droplets },
  { step: "04", title: "Recovery", desc: "Rest, refreshments and a hero's thank you!", icon: CheckCircle },
];

export default function BloodDonation() {
  const [activeTab, setActiveTab] = useState<"request" | "donor">("donor");
  const [donorForm, setDonorForm] = useState({ name: "", phone: "", email: "", bloodGroup: "", city: "" });
  const [requestForm, setRequestForm] = useState({ name: "", phone: "", bloodGroup: "", hospital: "", units: "", city: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleDonorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="blood-donation" className="py-20 md:py-28 bg-[var(--section-alt)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle
          tag="Blood Donation"
          title="Give Blood, "
          highlight="Save a Life"
          description="Your blood donation can save up to 3 lives. Join our growing network of life-savers across Gilgit-Baltistan."
        />

        {/* Emergency Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-10 p-5 rounded-2xl bg-red-600 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center pulse-emergency">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold text-lg font-heading">Emergency Blood Request?</p>
              <p className="text-red-100 text-sm">Call our 24/7 hotline — we respond within minutes</p>
            </div>
          </div>
          <a
            href="tel:+92-5812-920920"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-red-600 font-bold text-sm hover:bg-red-50 transition-colors whitespace-nowrap"
          >
            <Phone className="w-4 h-4" />
            +92-5812-920920
          </a>
        </motion.div>

        {/* Blood Group Availability */}
        <div className="mb-14">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 font-heading flex items-center gap-2">
            <Droplets className="w-5 h-5 text-red-500" />
            Current Blood Availability
          </h3>
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
            {bloodGroups.map((bg, i) => (
              <motion.div
                key={bg.group}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`blood-card relative flex flex-col items-center justify-center p-3 md:p-4 rounded-2xl border-2 transition-all cursor-pointer ${
                  bg.urgency === "critical"
                    ? "bg-red-50 dark:bg-red-900/20 border-red-300 dark:border-red-700"
                    : bg.urgency === "urgent"
                    ? "bg-amber-50 dark:bg-amber-900/20 border-amber-300 dark:border-amber-700"
                    : "bg-[var(--card-bg)] border-[var(--border-color)]"
                }`}
              >
                {bg.urgency === "critical" && (
                  <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-[9px] font-bold text-white bg-red-500 px-2 py-0.5 rounded-full">
                    CRITICAL
                  </span>
                )}
                <span
                  className={`text-xl md:text-2xl font-extrabold font-heading ${
                    bg.urgency === "critical"
                      ? "text-red-600"
                      : bg.urgency === "urgent"
                      ? "text-amber-600"
                      : "text-primary-700 dark:text-primary-400"
                  }`}
                >
                  {bg.group}
                </span>
                <span
                  className={`text-xs font-medium mt-1 ${
                    bg.available ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {bg.available ? `${bg.count} units` : "Needed"}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Main section: Form + Process */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Forms */}
          <div>
            {/* Tab switcher */}
            <div className="flex rounded-xl p-1 bg-slate-100 dark:bg-slate-800 mb-6 gap-1">
              {(["donor", "request"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-semibold transition-all ${
                    activeTab === tab
                      ? "bg-white dark:bg-slate-700 text-primary-700 dark:text-teal-400 shadow-sm"
                      : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                  }`}
                >
                  {tab === "donor" ? "Become a Donor" : "Request Blood"}
                </button>
              ))}
            </div>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5 text-green-600" />
                <p className="text-sm font-medium text-green-700 dark:text-green-400">
                  {activeTab === "donor"
                    ? "Thank you! We'll contact you about donation camps near you."
                    : "Blood request received! Our team will call you within 30 minutes."}
                </p>
              </motion.div>
            )}

            {activeTab === "donor" ? (
              <form onSubmit={handleDonorSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wide">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      value={donorForm.name}
                      onChange={(e) => setDonorForm({ ...donorForm, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] text-slate-900 dark:text-white text-sm focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wide">
                      Blood Group *
                    </label>
                    <select
                      required
                      value={donorForm.bloodGroup}
                      onChange={(e) => setDonorForm({ ...donorForm, bloodGroup: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] text-slate-900 dark:text-white text-sm focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                    >
                      <option value="">Select group</option>
                      {bloodGroups.map((bg) => (
                        <option key={bg.group} value={bg.group}>{bg.group}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wide">
                    Phone Number *
                  </label>
                  <input
                    required
                    type="tel"
                    value={donorForm.phone}
                    onChange={(e) => setDonorForm({ ...donorForm, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] text-slate-900 dark:text-white text-sm focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                    placeholder="+92 300 0000000"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wide">
                    Email
                  </label>
                  <input
                    type="email"
                    value={donorForm.email}
                    onChange={(e) => setDonorForm({ ...donorForm, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] text-slate-900 dark:text-white text-sm focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wide">
                    City / District *
                  </label>
                  <input
                    required
                    type="text"
                    value={donorForm.city}
                    onChange={(e) => setDonorForm({ ...donorForm, city: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] text-slate-900 dark:text-white text-sm focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                    placeholder="e.g. Skardu"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 transition-all shadow-lg hover:shadow-red-500/20 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  <Droplets className="w-4 h-4" />
                  Register as Blood Donor
                </button>
              </form>
            ) : (
              <form onSubmit={handleRequestSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wide">
                      Patient Name *
                    </label>
                    <input
                      required
                      type="text"
                      value={requestForm.name}
                      onChange={(e) => setRequestForm({ ...requestForm, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] text-slate-900 dark:text-white text-sm focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                      placeholder="Patient name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wide">
                      Blood Group *
                    </label>
                    <select
                      required
                      value={requestForm.bloodGroup}
                      onChange={(e) => setRequestForm({ ...requestForm, bloodGroup: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] text-slate-900 dark:text-white text-sm focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                    >
                      <option value="">Select group</option>
                      {bloodGroups.map((bg) => (
                        <option key={bg.group} value={bg.group}>{bg.group}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wide">
                      Contact Number *
                    </label>
                    <input
                      required
                      type="tel"
                      value={requestForm.phone}
                      onChange={(e) => setRequestForm({ ...requestForm, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] text-slate-900 dark:text-white text-sm focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                      placeholder="+92 300 0000000"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wide">
                      Units Needed *
                    </label>
                    <input
                      required
                      type="number"
                      min="1"
                      max="10"
                      value={requestForm.units}
                      onChange={(e) => setRequestForm({ ...requestForm, units: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] text-slate-900 dark:text-white text-sm focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                      placeholder="No. of units"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wide">
                    Hospital / Location *
                  </label>
                  <input
                    required
                    type="text"
                    value={requestForm.hospital}
                    onChange={(e) => setRequestForm({ ...requestForm, hospital: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] text-slate-900 dark:text-white text-sm focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                    placeholder="Hospital or city name"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 transition-all shadow-lg hover:shadow-red-500/20 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  <AlertCircle className="w-4 h-4" />
                  Submit Emergency Request
                </button>
              </form>
            )}
          </div>

          {/* Right: Process + Eligibility */}
          <div className="space-y-8">
            {/* Donation Process */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-5 font-heading">
                How Donation Works
              </h3>
              <div className="space-y-4">
                {donationSteps.map((step, i) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] card-hover"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600 to-teal-600 flex items-center justify-center flex-shrink-0 shadow">
                      <step.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-xs font-bold text-primary-500 dark:text-teal-400">
                          Step {step.step}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-slate-300" />
                        <span className="text-sm font-bold text-slate-900 dark:text-white">
                          {step.title}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Eligibility */}
            <div className="p-6 rounded-2xl bg-green-50 dark:bg-green-900/15 border border-green-200 dark:border-green-800/50">
              <h4 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2 font-heading">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Donation Eligibility
              </h4>
              <ul className="space-y-2">
                {eligibility.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <ChevronRight className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Time info */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-800/50">
              <div className="w-10 h-10 rounded-xl bg-primary-100 dark:bg-primary-800/50 flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-white text-sm">
                  Takes Only 30–45 Minutes
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Whole process: check-in, donation (8-10 min), and recovery
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
