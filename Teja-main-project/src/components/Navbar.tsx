import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "Solutions", href: "/#solutions" },
    { label: "Career", href: "/#career" },
    { label: "Contact Us", href: "/#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-primary/20">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-brand text-2xl font-bold text-primary-foreground">
          TEJA
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-nav text-sm text-muted-foreground hover:text-primary-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
          <Link to="/login">
            <Button variant="outline" size="sm" className="font-heading border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Try Teja
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-primary-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-navy border-t border-primary/20 px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-nav block text-sm text-muted-foreground hover:text-primary-foreground transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Link to="/login" onClick={() => setMobileOpen(false)}>
            <Button variant="outline" size="sm" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Try Teja
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

