import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Languages, Mic, Volume2, LogOut, Plus } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface Task {
  id: number;
  name: string;
  fromLang: string;
  toLang: string;
  internName: string;
  status: "pending" | "in-progress" | "done";
  type: string;
}

const mockTasks: Task[] = [
  { id: 1, name: "Product Manual", fromLang: "German", toLang: "Marathi", internName: "Rahul S.", status: "done", type: "Translation" },
  { id: 2, name: "Interview Audio", fromLang: "Hindi", toLang: "English", internName: "Priya K.", status: "in-progress", type: "Transcription" },
  { id: 3, name: "Marketing Video", fromLang: "English", toLang: "Spanish", internName: "Carlos M.", status: "pending", type: "VoiceOver" },
];

const AdminDashboard = () => {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);
  const [activeTab, setActiveTab] = useState("translation");
  const [showCreate, setShowCreate] = useState(false);
  const [newTask, setNewTask] = useState({ name: "", fromLang: "", toLang: "", link: "" });

  const handleCreateTask = (e: React.FormEvent) => {
    e.preventDefault();
    const task: Task = {
      id: tasks.length + 1,
      name: newTask.name,
      fromLang: newTask.fromLang,
      toLang: newTask.toLang,
      internName: "Unassigned",
      status: "pending",
      type: activeTab === "translation" ? "Translation" : activeTab === "transcription" ? "Transcription" : "VoiceOver",
    };
    setTasks([...tasks, task]);
    setNewTask({ name: "", fromLang: "", toLang: "", link: "" });
    setShowCreate(false);
    toast({ title: "Task created", description: `${task.name} has been added.` });
  };

  const filteredTasks = tasks.filter(
    (t) => t.type.toLowerCase() === activeTab || activeTab === "all"
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-navy border-b border-primary/20">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="font-brand text-2xl font-bold text-primary-foreground tracking-tight">
            TEJA
          </Link>
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="border-gold text-gold font-heading">Admin</Badge>
            <Link to="/">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary-foreground">
                <LogOut className="w-4 h-4 mr-2" /> Logout
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <h1 className="font-heading text-2xl font-bold text-foreground mb-6">Admin Dashboard</h1>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="translation" className="font-heading gap-2">
              <Languages className="w-4 h-4" /> Translation
            </TabsTrigger>
            <TabsTrigger value="transcription" className="font-heading gap-2">
              <Mic className="w-4 h-4" /> Transcription
            </TabsTrigger>
            <TabsTrigger value="voiceover" className="font-heading gap-2">
              <Volume2 className="w-4 h-4" /> VoiceOver
            </TabsTrigger>
          </TabsList>

          {["translation", "transcription", "voiceover"].map((tab) => (
            <TabsContent key={tab} value={tab}>
              <div className="flex gap-4 mb-6">
                <Button onClick={() => setShowCreate(!showCreate)} className="bg-primary text-primary-foreground hover:bg-teal-light font-heading">
                  <Plus className="w-4 h-4 mr-2" /> Create Task
                </Button>
              </div>

              {/* Create Task Form */}
              {showCreate && (
                <Card className="mb-6 border-primary/20">
                  <CardHeader>
                    <CardTitle className="font-heading text-lg">New {tab.charAt(0).toUpperCase() + tab.slice(1)} Task</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleCreateTask} className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Task Name</Label>
                        <Input value={newTask.name} onChange={(e) => setNewTask({ ...newTask, name: e.target.value })} placeholder="Project name" required />
                      </div>
                      <div className="space-y-2">
                        <Label>From Language</Label>
                        <Select value={newTask.fromLang} onValueChange={(v) => setNewTask({ ...newTask, fromLang: v })}>
                          <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                          <SelectContent>
                            {["English", "Hindi", "German", "Spanish", "French", "Marathi", "Tamil"].map((l) => (
                              <SelectItem key={l} value={l}>{l}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>To Language</Label>
                        <Select value={newTask.toLang} onValueChange={(v) => setNewTask({ ...newTask, toLang: v })}>
                          <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                          <SelectContent>
                            {["English", "Hindi", "German", "Spanish", "French", "Marathi", "Tamil"].map((l) => (
                              <SelectItem key={l} value={l}>{l}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Drive Link (optional)</Label>
                        <Input value={newTask.link} onChange={(e) => setNewTask({ ...newTask, link: e.target.value })} placeholder="https://drive.google.com/..." />
                      </div>
                      <div className="sm:col-span-2 flex gap-3">
                        <Button type="submit" className="bg-primary text-primary-foreground hover:bg-teal-light font-heading">Create Task</Button>
                        <Button type="button" variant="outline" onClick={() => setShowCreate(false)}>Cancel</Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              )}

              {/* Task Status Table */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading text-lg">Task Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Languages</TableHead>
                        <TableHead>Intern</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredTasks.length > 0 ? filteredTasks.map((task) => (
                        <TableRow key={task.id}>
                          <TableCell className="font-medium">{task.name}</TableCell>
                          <TableCell className="text-muted-foreground">{task.fromLang} → {task.toLang}</TableCell>
                          <TableCell>{task.internName}</TableCell>
                          <TableCell>
                            <Badge
                              variant={task.status === "done" ? "default" : "outline"}
                              className={
                                task.status === "done"
                                  ? "bg-primary/20 text-primary border-primary/30"
                                  : task.status === "in-progress"
                                  ? "border-gold text-gold"
                                  : "border-muted-foreground text-muted-foreground"
                              }
                            >
                              {task.status}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      )) : (
                        <TableRow>
                          <TableCell colSpan={4} className="text-center text-muted-foreground py-8">
                            No tasks yet. Create one above.
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </main>
    </div>
  );
};

export default AdminDashboard;


