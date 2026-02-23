import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Shield } from "lucide-react";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/admin");
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-navy flex items-center justify-center px-6 py-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(236,185,73,0.18),transparent_35%),radial-gradient(circle_at_85%_88%,rgba(27,164,196,0.12),transparent_40%)]" />
      <div className="absolute -top-24 -left-20 h-64 w-64 rounded-full bg-gold/15 blur-3xl" />
      <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

      <Card className="relative w-full max-w-md bg-card/95 backdrop-blur-xl border-gold/30 rounded-2xl shadow-[0_30px_80px_-35px_hsl(var(--gold)/0.55)]">
        <CardHeader className="text-center">
          <Link to="/" className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-gold transition-colors mx-auto mb-2">
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Home
          </Link>
          <Link to="/" className="font-brand text-4xl font-semibold text-primary mb-2 inline-block">
            TEJA
          </Link>
          <p className="font-nav text-xs text-gold uppercase tracking-[0.24em]">Secure Access</p>
          <div className="flex items-center justify-center gap-2 mb-1 mt-1">
            <Shield className="w-5 h-5 text-gold" />
            <CardTitle className="font-heading text-2xl">Admin Login</CardTitle>
          </div>
          <p className="text-sm text-muted-foreground">Restricted area for TEJA operations management.</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label className="text-sm text-foreground/85">Email</Label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@teja.com"
                className="h-11 rounded-xl bg-background/80 border-gold/30 focus-visible:ring-gold"
                required
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm text-foreground/85">Password</Label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Admin password"
                className="h-11 rounded-xl bg-background/80 border-gold/30 focus-visible:ring-gold"
                required
              />
            </div>
            <Button type="submit" className="w-full h-11 rounded-xl bg-gold text-accent-foreground hover:bg-gold-light font-heading font-semibold">
              Login as Admin
            </Button>
          </form>
          <p className="mt-7 text-center text-sm text-muted-foreground">
            <Link to="/login" className="text-primary hover:underline">Back to user login</Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;


