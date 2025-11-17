import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Building2, Search, Briefcase, DollarSign, Clock, Users, TrendingUp, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

const JobMarketplace = () => {
  const jobs = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      company: "TechCorp",
      location: "Bangkok",
      commission: "฿45,000",
      deadline: "7 days left",
      urgency: "Urgent",
      candidates: 24,
      skills: ["React", "Node.js", "AWS"],
      description: "Looking for experienced full-stack developer to join growing team",
      recruiterCount: 5
    },
    {
      id: 2,
      title: "Product Manager",
      company: "StartupX",
      location: "Remote",
      commission: "฿38,000",
      deadline: "12 days left",
      urgency: "Normal",
      candidates: 18,
      skills: ["Product Strategy", "Agile", "Data Analysis"],
      description: "Drive product vision and strategy for fintech platform",
      recruiterCount: 3
    },
    {
      id: 3,
      title: "UX/UI Designer",
      company: "DesignHub",
      location: "Chiang Mai",
      commission: "฿30,000",
      deadline: "5 days left",
      urgency: "Very Urgent",
      candidates: 32,
      skills: ["Figma", "UI Design", "User Research"],
      description: "Create beautiful user experiences for mobile applications",
      recruiterCount: 7
    },
    {
      id: 4,
      title: "DevOps Engineer",
      company: "CloudTech",
      location: "Bangkok",
      commission: "฿42,000",
      deadline: "10 days left",
      urgency: "Normal",
      candidates: 15,
      skills: ["Kubernetes", "Docker", "CI/CD"],
      description: "Build and maintain cloud infrastructure",
      recruiterCount: 4
    },
  ];

  const handleTakeJob = (jobTitle: string) => {
    toast({
      title: "Job Accepted",
      description: `You are now working on ${jobTitle}`,
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
            <Badge variant="secondary">Job Marketplace</Badge>
          </div>
          <Link to="/recruiter">
            <Button variant="outline" size="sm">Back to Dashboard</Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Job Marketplace</h1>
          <p className="text-muted-foreground">Browse available jobs and start earning commissions</p>
        </div>

        {/* Search and Filters */}
        <Card className="p-4 mb-6">
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input placeholder="Search jobs..." className="pl-10" />
            </div>
            <select className="px-4 py-2 border rounded-md bg-white">
              <option>All Locations</option>
              <option>Bangkok</option>
              <option>Chiang Mai</option>
              <option>Remote</option>
            </select>
            <select className="px-4 py-2 border rounded-md bg-white">
              <option>All Urgency</option>
              <option>Very Urgent</option>
              <option>Urgent</option>
              <option>Normal</option>
            </select>
          </div>
        </Card>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold">48</div>
                <div className="text-xs text-muted-foreground">Active Jobs</div>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-success" />
              </div>
              <div>
                <div className="text-2xl font-bold">฿1.8M</div>
                <div className="text-xs text-muted-foreground">Total Commission Pool</div>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-info/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-info" />
              </div>
              <div>
                <div className="text-2xl font-bold">12</div>
                <div className="text-xs text-muted-foreground">Urgent Jobs</div>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-warning" />
              </div>
              <div>
                <div className="text-2xl font-bold">฿42K</div>
                <div className="text-xs text-muted-foreground">Avg. Commission</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Job Listings */}
        <div className="grid lg:grid-cols-2 gap-6">
          {jobs.map((job) => (
            <Card key={job.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold">{job.title}</h3>
                    <Badge 
                      variant={job.urgency === "Very Urgent" ? "destructive" : job.urgency === "Urgent" ? "default" : "secondary"}
                      className={job.urgency === "Urgent" ? "bg-warning text-white" : ""}
                    >
                      {job.urgency}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{job.company}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {job.deadline}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">{job.commission}</div>
                  <div className="text-xs text-muted-foreground">Commission</div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4">{job.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {job.skills.map(skill => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {job.candidates} candidates
                  </span>
                  <span>{job.recruiterCount} recruiters working</span>
                </div>
                <Button onClick={() => handleTakeJob(job.title)} className="shadow-orange">
                  Take Job
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobMarketplace;
