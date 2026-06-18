"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Star, Sparkles, CheckCircle, Lock, CreditCard, Smartphone } from "lucide-react";
import SectionTitle from "./SectionTitle";

const campaigns = [
  {
    title: "Winter Medical Camp – Shigar",
    desc: "Providing warm clothing, medicines, and medical consultations to 500 families in Shigar Valley before winter.",
    raised: 420000,
    goal: 600000,
    donors: 148,
    daysLeft: 12,
    image: "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?w=400&q=80",
    urgent: true,
  },
  {
    title: "Blood Bank Equipment Fund",
    desc: "Purchasing modern blood storage and testing equipment for our Skardu blood bank to serve more patients safely.",
    raised: 875000,
    goal: 1200000,
    donors: 312,
    daysLeft: 28,
    image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=400&q=80",
    urgent: false,
  },
  {
    title: "Rural Health Worker Training",
    desc: "Training 50 community health workers in 10 remote villages to provide basic first aid and maternal care.",
    raised: 180000,
    goal: 350000,
    donors: 95,
    daysLeft: 45,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80",
    urgent: false,
  },
];

const impactCards = [
  { amount: "500", label: "provides medicines for 1 medical camp", icon: "💊" },
  { amount: "1,500", label: "funds emergency transport for a patient", icon: "🚑" },
  { amount: "5,000", label: "trains a community health worker", icon: "👩‍⚕️" },
  { amount: "10,000", label: "sponsors a full day medical camp", icon: "⛺" },
];

const membershipTiers = [
  {
    name: "Supporter",
    amount: 500,
    period: "monthly",
    perks: ["Monthly impact report", "Donor certificate", "Community newsletter"],
    color: "from-slate-600 to-slate-400",
  },
  {
    name: "Champion",
    amount: 2000,
    period: "monthly",
    perks: ["All Supporter benefits", "Name on donor wall", "Invitation to annual event", "Tax certificate"],
    color: "from-primary-600 to-teal-500",
    recommended: true,
  },
  {
    name: "Patron",
    amount: 5000,
    period: "monthly",
    perks: ["All Champion benefits", "Personalized impact updates", "Special recognition", "Site visit opportunity"],
    color: "from-amber-600 to-orange-500",
  },
];

