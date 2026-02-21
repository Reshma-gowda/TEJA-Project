import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/intern");
  };

  return (
    <div className="min-h-screen bg-navy flex items-center justify-center px-6">
      <Card className="w-full max-w-md bg-card border-primary/20">
        <CardHeader className="text-center">
          <Link to="/" className="font-heading text-3xl font-bold text-primary mb-2 inline-block">
            TEJA
          </Link>
          <CardTitle className="font-heading text-xl">Welcome Back</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label>Email</Label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label>Password</Label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your password"
                required
              />
            </div>
            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-teal-light font-heading font-semibold">
              Login
            </Button>
          </form>

          <div className="mt-6 text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link to="/signup" className="text-primary hover:underline font-medium">
                Sign Up
              </Link>
            </p>
            <Link to="/admin-login" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Login as Admin
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
