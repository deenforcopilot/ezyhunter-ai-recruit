import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Building2, ThumbsUp, ThumbsDown, Star, Briefcase, GraduationCap, MapPin, Mail, Phone, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const CandidateReview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [comment, setComment] = useState("");

  const candidates = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Senior Full Stack Developer",
      experience: "5 years",
      location: "Bangkok",
      email: "sarah.j@email.com",
      phone: "+66 81 234 5678",
      matchScore: 92,
      skills: ["React", "Node.js", "TypeScript", "AWS"],
      education: "Master's in Computer Science",
      salary: "฿75,000",
      aiSummary: "Highly experienced full-stack developer with strong leadership skills. Excellent cultural fit based on personality assessment.",
      softSkills: { communication: 85, teamwork: 90, problemSolving: 88, leadership: 82 }
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Senior Full Stack Developer",
      experience: "6 years",
      location: "Chiang Mai",
      email: "m.chen@email.com",
      phone: "+66 82 345 6789",
      matchScore: 88,
      skills: ["React", "Python", "Docker", "PostgreSQL"],
      education: "Bachelor's in Software Engineering",
      salary: "฿70,000",
      aiSummary: "Technical expert with diverse project portfolio. Strong analytical thinking and remote work experience.",
      softSkills: { communication: 80, teamwork: 85, problemSolving: 92, leadership: 78 }
    }
  ];

  const candidate = candidates[currentIndex];

  const handleApprove = () => {
    toast({
      title: "Candidate Approved",
      description: `${candidate.name} moved to next round`,
    });
    nextCandidate();
  };

  const handleReject = () => {
    toast({
      title: "Candidate Rejected",
      description: `${candidate.name} has been notified`,
      variant: "destructive",
    });
    nextCandidate();
  };

  const nextCandidate = () => {
    if (currentIndex < candidates.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setComment("");
    }
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
            <Badge variant="secondary">Review Candidates</Badge>
          </div>
          <Link to="/client">
            <Button variant="outline" size="sm">Back to Dashboard</Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Candidate Review</h1>
            <p className="text-muted-foreground">Review and approve candidates for Senior Full Stack Developer</p>
          </div>
          <Badge className="text-lg py-2 px-4">
            {currentIndex + 1} / {candidates.length}
          </Badge>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Profile */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Header */}
            <Card className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex gap-4">
                  <div className="w-20 h-20 rounded-xl bg-primary-light flex items-center justify-center text-3xl font-bold text-primary">
                    {candidate.name.charAt(0)}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-1">{candidate.name}</h2>
                    <p className="text-muted-foreground mb-2">{candidate.position}</p>
                    <div className="flex gap-2">
                      {candidate.skills.slice(0, 3).map(skill => (
                        <Badge key={skill} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-primary">{candidate.matchScore}%</div>
                  <div className="text-xs text-muted-foreground">AI Match Score</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="flex items-center gap-2 text-sm">
                  <Briefcase className="w-4 h-4 text-muted-foreground" />
                  <span>{candidate.experience}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span>{candidate.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span>{candidate.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span>{candidate.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <GraduationCap className="w-4 h-4 text-muted-foreground" />
                  <span>{candidate.education}</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-primary">
                  <span>Expected: {candidate.salary}</span>
                </div>
              </div>
            </Card>

            {/* AI Summary */}
            <Card className="p-6 bg-primary-light">
              <div className="flex gap-3">
                <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">AI Summary</h3>
                  <p className="text-sm text-foreground">{candidate.aiSummary}</p>
                </div>
              </div>
            </Card>

            {/* Skills */}
            <Card className="p-6">
              <h3 className="font-bold mb-4">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {candidate.skills.map(skill => (
                  <Badge key={skill} className="py-2 px-3">{skill}</Badge>
                ))}
              </div>
            </Card>

            {/* Comments */}
            <Card className="p-6">
              <h3 className="font-bold mb-4">Your Comments</h3>
              <Textarea 
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Add notes or feedback for the recruiter..."
                className="min-h-[120px]"
              />
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Soft Skills */}
            <Card className="p-6">
              <h3 className="font-bold mb-4">Soft Skills Assessment</h3>
              <div className="space-y-4">
                {Object.entries(candidate.softSkills).map(([skill, score]) => (
                  <div key={skill}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm capitalize">{skill.replace(/([A-Z])/g, ' $1').trim()}</span>
                      <span className="text-sm font-medium">{score}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary transition-all"
                        style={{ width: `${score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Action Buttons */}
            <Card className="p-6">
              <h3 className="font-bold mb-4">Decision</h3>
              <div className="space-y-3">
                <Button onClick={handleApprove} className="w-full shadow-orange">
                  <ThumbsUp className="w-4 h-4 mr-2" />
                  Approve
                </Button>
                <Button onClick={handleReject} variant="outline" className="w-full border-destructive text-destructive hover:bg-destructive hover:text-white">
                  <ThumbsDown className="w-4 h-4 mr-2" />
                  Reject
                </Button>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6">
              <h3 className="font-bold mb-4">Quick Actions</h3>
              <div className="space-y-2 text-sm">
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  <Star className="w-4 h-4 mr-2" />
                  Save for Later
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateReview;