export default function Donation() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState<"once" | "monthly">("once");
  const [submitted, setSubmitted] = useState(false);

  const presetAmounts = [500, 1000, 2500, 5000];

  const handleDonate = () => {
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="donate" className="py-20 md:py-28 bg-[var(--section-alt)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle
          tag="Make a Difference"
          title="Your Donation "
          highlight="Saves Lives"
          description="Every rupee donated goes directly to healthcare services for the people of Gilgit-Baltistan. No administrative overhead — 100% impact."
        />

        {/* Islamic charity section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-emerald-700 to-teal-800 text-white overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 text-9xl opacity-10 select-none">☪</div>
          <div className="relative">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-6 h-6 text-yellow-300" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 font-heading">Zakat & Sadaqah Eligible</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-4 max-w-2xl">
                  Baltistan Medical Trust is an eligible recipient for Zakat and Sadaqah. Your obligatory
                  or voluntary charity spent on saving lives and alleviating suffering is among the most
                  virtuous deeds in Islam. <em>&quot;Whoever saves a life, it is as if he saved all of mankind.&quot;</em>{" "}
                  — Al-Quran (5:32)
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1.5 rounded-full bg-white/15 border border-white/20 text-sm font-medium">
                    ✓ Zakat Eligible
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-white/15 border border-white/20 text-sm font-medium">
                    ✓ Sadaqah Jariyah
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-white/15 border border-white/20 text-sm font-medium">
                    ✓ Tax Certificate Provided
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-white/15 border border-white/20 text-sm font-medium">
                    ✓ 100% Transparency
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 mb-16">
          {/* Donation form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 md:p-8 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] shadow-xl"
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 font-heading flex items-center gap-2">
              <Heart className="w-5 h-5 text-red-500 fill-red-500" />
              Make a Donation
            </h3>

            {/* Donation type */}
            <div className="flex rounded-xl p-1 bg-slate-100 dark:bg-slate-800 mb-6 gap-1">
              {(["once", "monthly"] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setDonationType(type)}
                  className={`flex-1 py-2 rounded-lg text-sm font-semibold capitalize transition-all ${
                    donationType === type
                      ? "bg-white dark:bg-slate-700 text-primary-700 dark:text-teal-400 shadow-sm"
                      : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-200"
                  }`}
                >
                  {type === "once" ? "One Time" : "Monthly"}
                </button>
              ))}
            </div>

            {/* Preset amounts */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
              {presetAmounts.map((amt) => (
                <button
                  key={amt}
                  onClick={() => { setSelectedAmount(amt); setCustomAmount(""); }}
                  className={`py-2.5 rounded-xl text-sm font-bold transition-all border-2 ${
                    selectedAmount === amt
                      ? "border-primary-600 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-teal-400"
                      : "border-[var(--border-color)] bg-[var(--card-bg)] text-slate-700 dark:text-slate-300 hover:border-primary-300"
                  }`}
                >
                  ₨{amt.toLocaleString()}
                </button>
              ))}
            </div>

            {/* Custom amount */}
            <div className="mb-6">
              <input
                type="number"
                placeholder="Or enter custom amount (₨)"
                value={customAmount}
                onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(null); }}
                className="w-full px-4 py-3 rounded-xl border-2 border-[var(--border-color)] bg-[var(--card-bg)] text-slate-900 dark:text-white text-sm focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
              />
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 flex items-center gap-3 mb-4"
              >
                <CheckCircle className="w-5 h-5 text-green-600" />
                <p className="text-sm font-medium text-green-700 dark:text-green-400">
                  JazakAllah Khair! Your donation is being processed. You&apos;ll receive a confirmation.
                </p>
              </motion.div>
            ) : null}

            <button
              onClick={handleDonate}
              disabled={!selectedAmount && !customAmount}
              className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-primary-700 to-teal-600 hover:from-primary-800 hover:to-teal-700 transition-all shadow-lg hover:shadow-primary-500/25 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2"
            >
              <Heart className="w-5 h-5 fill-white" />
              Donate {selectedAmount ? `₨${selectedAmount.toLocaleString()}` : customAmount ? `₨${parseInt(customAmount).toLocaleString()}` : "Now"}
              {donationType === "monthly" && " / month"}
            </button>

            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mt-4 text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <Lock className="w-3 h-3" /> Secure Payment
              </span>
              <span>|</span>
              <span className="flex items-center gap-1">
                <CreditCard className="w-3 h-3" /> Card / Bank Transfer
              </span>
              <span>|</span>
              <span className="flex items-center gap-1">
                <Smartphone className="w-3 h-3" /> EasyPaisa / JazzCash
              </span>
            </div>
          </motion.div>

          {/* Impact cards */}
          <div className="flex flex-col justify-center space-y-4">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading">
              See Your Impact
            </h3>
            {impactCards.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] card-hover"
              >
                <div className="text-3xl">{card.icon}</div>
                <div>
                  <span className="font-bold text-primary-700 dark:text-teal-400 text-lg font-heading">
                    ₨{card.amount}
                  </span>
                  <span className="text-slate-600 dark:text-slate-400 text-sm ml-2">{card.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Active Campaigns */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 font-heading">
            Active Campaigns
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {campaigns.map((campaign, i) => (
              <motion.div
                key={campaign.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-3xl overflow-hidden bg-[var(--card-bg)] border border-[var(--border-color)] card-hover"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={campaign.image}
                    alt={campaign.title}
                    className="w-full h-full object-cover"
                  />
                  {campaign.urgent && (
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-red-600 text-white text-xs font-bold">
                      URGENT
                    </div>
                  )}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs">
                    {campaign.daysLeft} days left
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-2 font-heading line-clamp-2">
                    {campaign.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">
                    {campaign.desc}
                  </p>

                  {/* Progress */}
                  <div className="mb-3">
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="font-semibold text-primary-700 dark:text-teal-400">
                        ₨{campaign.raised.toLocaleString()}
                      </span>
                      <span className="text-slate-400">of ₨{campaign.goal.toLocaleString()}</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-700 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(campaign.raised / campaign.goal) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: i * 0.1 }}
                        className="h-full rounded-full bg-gradient-to-r from-primary-600 to-teal-500"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">{campaign.donors} donors</span>
                    <span className="text-xs font-semibold text-primary-600 dark:text-teal-400">
                      {Math.round((campaign.raised / campaign.goal) * 100)}% funded
                    </span>
                  </div>

                  <button className="mt-4 w-full py-2 rounded-xl text-sm font-semibold text-primary-700 dark:text-teal-400 border border-primary-200 dark:border-primary-700 hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-all">
                    Donate to This Campaign
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Monthly memberships */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center font-heading">
            Monthly Donor Membership
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {membershipTiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative rounded-3xl p-6 border-2 card-hover ${
                  tier.recommended
                    ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20"
                    : "border-[var(--border-color)] bg-[var(--card-bg)]"
                }`}
              >
                {tier.recommended && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-primary-600 to-teal-500 text-white text-xs font-bold">
                    <Star className="w-3 h-3 fill-white" />
                    Most Popular
                  </div>
                )}
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${tier.color} flex items-center justify-center mb-4 shadow-lg`}
                >
                  <Heart className="w-6 h-6 text-white fill-white" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1 font-heading">
                  {tier.name}
                </h4>
                <div className="flex items-end gap-1 mb-4">
                  <span className="text-3xl font-extrabold text-slate-900 dark:text-white font-heading">
                    ₨{tier.amount.toLocaleString()}
                  </span>
                  <span className="text-sm text-slate-400 pb-1">/month</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {tier.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {perk}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    tier.recommended
                      ? "bg-gradient-to-r from-primary-700 to-teal-600 text-white shadow-lg hover:shadow-primary-500/25 hover:-translate-y-0.5"
                      : "border border-[var(--border-color)] text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"
                  }`}
                >
                  Join as {tier.name}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
