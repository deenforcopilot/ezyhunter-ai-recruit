import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Briefcase,
  Search,
  FileText,
  MapPin,
  Clock,
  TrendingUp,
  CheckCircle,
  Eye,
  MessageSquare,
  Calendar,
} from "lucide-react";
import { Link } from "react-router-dom";

const CandidateDashboard = () => {
  const profileCompletion = 85;

  const stats = [
    { label: "Applications", value: "12", icon: FileText, color: "text-primary" },
    { label: "Profile Views", value: "156", icon: Eye, color: "text-info" },
    { label: "Interviews", value: "4", icon: Calendar, color: "text-success" },
    { label: "Messages", value: "8", icon: MessageSquare, color: "text-warning" },
  ];

  const recommendedJobs = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      company: "TechCorp",
      location: "Bangkok, Thailand",
      salary: "$80K - $120K",
      match: 95,
      posted: "2 days ago",
      type: "Full-time",
    },
    {
      id: 2,
      title: "Product Manager",
      company: "InnovateLab",
      location: "Remote",
      salary: "$90K - $130K",
      match: 88,
      posted: "5 days ago",
      type: "Full-time",
    },
    {
      id: 3,
      title: "UX/UI Designer",
      company: "DesignHub",
      location: "Chiang Mai, Thailand",
      salary: "$60K - $90K",
      match: 82,
      posted: "1 week ago",
      type: "Contract",
    },
  ];

  const myApplications = [
    {
      position: "Senior Developer",
      company: "TechCorp",
      appliedDate: "Dec 10, 2024",
      status: "interview",
      stage: 3,
      totalStages: 4,
      nextStep: "Final interview on Dec 22",
    },
    {
      position: "Product Manager",
      company: "InnovateLab",
      appliedDate: "Dec 8, 2024",
      status: "screening",
      stage: 2,
      totalStages: 4,
      nextStep: "Awaiting recruiter review",
    },
    {
      position: "Tech Lead",
      company: "StartupXYZ",
      appliedDate: "Dec 5, 2024",
      status: "applied",
      stage: 1,
      totalStages: 4,
      nextStep: "Application submitted",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "interview":
        return "bg-success text-white";
      case "screening":
        return "bg-warning text-white";
      case "applied":
        return "bg-info text-white";
      default:
        return "bg-secondary";
    }
  };

  const getMatchColor = (match: number) => {
    if (match >= 90) return "text-success";
    if (match >= 75) return "text-primary";
    return "text-warning";
  };

  return (
    <div className="min-h-screen bg-secondary">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-orange-500 rounded-lg flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">EzyHunter</span>
            </Link>
            <Badge variant="secondary">Candidate Portal</Badge>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/candidate/documents">
              <Button variant="outline" size="sm">Documents</Button>
            </Link>
            <Link to="/candidate/job-browser">
              <Button size="sm" className="shadow-orange">
                <Search className="w-4 h-4 mr-2" />
                Browse Jobs
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, Sarah! 👨‍💻</h1>
          <p className="text-muted-foreground">Let's find your dream job today.</p>
        </div>

        {/* Profile Completion Banner */}
        <Card className="p-6 mb-8 bg-gradient-to-r from-primary-light to-white border-l-4 border-l-primary">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="font-bold text-lg mb-2">Complete Your Profile</h3>
              <p className="text-sm text-muted-foreground">
                Profiles with 100% completion get 3x more interview invites!
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-primary">{profileCompletion}%</div>
              <div className="text-xs text-muted-foreground">Complete</div>
            </div>
          </div>
          <Progress value={profileCompletion} className="mb-4" />
          <Link to="/candidate/resume-builder">
            <Button size="sm" variant="outline">Complete Profile</Button>
          </Link>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, idx) => (
            <Card key={idx} className="p-4 hover:shadow-lg transition-shadow">
              <div className={`w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center mb-3 ${stat.color}`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Recommended Jobs */}
          <div className="lg:col-span-2">
            <Card className="p-6 mb-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Recommended for You</h2>
                <Link to="/candidate/job-browser">
                  <Button variant="ghost" size="sm">View All</Button>
                </Link>
              </div>

              <div className="space-y-4">
                {recommendedJobs.map((job) => (
                  <div key={job.id} className="p-5 rounded-xl border bg-white hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-bold text-lg mb-1">{job.title}</h3>
                        <div className="text-sm text-muted-foreground mb-2">{job.company}</div>
                        <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {job.posted}
                          </span>
                        </div>
                      </div>
                      <Badge variant="secondary">{job.type}</Badge>
                    </div>

                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-sm font-bold text-primary">{job.salary}</div>
                      <div className={`flex items-center gap-1 text-sm font-bold ${getMatchColor(job.match)}`}>
                        <TrendingUp className="w-4 h-4" />
                        {job.match}% Match
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Link to="/candidate/job-browser" className="flex-1">
                        <Button size="sm" className="w-full shadow-orange">
                          Apply Now
                        </Button>
                      </Link>
                      <Button size="sm" variant="outline">
                        Save
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* My Applications */}
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-6">My Applications</h2>
              <div className="space-y-4">
                {myApplications.map((app, idx) => (
                  <div key={idx} className="p-5 rounded-xl bg-secondary">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-bold mb-1">{app.position}</h3>
                        <div className="text-sm text-muted-foreground">{app.company}</div>
                        <div className="text-xs text-muted-foreground mt-1">Applied on {app.appliedDate}</div>
                      </div>
                      <Badge className={getStatusColor(app.status)}>
                        {app.status}
                      </Badge>
                    </div>

                    <div className="mb-3">
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                        <span>Application Progress</span>
                        <span>
                          Stage {app.stage}/{app.totalStages}
                        </span>
                      </div>
                      <Progress value={(app.stage / app.totalStages) * 100} />
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4" />
                      <span>{app.nextStep}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Interview Schedule */}
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <Calendar className="w-5 h-5 text-primary" />
                <h2 className="text-lg font-bold">Upcoming</h2>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-primary-light">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-xs font-medium text-primary">Today</span>
                  </div>
                  <div className="font-bold mb-1">Technical Interview</div>
                  <div className="text-sm text-muted-foreground mb-2">TechCorp - Senior Developer</div>
                  <div className="text-sm font-medium">2:00 PM - 3:30 PM</div>
                  <Link to="/candidate/interview-schedule">
                    <Button size="sm" variant="outline" className="w-full mt-3">
                      Join Video Call
                    </Button>
                  </Link>
                </div>

                <div className="p-4 rounded-lg bg-secondary">
                  <div className="text-xs text-muted-foreground mb-2">Dec 22, 2024</div>
                  <div className="font-bold mb-1">Final Round</div>
                  <div className="text-sm text-muted-foreground">TechCorp - Senior Developer</div>
                  <div className="text-sm font-medium mt-2">10:00 AM</div>
                </div>
              </div>
            </Card>

            {/* Profile Strength */}
            <Card className="p-6">
              <h2 className="text-lg font-bold mb-6">Profile Strength</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Resume Quality</span>
                    <span className="font-bold text-success">Excellent</span>
                  </div>
                  <Progress value={95} />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Skills Coverage</span>
                    <span className="font-bold text-primary">Good</span>
                  </div>
                  <Progress value={80} />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Experience Detail</span>
                    <span className="font-bold text-warning">Needs Work</span>
                  </div>
                  <Progress value={60} />
                </div>
              </div>
              <Link to="/candidate/resume-builder">
                <Button size="sm" variant="outline" className="w-full mt-4">
                  Improve Profile
                </Button>
              </Link>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6">
              <h2 className="text-lg font-bold mb-4">Quick Actions</h2>
              <div className="space-y-2">
                <Link to="/candidate/resume-builder" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="w-4 h-4 mr-2" />
                    Update Resume
                  </Button>
                </Link>
                <Link to="/candidate/job-browser" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    <Search className="w-4 h-4 mr-2" />
                    Job Alerts
                  </Button>
                </Link>
                <Link to="/candidate/online-tests" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="w-4 h-4 mr-2" />
                    Take Tests
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateDashboard;
