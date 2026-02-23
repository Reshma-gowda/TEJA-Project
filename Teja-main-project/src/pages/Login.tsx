import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/intern");
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-navy flex items-center justify-center px-6 py-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(27,164,196,0.16),transparent_38%),radial-gradient(circle_at_85%_85%,rgba(236,185,73,0.12),transparent_42%)]" />
      <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

      <Card className="relative w-full max-w-md bg-card/95 backdrop-blur-xl border-primary/20 rounded-2xl shadow-[0_30px_80px_-35px_hsl(var(--primary)/0.55)]">
        <CardHeader className="text-center">
          <Link to="/" className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors mx-auto mb-2">
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Home
          </Link>
          <Link to="/" className="font-brand text-4xl font-semibold text-primary mb-2 inline-block">
            TEJA
          </Link>
          <p className="font-nav text-xs text-primary/80 uppercase tracking-[0.24em]">Client Portal</p>
          <CardTitle className="font-heading text-2xl">Welcome Back</CardTitle>
          <p className="text-sm text-muted-foreground">Sign in to manage your assigned workflows.</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label className="text-sm text-foreground/85">Email</Label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="h-11 rounded-xl bg-background/80 border-primary/20 focus-visible:ring-primary"
                required
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm text-foreground/85">Password</Label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your password"
                className="h-11 rounded-xl bg-background/80 border-primary/20 focus-visible:ring-primary"
                required
              />
            </div>
            <Button type="submit" className="w-full h-11 rounded-xl bg-primary text-primary-foreground hover:bg-teal-light font-heading font-semibold">
              Login
            </Button>
          </form>

          <div className="mt-7 text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link to="/signup" className="text-primary hover:underline font-medium">
                Sign Up
              </Link>
            </p>
            <Link to="/admin-login" className="text-xs text-muted-foreground hover:text-primary transition-colors font-nav">
              Login as Admin
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;


