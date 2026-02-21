import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ClientsSection from "@/components/ClientsSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import CareerSection from "@/components/CareerSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ClientsSection />
      <ServicesSection />
      <CareerSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
