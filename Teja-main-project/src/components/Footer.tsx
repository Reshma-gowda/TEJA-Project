const Footer = () => {
  return (
    <footer className="bg-navy py-12 border-t border-primary/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-heading text-xl font-bold text-primary-foreground tracking-tight">
            TEJA
          </div>
          <div className="flex gap-8">
            <a href="/#solutions" className="text-sm text-muted-foreground hover:text-primary-foreground transition-colors">
              Solutions
            </a>
            <a href="/#career" className="text-sm text-muted-foreground hover:text-primary-foreground transition-colors">
              Career
            </a>
            <a href="/#contact" className="text-sm text-muted-foreground hover:text-primary-foreground transition-colors">
              Contact
            </a>
          </div>
          <p className="text-xs text-muted-foreground">
            © 2026 TEJA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
