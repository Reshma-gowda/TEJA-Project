import { Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CareerSection = () => {
  return (
    <section id="career" className="py-24 bg-secondary">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Careers
        </h2>
        <p className="text-muted-foreground mb-12">
          Join our team of language professionals
        </p>

        <Card className="border-border">
          <CardHeader>
            <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mx-auto mb-4">
              <Briefcase className="w-6 h-6 text-accent" />
            </div>
            <CardTitle className="font-heading text-xl">Currently Not Hiring</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              We don't have any open positions right now. Check back soon or reach out via our contact form to express your interest.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CareerSection;
