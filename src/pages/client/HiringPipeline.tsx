import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, Clock, TrendingUp, DollarSign, CheckCircle, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

const HiringPipeline = () => {
  const jobs = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      posted: "5 days ago",
      pipeline: {
        sourced: 24,
        screening: 12,
        interview: 5,
        offer: 2,
        hired: 0,
      },
      recruiter: "John Smith, Sarah Lee",
      timeToHire: 8,
      targetDays: 14,
      budget: "฿80,000",
    },
    {
      id: 2,
      title: "Product Manager",
      posted: "3 days ago",
      pipeline: {
        sourced: 18,
        screening: 8,
        interview: 3,
        offer: 1,
        hired: 0,
      },
      recruiter: "Maria Garcia",
      timeToHire: 5,
      targetDays: 10,
      budget: "฿90,000",
    },
  ];

  const activities = [
    { time: "10 mins ago", action: "Interview scheduled", candidate: "Sarah Johnson", job: "Senior Developer" },
    { time: "1 hour ago", action: "Candidate moved to Interview", candidate: "Michael Chen", job: "Product Manager" },
    { time: "2 hours ago", action: "New candidate added", candidate: "Emily Rodriguez", job: "Senior Developer" },
    { time: "3 hours ago", action: "Offer sent", candidate: "David Kim", job: "UX Designer" },
  ];

  const kpis = [
    { label: "Active Jobs", value: "8", icon: Users, color: "primary" },
    { label: "Total Candidates", value: "156", icon: Users, color: "success" },
    { label: "Avg. Time-to-Hire", value: "12 days", icon: Clock, color: "info" },
    { label: "Total Spend", value: "฿450K", icon: DollarSign, color: "warning" },
  ];

  return (
    <div className="min-h-screen bg-secondary">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-orange-500 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">EzyHunter</span>
            </Link>
            <Badge variant="secondary">Hiring Pipeline</Badge>
          </div>
          <Link to="/client">
            <Button variant="outline" size="sm">Back to Dashboard</Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Real-Time Hiring Pipeline</h1>
          <p className="text-muted-foreground">Track every stage of your recruitment process</p>
        </div>

        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {kpis.map((kpi, idx) => {
            const Icon = kpi.icon;
            return (
              <Card key={idx} className="p-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg bg-${kpi.color}/10 flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 text-${kpi.color}`} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{kpi.value}</div>
                    <div className="text-xs text-muted-foreground">{kpi.label}</div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {jobs.map((job) => (
              <Card key={job.id} className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{job.title}</h2>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>Posted {job.posted}</span>
                      <span>•</span>
                      <span>Budget: {job.budget}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Recruiters: {job.recruiter}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 mb-1">
                      <Clock className="w-4 h-4 text-info" />
                      <span className="font-bold text-lg">{job.timeToHire} days</span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      Target: {job.targetDays} days
                    </span>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex justify-between mb-2">
                    {Object.entries(job.pipeline).map(([stage, count]) => (
                      <div key={stage} className="text-center flex-1">
                        <div className="text-xs text-muted-foreground mb-1 capitalize">{stage}</div>
                        <div className="text-2xl font-bold text-primary">{count}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="relative h-3 bg-secondary rounded-full overflow-hidden mb-4">
                    <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-success" 
                         style={{ width: `${(job.pipeline.hired / job.pipeline.sourced) * 100 || 20}%` }} 
                    />
                  </div>

                  <div className="grid grid-cols-5 gap-2">
                    {Object.entries(job.pipeline).map(([stage, count], idx) => (
                      <Card
                        key={stage}
                        className={`p-3 text-center cursor-pointer hover:shadow-md transition-all ${
                          count > 0 ? "border-primary" : ""
                        }`}
                      >
                        <div className="text-xs text-muted-foreground capitalize mb-1">{stage}</div>
                        <div className="text-xl font-bold">{count}</div>
                        {count > 0 && (
                          <Button variant="link" size="sm" className="text-xs mt-1 h-auto p-0">
                            View
                          </Button>
                        )}
                      </Card>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 mt-4 pt-4 border-t">
                  <Button variant="outline" size="sm" className="flex-1">View Details</Button>
                  <Link to="/client/candidate-review" className="flex-1">
                    <Button size="sm" className="w-full shadow-orange">Review Candidates</Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Recent Activity
              </h3>
              <div className="space-y-4">
                {activities.map((activity, idx) => (
                  <div key={idx} className="flex gap-3 pb-3 border-b last:border-0">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.candidate}</p>
                      <p className="text-xs text-muted-foreground">{activity.job}</p>
                      <span className="text-xs text-muted-foreground">{activity.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-primary-light">
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Pipeline Health</h3>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-success" />
                      Good candidate flow
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertCircle className="w-3 h-3 text-warning" />
                      Interview stage needs attention
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-success" />
                      On track for hiring goals
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiringPipeline;
