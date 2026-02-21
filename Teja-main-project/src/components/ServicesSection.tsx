import { Languages, Mic, Volume2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Languages,
    title: "Translation Service",
    description:
      "Accurate, culturally-aware translations across 100+ languages. From documents to websites, we deliver precision at scale.",
  },
  {
    icon: Mic,
    title: "Transcription & Recording",
    description:
      "Convert audio and video content into text with industry-leading accuracy. Supporting all major languages and formats.",
  },
  {
    icon: Volume2,
    title: "Dubbing & Voiceover",
    description:
      "Professional dubbing and voiceover services that preserve the emotion and intent of your original content.",
  },
];

const ServicesSection = () => {
  return (
    <section id="solutions" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          Our Solutions
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
          Comprehensive language services tailored to your business needs
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-heading text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
