import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Languages, Mic, LogOut, Download, Upload, MessageSquare } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface AllocatedTask {
  id: number;
  name: string;
  fromLang: string;
  toLang: string;
  downloadLink: string;
  driveLink: string;
  type: string;
}

const mockAllocatedTasks: AllocatedTask[] = [
  { id: 1, name: "Product Manual", fromLang: "German", toLang: "Marathi", downloadLink: "#", driveLink: "https://drive.google.com/example", type: "Translation" },
  { id: 2, name: "Interview Audio", fromLang: "Hindi", toLang: "English", downloadLink: "#", driveLink: "", type: "Transcription" },
];

const InternDashboard = () => {
  const [activeTab, setActiveTab] = useState("translation");
  const [feedback, setFeedback] = useState("");
  const [selectedTask, setSelectedTask] = useState<number | null>(null);

  const filteredTasks = mockAllocatedTasks.filter(
    (t) => t.type.toLowerCase() === activeTab
  );

  const handleSubmitWork = (taskId: number) => {
    toast({ title: "Work submitted!", description: "Your file has been submitted for review." });
  };

  const handleFeedback = (taskId: number) => {
    if (!feedback.trim()) return;
    toast({ title: "Feedback sent", description: "Your feedback has been submitted." });
    setFeedback("");
    setSelectedTask(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-navy border-b border-primary/20">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="font-brand text-2xl font-bold text-primary-foreground tracking-tight">
            TEJA
          </Link>
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="border-primary text-primary font-heading">Intern</Badge>
            <Link to="/">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary-foreground">
                <LogOut className="w-4 h-4 mr-2" /> Logout
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <h1 className="font-heading text-2xl font-bold text-foreground mb-6">Intern Dashboard</h1>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="translation" className="font-heading gap-2">
              <Languages className="w-4 h-4" /> Translation
            </TabsTrigger>
            <TabsTrigger value="transcription" className="font-heading gap-2">
              <Mic className="w-4 h-4" /> Transcription
            </TabsTrigger>
          </TabsList>

          {["translation", "transcription"].map((tab) => (
            <TabsContent key={tab} value={tab}>
              <div className="space-y-4">
                <h2 className="font-heading text-lg font-semibold text-foreground">Allocated Tasks</h2>

                {filteredTasks.length > 0 ? (
                  filteredTasks.map((task) => (
                    <Card key={task.id} className="border-border">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="font-heading text-base">{task.name}</CardTitle>
                          <Badge variant="outline" className="border-primary text-primary text-xs">
                            {task.fromLang} → {task.toLang}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {/* Download & Links */}
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label className="text-muted-foreground text-xs uppercase tracking-wider">Download File</Label>
                            <Button variant="outline" size="sm" className="w-full justify-start gap-2">
                              <Download className="w-4 h-4" /> Download Source File
                            </Button>
                          </div>
                          {task.driveLink && (
                            <div className="space-y-2">
                              <Label className="text-muted-foreground text-xs uppercase tracking-wider">Drive Link</Label>
                              <Input value={task.driveLink} readOnly className="text-xs" />
                            </div>
                          )}
                        </div>

                        {/* Upload Work */}
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label className="text-muted-foreground text-xs uppercase tracking-wider">Upload Completed File</Label>
                            <div className="flex gap-2">
                              <Input type="file" className="text-xs" />
                              <Button size="sm" onClick={() => handleSubmitWork(task.id)} className="bg-primary text-primary-foreground hover:bg-teal-light">
                                <Upload className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label className="text-muted-foreground text-xs uppercase tracking-wider">Or Drive Link</Label>
                            <Input placeholder="Paste your drive link" className="text-xs" />
                          </div>
                        </div>

                        {/* Feedback */}
                        <div className="border-t border-border pt-4">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-muted-foreground gap-2"
                            onClick={() => setSelectedTask(selectedTask === task.id ? null : task.id)}
                          >
                            <MessageSquare className="w-4 h-4" /> Feedback
                          </Button>
                          {selectedTask === task.id && (
                            <div className="mt-3 space-y-3">
                              <Textarea
                                value={feedback}
                                onChange={(e) => setFeedback(e.target.value)}
                                placeholder="If anything needs to be changed or data is corrupt, fill this feedback..."
                                className="text-sm"
                              />
                              <Button size="sm" onClick={() => handleFeedback(task.id)} className="bg-primary text-primary-foreground hover:bg-teal-light font-heading">
                                Submit Feedback
                              </Button>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <Card className="border-border">
                    <CardContent className="py-12 text-center text-muted-foreground">
                      No tasks allocated yet. Check back soon.
                    </CardContent>
                  </Card>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </main>
    </div>
  );
};

export default InternDashboard;


