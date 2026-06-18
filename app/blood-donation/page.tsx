import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import BloodDonation from "../components/BloodDonation";
import SuccessStories from "../components/SuccessStories";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Blood Donation",
  description:
    "Register as a blood donor or request emergency blood in Gilgit-Baltistan. Baltistan Medical Trust operates a 24/7 blood donor network.",
};

export default function BloodDonationPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Page header */}
        <div className="py-16 md:py-24 bg-gradient-to-br from-red-800 to-primary-900 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 mountain-pattern opacity-20" />
          <div className="relative max-w-3xl mx-auto px-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/30 border border-red-400/40 text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-red-300 animate-pulse" />
              24/7 Blood Donor Network
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold font-heading mb-4">
              Blood Donation
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              One donation saves up to 3 lives. Be a hero — register as a donor or request blood
              for emergencies across Gilgit-Baltistan.
            </p>
          </div>
        </div>
        <BloodDonation />
        <SuccessStories />
      </main>
      <Footer />
    </>
  );
}
