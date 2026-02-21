import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield } from "lucide-react";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-navy flex items-center justify-center px-6">
      <Card className="w-full max-w-md bg-card border-gold/30">
        <CardHeader className="text-center">
          <Link to="/" className="font-heading text-3xl font-bold text-primary mb-2 inline-block">
            TEJA
          </Link>
          <div className="flex items-center justify-center gap-2 mb-1">
            <Shield className="w-5 h-5 text-gold" />
            <CardTitle className="font-heading text-xl">Admin Login</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label>Email</Label>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="admin@teja.com" required />
            </div>
            <div className="space-y-2">
              <Label>Password</Label>
              <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Admin password" required />
            </div>
            <Button type="submit" className="w-full bg-gold text-accent-foreground hover:bg-gold-light font-heading font-semibold">
              Login as Admin
            </Button>
          </form>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            <Link to="/login" className="text-primary hover:underline">Back to user login</Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;
