import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import BloodDonation from "./components/BloodDonation";
import MedicalServices from "./components/MedicalServices";
import Donation from "./components/Donation";
import SuccessStories from "./components/SuccessStories";
import Gallery from "./components/Gallery";
import Events from "./components/Events";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <BloodDonation />
        <MedicalServices />
        <Donation />
        <SuccessStories />
        <Gallery />
        <Events />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
