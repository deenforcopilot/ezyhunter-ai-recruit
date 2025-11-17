import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Building2, Search, MapPin, DollarSign, Clock, Briefcase, Heart, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const JobBrowser = () => {
  const [savedJobs, setSavedJobs] = useState<number[]>([]);

  const jobs = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      company: "TechCorp",
      location: "Bangkok",
      salary: "฿60,000 - ฿90,000",
      type: "Full-time",
      posted: "2 days ago",
      matchScore: 92,
      skills: ["React", "Node.js", "AWS", "TypeScript"],
      description: "Join our growing team to build scalable web applications using modern tech stack. We're looking for someone passionate about clean code and user experience."
    },
    {
      id: 2,
      title: "Product Manager",
      company: "StartupX",
      location: "Remote",
      salary: "฿80,000 - ฿120,000",
      type: "Full-time",
      posted: "1 day ago",
      matchScore: 85,
      skills: ["Product Strategy", "Agile", "Data Analysis"],
      description: "Drive product vision for our fintech platform. Work with cross-functional teams to deliver exceptional user experiences."
    },
    {
      id: 3,
      title: "UX/UI Designer",
      company: "DesignHub",
      location: "Chiang Mai",
      salary: "฿50,000 - ฿70,000",
      type: "Full-time",
      posted: "3 days ago",
      matchScore: 78,
      skills: ["Figma", "UI Design", "User Research"],
      description: "Create beautiful and intuitive interfaces for mobile and web applications. Collaborate with product and engineering teams."
    },
    {
      id: 4,
      title: "DevOps Engineer",
      company: "CloudTech",
      location: "Bangkok",
      salary: "฿70,000 - ฿100,000",
      type: "Full-time",
      posted: "5 days ago",
      matchScore: 88,
      skills: ["Kubernetes", "Docker", "CI/CD", "AWS"],
      description: "Build and maintain cloud infrastructure. Automate deployment processes and ensure system reliability."
    },
  ];

  const toggleSave = (jobId: number) => {
    if (savedJobs.includes(jobId)) {
      setSavedJobs(savedJobs.filter(id => id !== jobId));
      toast({ description: "Removed from saved jobs" });
    } else {
      setSavedJobs([...savedJobs, jobId]);
      toast({ description: "Job saved successfully" });
    }
  };

  const handleApply = (jobTitle: string) => {
    toast({
      title: "Application Submitted",
      description: `Your application for ${jobTitle} has been sent`,
    });
  };

  return (
    <div className="min-h-screen bg-secondary">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-orange-500 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">EzyHunter</span>
            </Link>
            <Badge variant="secondary">Browse Jobs</Badge>
          </div>
          <Link to="/candidate">
            <Button variant="outline" size="sm">Back to Dashboard</Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Find Your Next Opportunity</h1>
          <p className="text-muted-foreground">Discover jobs matched to your skills and preferences</p>
        </div>

        {/* Search and Filters */}
        <Card className="p-4 mb-6">
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input placeholder="Search jobs, companies, or keywords..." className="pl-10" />
            </div>
            <select className="px-4 py-2 border rounded-md bg-white">
              <option>All Locations</option>
              <option>Bangkok</option>
              <option>Chiang Mai</option>
              <option>Remote</option>
            </select>
            <select className="px-4 py-2 border rounded-md bg-white">
              <option>All Types</option>
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Contract</option>
            </select>
            <Button className="shadow-orange">Search</Button>
          </div>
        </Card>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Job Listings */}
          <div className="lg:col-span-2 space-y-4">
            {jobs.map((job) => (
              <Card key={job.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex gap-4 flex-1">
                    <div className="w-14 h-14 rounded-lg bg-primary-light flex items-center justify-center text-xl font-bold text-primary flex-shrink-0">
                      {job.company.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-bold mb-1">{job.title}</h3>
                          <p className="text-muted-foreground mb-2">{job.company}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">{job.matchScore}%</div>
                          <div className="text-xs text-muted-foreground">Match</div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <DollarSign className="w-4 h-4" />
                          {job.salary}
                        </span>
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.posted}
                        </span>
                      </div>

                      <p className="text-sm text-muted-foreground mb-3">
                        {job.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {job.skills.map(skill => (
                          <Badge key={skill} variant="secondary">{skill}</Badge>
                        ))}
                      </div>

                      <div className="flex gap-2">
                        <Button onClick={() => handleApply(job.title)} className="shadow-orange">
                          Apply Now
                        </Button>
                        <Button variant="outline">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Chat with Recruiter
                        </Button>
                        <Button 
                          variant="outline" 
                          size="icon"
                          onClick={() => toggleSave(job.id)}
                          className={savedJobs.includes(job.id) ? "text-primary" : ""}
                        >
                          <Heart className={`w-4 h-4 ${savedJobs.includes(job.id) ? "fill-current" : ""}`} />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Saved Jobs */}
            <Card className="p-6">
              <h3 className="font-bold mb-4">Saved Jobs ({savedJobs.length})</h3>
              <p className="text-sm text-muted-foreground">
                {savedJobs.length === 0 ? "No saved jobs yet" : "Click heart icon to save jobs"}
              </p>
            </Card>

            {/* Profile Completion */}
            <Card className="p-6 bg-primary-light">
              <h3 className="font-bold mb-3">Complete Your Profile</h3>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span>Profile Strength</span>
                  <span className="font-medium">75%</span>
                </div>
                <div className="h-2 bg-white/50 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-3/4" />
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full">
                Complete Profile
              </Button>
            </Card>

            {/* Quick Stats */}
            <Card className="p-6">
              <h3 className="font-bold mb-4">Your Activity</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Applications Sent</span>
                  <span className="font-medium">12</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Profile Views</span>
                  <span className="font-medium">45</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Interview Invites</span>
                  <span className="font-medium">3</span>
                </div>
              </div>
            </Card>

            {/* Tips */}
            <Card className="p-6">
              <h3 className="font-bold mb-3">Job Search Tips</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Update your profile regularly</li>
                <li>• Apply within 24 hours</li>
                <li>• Customize applications</li>
                <li>• Follow up with recruiters</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobBrowser;
