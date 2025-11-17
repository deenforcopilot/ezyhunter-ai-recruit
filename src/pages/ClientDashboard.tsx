import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  Plus,
  Users,
  Clock,
  CheckCircle,
  TrendingUp,
  Calendar,
  FileText,
  DollarSign,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const ClientDashboard = () => {
  const stats = [
    { label: "Active Jobs", value: "12", icon: FileText, change: "+2 this week", color: "text-primary" },
    { label: "Total Candidates", value: "156", icon: Users, change: "+23 this week", color: "text-info" },
    { label: "Avg. Time to Hire", value: "14 days", icon: Clock, change: "-3 days", color: "text-success" },
    { label: "Hiring Budget", value: "$48.5K", icon: DollarSign, change: "52% used", color: "text-warning" },
  ];

  const recentJobs = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      candidates: 24,
      status: "Active",
      recruiter: "5 recruiters",
      daysOpen: 7,
      pipeline: { sourced: 12, screening: 8, interview: 3, offer: 1 },
    },
    {
      id: 2,
      title: "Product Manager",
      candidates: 18,
      status: "Active",
      recruiter: "3 recruiters",
      daysOpen: 12,
      pipeline: { sourced: 8, screening: 6, interview: 3, offer: 1 },
    },
    {
      id: 3,
      title: "UX/UI Designer",
      candidates: 32,
      status: "Active",
      recruiter: "7 recruiters",
      daysOpen: 5,
      pipeline: { sourced: 18, screening: 10, interview: 3, offer: 1 },
    },
  ];

  const upcomingInterviews = [
    { candidate: "Sarah Johnson", position: "Senior Developer", time: "Today, 2:00 PM", status: "confirmed" },
    { candidate: "Michael Chen", position: "Product Manager", time: "Tomorrow, 10:00 AM", status: "pending" },
    { candidate: "Emily Rodriguez", position: "UX Designer", time: "Dec 20, 3:00 PM", status: "confirmed" },
  ];

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
            <Badge variant="secondary">Client Portal</Badge>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">Settings</Button>
            <Button size="sm" className="shadow-orange">
              <Plus className="w-4 h-4 mr-2" />
              Post New Job
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, TechCorp! 👋</h1>
          <p className="text-muted-foreground">Here's what's happening with your hiring pipeline today.</p>
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
          {/* Active Jobs */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Active Job Postings</h2>
                <Button variant="ghost" size="sm">View All</Button>
              </div>

              <div className="space-y-4">
                {recentJobs.map((job) => (
                  <div key={job.id} className="p-4 rounded-xl border bg-white hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-bold text-lg mb-1">{job.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {job.candidates} candidates
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {job.daysOpen} days open
                          </span>
                          <span>{job.recruiter}</span>
                        </div>
                      </div>
                      <Badge className="bg-success text-white">{job.status}</Badge>
                    </div>

                    {/* Pipeline */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                        <span>Pipeline Progress</span>
                        <span>{job.candidates} total</span>
                      </div>
                      <div className="flex gap-2">
                        <div className="flex-1">
                          <div className="text-xs mb-1">Sourced</div>
                          <div className="h-2 bg-info rounded-full" style={{ width: "100%" }}></div>
                          <div className="text-xs mt-1 font-medium">{job.pipeline.sourced}</div>
                        </div>
                        <div className="flex-1">
                          <div className="text-xs mb-1">Screening</div>
                          <div className="h-2 bg-warning rounded-full" style={{ width: "70%" }}></div>
                          <div className="text-xs mt-1 font-medium">{job.pipeline.screening}</div>
                        </div>
                        <div className="flex-1">
                          <div className="text-xs mb-1">Interview</div>
                          <div className="h-2 bg-primary rounded-full" style={{ width: "40%" }}></div>
                          <div className="text-xs mt-1 font-medium">{job.pipeline.interview}</div>
                        </div>
                        <div className="flex-1">
                          <div className="text-xs mb-1">Offer</div>
                          <div className="h-2 bg-success rounded-full" style={{ width: "20%" }}></div>
                          <div className="text-xs mt-1 font-medium">{job.pipeline.offer}</div>
                        </div>
                      </div>
                    </div>

                    <Button variant="ghost" size="sm" className="w-full mt-4">
                      View Details <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Interviews */}
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <Calendar className="w-5 h-5 text-primary" />
                <h2 className="text-lg font-bold">Upcoming Interviews</h2>
              </div>
              <div className="space-y-4">
                {upcomingInterviews.map((interview, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-secondary">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="font-medium">{interview.candidate}</div>
                        <div className="text-xs text-muted-foreground">{interview.position}</div>
                      </div>
                      {interview.status === "confirmed" ? (
                        <CheckCircle className="w-4 h-4 text-success" />
                      ) : (
                        <Clock className="w-4 h-4 text-warning" />
                      )}
                    </div>
                    <div className="text-sm text-muted-foreground">{interview.time}</div>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="sm" className="w-full mt-4">
                View Calendar
              </Button>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6">
              <h2 className="text-lg font-bold mb-4">Quick Actions</h2>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <Plus className="w-4 h-4 mr-2" />
                  Post New Job
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  Review Candidates
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Interview
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <DollarSign className="w-4 h-4 mr-2" />
                  View Invoices
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;
