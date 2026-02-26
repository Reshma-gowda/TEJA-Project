import { useMemo, useState } from "react";
import { Briefcase, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type CareerRole = {
  hiring: boolean;
  jobRole: string;
  team: string;
  location: string;
  jobDescription: string;
};

const roles: CareerRole[] = [
  {
    hiring: true,
    jobRole: "Project Coordinator",
    team: "Operations",
    location: "Bangalore",
    jobDescription:
      "Coordinate translation and dubbing project timelines, follow up with linguists and clients, and keep delivery quality on track.",
  },
  {
    hiring: true,
    jobRole: "Localization Specialist",
    team: "Language Services",
    location: "Bangalore",
    jobDescription:
      "Manage multilingual content adaptation, quality checks, and terminology consistency across client projects.",
  },
];

const CareerSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<"hiring" | "all">("hiring");

  const normalizedSearch = searchTerm.trim().toLowerCase();

  const matchedRoles = useMemo(() => {
    if (!normalizedSearch) {
      return roles;
    }

    return roles.filter((role) =>
      [role.jobRole, role.team, role.location, role.jobDescription].join(" ").toLowerCase().includes(normalizedSearch),
    );
  }, [normalizedSearch]);

  const visibleRoles = useMemo(() => {
    if (statusFilter === "all") {
      return matchedRoles;
    }
    return matchedRoles.filter((role) => role.hiring);
  }, [matchedRoles, statusFilter]);

  const showNotHiringForRoleMessage = normalizedSearch.length > 0 && visibleRoles.length === 0;

  return (
    <section id="career" className="py-24 bg-secondary">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Careers
        </h2>
        <p className="text-muted-foreground mb-12">
          Join our team of language professionals
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="md:col-span-2 relative">
            <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
            <Input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search roles"
              className="pl-9"
            />
          </div>
          <Select value={statusFilter} onValueChange={(value) => setStatusFilter(value as "hiring" | "all")}>
            <SelectTrigger>
              <SelectValue placeholder="Filter status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="hiring">Hiring Roles</SelectItem>
              <SelectItem value="all">All Roles</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {visibleRoles.length > 0 ? (
          <div className="space-y-4">
            {visibleRoles.map((role) => (
              <Card key={`${role.jobRole}-${role.location}`} className="border-border text-left">
                <CardHeader>
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center mb-3">
                    <Briefcase className="w-5 h-5 text-accent" />
                  </div>
                  <CardTitle className="font-heading text-xl">{role.jobRole}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {role.team} | {role.location}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">Hiring</p>
                    <p className="text-foreground font-medium">{role.hiring ? "Yes" : "No"}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">Job Role</p>
                    <p className="text-foreground font-medium">{role.jobRole}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">Job Description</p>
                    <p className="text-muted-foreground text-sm">{role.jobDescription}</p>
                  </div>
                  {role.hiring && (
                    <div className="border-t border-border pt-4">
                      <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Apply</p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <Input type="email" placeholder="Your email" className="md:col-span-2" />
                        <Input type="file" accept=".pdf,.doc,.docx" />
                      </div>
                      <Button type="button" className="mt-3">
                        Send Resume
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="border-border">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-6 h-6 text-accent" />
              </div>
              <CardTitle className="font-heading text-xl">
                {showNotHiringForRoleMessage ? "Not Hiring For This Role" : "Currently Not Hiring"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                {showNotHiringForRoleMessage
                  ? "We are not hiring for that role right now."
                  : "We don't have any open positions right now. Check back soon or reach out via our contact form to express your interest."}
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};

export default CareerSection;
