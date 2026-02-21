import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-navy/70" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="font-heading text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
          Breaking Language
          <br />
          <span className="text-gradient">Barriers Worldwide</span>
        </h1>
        <p className="text-lg md:text-xl text-gold-light max-w-2xl mx-auto mb-10 font-light">
          Professional translation, transcription, and dubbing services that connect your business to every corner of the globe.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/login">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-teal-light px-8 py-6 text-base font-heading font-semibold">
              Get Started
            </Button>
          </Link>
          <a href="#solutions">
            <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold hover:text-accent-foreground px-8 py-6 text-base font-heading font-semibold">
              Our Solutions
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
