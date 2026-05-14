import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Donation from "../components/Donation";
import SuccessStories from "../components/SuccessStories";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support Baltistan Medical Trust with your Zakat, Sadaqah, or general donation. 100% of donations go directly to healthcare services in Gilgit-Baltistan.",
};

export default function DonatePage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Page header */}
        <div className="py-16 md:py-24 bg-gradient-to-br from-teal-900 to-primary-900 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 mountain-pattern opacity-20" />
          <div className="relative max-w-3xl mx-auto px-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/30 border border-emerald-400/40 text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
              Zakat &amp; Sadaqah Eligible
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold font-heading mb-4">
              Make a Donation
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Your generosity transforms lives in the mountains of Baltistan. Every rupee is
              accounted for — transparent, impactful, and blessed.
            </p>
          </div>
        </div>
        <Donation />
        <SuccessStories />
      </main>
      <Footer />
    </>
  );
}
