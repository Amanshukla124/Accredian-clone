import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import FeaturesGrid from "@/components/sections/FeaturesGrid";
import StatsSection from "@/components/sections/StatsSection";
import UniversityPartners from "@/components/sections/UniversityPartners";
import Testimonials from "@/components/sections/Testimonials";
import ContactForm from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TrustBar />
        <FeaturesGrid />
        <StatsSection />
        <UniversityPartners />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
