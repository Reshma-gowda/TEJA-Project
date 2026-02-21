import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "We'll get back to you soon." });
    setForm({ firstName: "", lastName: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-navy">
      <div className="container mx-auto px-6 max-w-2xl">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground text-center mb-4">
          Contact Us
        </h2>
        <p className="text-center text-gold-light/70 mb-12">
          Have a project in mind? Let's discuss how we can help.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-primary-foreground/80">First Name</Label>
              <Input
                value={form.firstName}
                onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                className="bg-navy-foreground/5 border-primary/30 text-primary-foreground placeholder:text-primary-foreground/30"
                placeholder="John"
                required
              />
            </div>
            <div className="space-y-2">
              <Label className="text-primary-foreground/80">Last Name</Label>
              <Input
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                className="bg-navy-foreground/5 border-primary/30 text-primary-foreground placeholder:text-primary-foreground/30"
                placeholder="Doe"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label className="text-primary-foreground/80">Email</Label>
            <Input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="bg-navy-foreground/5 border-primary/30 text-primary-foreground placeholder:text-primary-foreground/30"
              placeholder="john@example.com"
              required
            />
          </div>
          <div className="space-y-2">
            <Label className="text-primary-foreground/80">Subject</Label>
            <Input
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              className="bg-navy-foreground/5 border-primary/30 text-primary-foreground placeholder:text-primary-foreground/30"
              placeholder="Translation project"
              required
            />
          </div>
          <div className="space-y-2">
            <Label className="text-primary-foreground/80">Message</Label>
            <Textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="bg-navy-foreground/5 border-primary/30 text-primary-foreground placeholder:text-primary-foreground/30 min-h-[120px]"
              placeholder="Tell us about your project..."
              required
            />
          </div>
          <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-teal-light font-heading font-semibold">
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
