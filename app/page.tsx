import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import BloodDonation from "./components/BloodDonation";
import CampaignReport from "./components/CampaignReport";
import MedicalServices from "./components/MedicalServices";
// import Donation from "./components/Donation"; // TODO: re-enable once payment method is implemented
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
        <CampaignReport />
        <MedicalServices />
        {/* <Donation /> */}  {/* TODO: re-enable once payment method is implemented */}
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
