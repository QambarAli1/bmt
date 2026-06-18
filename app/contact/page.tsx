import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Baltistan Medical Trust for blood requests, volunteering, donations, or partnerships. 24/7 emergency hotline available.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Page header */}
        <div className="py-16 md:py-24 bg-gradient-to-br from-primary-900 to-teal-900 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 mountain-pattern opacity-20" />
          <div className="relative max-w-3xl mx-auto px-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-teal-300 animate-pulse" />
              We&apos;re Here to Help
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold font-heading mb-4">
              Contact Us
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Whether it&apos;s a blood emergency, a donation inquiry, or wanting to volunteer — reach
              out and our team will respond promptly.
            </p>
          </div>
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
