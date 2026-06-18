import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Branches from "../components/Branches";
import Team from "../components/Team";
import SuccessStories from "../components/SuccessStories";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Baltistan Medical Trust – our mission, vision, story, team, and impact in Gilgit-Baltistan since 2009.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Page header */}
        <div className="py-16 md:py-24 mountain-gradient text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 mountain-pattern opacity-20" />
          <div className="relative max-w-3xl mx-auto px-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-teal-300 animate-pulse" />
              Our Story Since 2009
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold font-heading mb-4">
              About Baltistan Medical Trust
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              A grassroots healthcare movement born from the mountains of Gilgit-Baltistan, built by
              the people for the people.
            </p>
          </div>
        </div>
        <About />
        <Branches />
        <Team />
        <SuccessStories />
      </main>
      <Footer />
    </>
  );
}
