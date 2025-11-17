import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, TrendingUp, DollarSign, Award, Briefcase, Upload, Clock, Target } from "lucide-react";
import { Link } from "react-router-dom";

const RecruiterDashboard = () => {
  const stats = [
    { label: "Total Earnings", value: "$12,450", icon: DollarSign, change: "+$2,340 this month", color: "text-success" },
    { label: "Active Submissions", value: "18", icon: Upload, change: "5 pending review", color: "text-primary" },
    { label: "Success Rate", value: "76%", icon: Target, change: "+8% this month", color: "text-info" },
    { label: "Quality Score", value: "4.8/5", icon: Award, change: "Top 10% recruiter", color: "text-warning" },
  ];

  const availableJobs = [
    {
      id: 1,
      title: "Senior Backend Engineer",
      company: "TechCorp",
      commission: "$3,500",
      deadline: "5 days",
      skills: ["Node.js", "AWS", "MongoDB"],
      urgency: "high",
    },
    {
      id: 2,
      title: "Data Scientist",
      company: "DataFlow Inc",
      commission: "$4,000",
      deadline: "12 days",
      skills: ["Python", "ML", "SQL"],
      urgency: "medium",
    },
    {
      id: 3,
      title: "Frontend Lead",
      company: "StartupXYZ",
      commission: "$3,200",
      deadline: "8 days",
      skills: ["React", "TypeScript", "Design"],
      urgency: "high",
    },
  ];

  const mySubmissions = [
    {
      candidate: "John Anderson",
      position: "Senior Developer",
      company: "TechCorp",
      status: "interview",
      commission: "$3,500",
      submittedDays: 5,
    },
    {
      candidate: "Lisa Chen",
      position: "Product Manager",
      company: "InnovateLab",
      status: "screening",
      commission: "$4,000",
      submittedDays: 2,
    },
    {
      candidate: "David Kim",
      position: "UX Designer",
      company: "DesignHub",
      status: "offer",
      commission: "$3,200",
      submittedDays: 15,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "interview":
        return "bg-primary text-white";
      case "screening":
        return "bg-warning text-white";
      case "offer":
        return "bg-success text-white";
      default:
        return "bg-secondary";
    }
  };

  const getUrgencyColor = (urgency: string) => {
    return urgency === "high" ? "border-l-4 border-l-destructive" : "";
  };

  return (
    <div className="min-h-screen bg-secondary">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-orange-500 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">EzyHunter</span>
            </Link>
            <Badge variant="secondary">Recruiter Portal</Badge>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">My Profile</Button>
            <Button size="sm" className="shadow-orange">
              <Upload className="w-4 h-4 mr-2" />
              Submit Candidate
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome back, Alex! 🎯</h1>
              <p className="text-muted-foreground">You're crushing it! Keep up the great work.</p>
            </div>
            <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-orange-500 text-white rounded-full">
              <Award className="w-5 h-5" />
              <span className="font-bold">Gold Tier Recruiter</span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, idx) => (
            <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <TrendingUp className="w-4 h-4 text-success" />
              </div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground mb-2">{stat.label}</div>
              <div className="text-xs text-success font-medium">{stat.change}</div>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Available Jobs */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Available Jobs</h2>
                <Button variant="ghost" size="sm">Browse All</Button>
              </div>

              <div className="space-y-4">
                {availableJobs.map((job) => (
                  <div
                    key={job.id}
                    className={`p-5 rounded-xl border bg-white hover:shadow-md transition-all ${getUrgencyColor(
                      job.urgency
                    )}`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-bold text-lg mb-1">{job.title}</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Briefcase className="w-4 h-4" />
                          <span>{job.company}</span>
                        </div>
                      </div>
                      {job.urgency === "high" && (
                        <Badge variant="destructive" className="animate-pulse">
                          Urgent
                        </Badge>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.skills.map((skill, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t">
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1 text-success font-bold">
                          <DollarSign className="w-4 h-4" />
                          {job.commission}
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          {job.deadline} left
                        </div>
                      </div>
                      <Button size="sm" className="shadow-orange">
                        Submit Candidate
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* My Submissions */}
            <Card className="p-6 mt-6">
              <h2 className="text-xl font-bold mb-6">My Recent Submissions</h2>
              <div className="space-y-3">
                {mySubmissions.map((submission, idx) => (
                  <div key={idx} className="p-4 rounded-lg bg-secondary flex items-center justify-between">
                    <div className="flex-1">
                      <div className="font-bold mb-1">{submission.candidate}</div>
                      <div className="text-sm text-muted-foreground">
                        {submission.position} at {submission.company}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        Submitted {submission.submittedDays} days ago
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge className={getStatusColor(submission.status)}>
                        {submission.status}
                      </Badge>
                      <div className="text-right">
                        <div className="text-sm font-bold text-success">{submission.commission}</div>
                        <div className="text-xs text-muted-foreground">Commission</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Earnings Summary */}
            <Card className="p-6 bg-gradient-to-br from-primary to-orange-500 text-white">
              <h2 className="text-lg font-bold mb-6">This Month's Earnings</h2>
              <div className="text-4xl font-bold mb-2">$2,340</div>
              <div className="text-sm opacity-90 mb-6">+32% from last month</div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="opacity-90">Pending</span>
                  <span className="font-bold">$8,450</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="opacity-90">Paid Out</span>
                  <span className="font-bold">$12,450</span>
                </div>
              </div>
              <Button variant="secondary" size="sm" className="w-full mt-4 bg-white hover:bg-white/90 text-primary">
                View Details
              </Button>
            </Card>

            {/* Quality Metrics */}
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <Award className="w-5 h-5 text-primary" />
                <h2 className="text-lg font-bold">Quality Metrics</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">JD Match Score</span>
                    <span className="font-bold">92%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-success" style={{ width: "92%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Response Speed</span>
                    <span className="font-bold">88%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: "88%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Client Satisfaction</span>
                    <span className="font-bold">95%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-info" style={{ width: "95%" }}></div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Quick Stats */}
            <Card className="p-6">
              <h2 className="text-lg font-bold mb-4">Quick Stats</h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Placements</span>
                  <span className="font-bold">47</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Active Jobs</span>
                  <span className="font-bold">23</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Avg. Commission</span>
                  <span className="font-bold">$3,642</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Response Time</span>
                  <span className="font-bold">2.3 hrs</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruiterDashboard;
