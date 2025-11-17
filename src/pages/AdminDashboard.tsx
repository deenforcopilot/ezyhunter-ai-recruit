import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, Briefcase, DollarSign, TrendingUp, UserCheck, FileText, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const stats = [
    { label: "Total Revenue", value: "฿2.4M", icon: DollarSign, change: "+12% this month", color: "text-success" },
    { label: "Active Users", value: "1,245", icon: Users, change: "+156 this week", color: "text-info" },
    { label: "Active Jobs", value: "89", icon: Briefcase, change: "+23 this week", color: "text-primary" },
    { label: "Successful Placements", value: "342", icon: UserCheck, change: "+45 this month", color: "text-warning" },
  ];

  const pendingRecruiters = [
    { id: 1, name: "John Smith", applied: "2 days ago", experience: "5 years", specialization: "Tech" },
    { id: 2, name: "Maria Garcia", applied: "1 day ago", experience: "3 years", specialization: "Marketing" },
    { id: 3, name: "David Lee", applied: "3 hours ago", experience: "7 years", specialization: "Finance" },
  ];

  const recentClients = [
    { id: 1, company: "TechCorp", jobs: 12, spent: "฿450K", status: "Active" },
    { id: 2, company: "StartupX", jobs: 5, spent: "฿180K", status: "Active" },
    { id: 3, company: "DesignHub", jobs: 8, spent: "฿320K", status: "Active" },
  ];

  const platformMetrics = [
    { label: "Avg. Time to Hire", value: "14 days", trend: "down" },
    { label: "Client Satisfaction", value: "4.8/5", trend: "up" },
    { label: "Recruiter Success Rate", value: "78%", trend: "up" },
    { label: "Platform Uptime", value: "99.9%", trend: "stable" },
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
            <Badge className="bg-destructive">Admin Portal</Badge>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">Settings</Button>
            <Button variant="outline" size="sm">Reports</Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Admin Dashboard 👑</h1>
          <p className="text-muted-foreground">Monitor and manage the entire EzyHunter platform</p>
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

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Pending Recruiters */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Pending Recruiters</h2>
              <Badge variant="destructive">{pendingRecruiters.length}</Badge>
            </div>
            <div className="space-y-4">
              {pendingRecruiters.map((recruiter) => (
                <div key={recruiter.id} className="p-4 rounded-lg border">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-bold">{recruiter.name}</h3>
                      <p className="text-xs text-muted-foreground">Applied {recruiter.applied}</p>
                    </div>
                    <AlertCircle className="w-4 h-4 text-warning" />
                  </div>
                  <div className="flex gap-2 text-xs text-muted-foreground mb-3">
                    <span>• {recruiter.experience}</span>
                    <span>• {recruiter.specialization}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">Approve</Button>
                    <Button size="sm" variant="outline" className="flex-1">Reject</Button>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="ghost" size="sm" className="w-full mt-4">View All Applications</Button>
          </Card>

          {/* Recent Clients */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Top Clients</h2>
              <Button variant="ghost" size="sm">View All</Button>
            </div>
            <div className="space-y-4">
              {recentClients.map((client) => (
                <div key={client.id} className="p-4 rounded-lg border">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-bold">{client.company}</h3>
                      <p className="text-xs text-muted-foreground">{client.jobs} active jobs</p>
                    </div>
                    <Badge className="bg-success text-white">{client.status}</Badge>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-sm text-muted-foreground">Total Spent</span>
                    <span className="font-bold text-primary">{client.spent}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Platform Metrics */}
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-6">Platform Metrics</h2>
            <div className="space-y-4">
              {platformMetrics.map((metric, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-secondary">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-muted-foreground">{metric.label}</span>
                    <TrendingUp className={`w-4 h-4 ${
                      metric.trend === 'up' ? 'text-success' : 
                      metric.trend === 'down' ? 'text-destructive' : 
                      'text-muted-foreground'
                    }`} />
                  </div>
                  <div className="text-2xl font-bold">{metric.value}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-6">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-auto flex-col py-6 gap-2">
              <Users className="w-6 h-6" />
              <span>Manage Recruiters</span>
            </Button>
            <Button variant="outline" className="h-auto flex-col py-6 gap-2">
              <Building2 className="w-6 h-6" />
              <span>Manage Clients</span>
            </Button>
            <Button variant="outline" className="h-auto flex-col py-6 gap-2">
              <FileText className="w-6 h-6" />
              <span>View Reports</span>
            </Button>
            <Button variant="outline" className="h-auto flex-col py-6 gap-2">
              <Briefcase className="w-6 h-6" />
              <span>Talent Pool</span>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
