import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Building2, Upload, Sparkles, CheckCircle, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const SubmitCandidate = () => {
  const [aiCheck, setAiCheck] = useState<{ score: number; feedback: string } | null>(null);
  const [resumeUploaded, setResumeUploaded] = useState(false);

  const runAICheck = () => {
    // Simulate AI check
    setTimeout(() => {
      setAiCheck({
        score: 87,
        feedback: "Good match! Candidate has 4/5 required skills. Consider highlighting cloud experience in submission notes."
      });
      toast({
        title: "AI Check Complete",
        description: "JD fit score: 87%",
      });
    }, 1500);
  };

  const handleSubmit = () => {
    toast({
      title: "Candidate Submitted",
      description: "Your candidate has been sent to the client for review",
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
            <Badge variant="secondary">Submit Candidate</Badge>
          </div>
          <Link to="/recruiter">
            <Button variant="outline" size="sm">Back to Dashboard</Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Submit New Candidate</h1>
          <p className="text-muted-foreground">For: Senior Full Stack Developer at TechCorp</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {/* Resume Upload */}
            <Card className="p-6">
              <Label className="text-lg font-bold mb-4 block">Upload Resume *</Label>
              <div 
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors cursor-pointer ${
                  resumeUploaded ? 'border-success bg-success/5' : 'hover:border-primary'
                }`}
                onClick={() => setResumeUploaded(true)}
              >
                {resumeUploaded ? (
                  <>
                    <CheckCircle className="w-12 h-12 mx-auto mb-3 text-success" />
                    <p className="font-medium text-success mb-1">Resume Uploaded Successfully</p>
                    <p className="text-sm text-muted-foreground">candidate_resume.pdf</p>
                  </>
                ) : (
                  <>
                    <Upload className="w-12 h-12 mx-auto mb-3 text-muted-foreground" />
                    <p className="font-medium mb-1">Click to upload or drag and drop</p>
                    <p className="text-sm text-muted-foreground">PDF, DOC up to 10MB</p>
                  </>
                )}
              </div>
            </Card>

            {/* Candidate Details */}
            <Card className="p-6">
              <h3 className="text-lg font-bold mb-4">Candidate Details</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="John" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Doe" className="mt-2" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="john.doe@email.com" className="mt-2" />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" type="tel" placeholder="+66 81 234 5678" className="mt-2" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="experience">Years of Experience</Label>
                    <Input id="experience" type="number" placeholder="5" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="salary">Expected Salary (THB)</Label>
                    <Input id="salary" type="number" placeholder="70000" className="mt-2" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="currentCompany">Current Company</Label>
                  <Input id="currentCompany" placeholder="TechStartup Co." className="mt-2" />
                </div>

                <div>
                  <Label htmlFor="education">Education</Label>
                  <Input id="education" placeholder="Bachelor's in Computer Science" className="mt-2" />
                </div>
              </div>
            </Card>

            {/* Skills & Experience */}
            <Card className="p-6">
              <h3 className="text-lg font-bold mb-4">Skills & Experience</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="skills">Key Skills (comma separated)</Label>
                  <Input id="skills" placeholder="React, Node.js, TypeScript, AWS" className="mt-2" />
                </div>

                <div>
                  <Label htmlFor="summary">Professional Summary</Label>
                  <Textarea 
                    id="summary"
                    placeholder="Brief summary of candidate's experience and achievements..."
                    className="mt-2 min-h-[120px]"
                  />
                </div>

                <div>
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea 
                    id="notes"
                    placeholder="Any special notes or highlights about this candidate..."
                    className="mt-2 min-h-[80px]"
                  />
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* AI JD-Fit Check */}
            <Card className="p-6">
              <h3 className="font-bold mb-4">AI JD-Fit Check</h3>
              <Button 
                onClick={runAICheck}
                variant="outline" 
                className="w-full mb-4"
                disabled={!resumeUploaded}
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Run AI Check
              </Button>

              {aiCheck && (
                <div className={`p-4 rounded-lg ${aiCheck.score >= 80 ? 'bg-success/10' : 'bg-warning/10'}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Match Score</span>
                    <span className={`text-2xl font-bold ${aiCheck.score >= 80 ? 'text-success' : 'text-warning'}`}>
                      {aiCheck.score}%
                    </span>
                  </div>
                  <div className="h-2 bg-white/50 rounded-full overflow-hidden mb-3">
                    <div 
                      className={`h-full ${aiCheck.score >= 80 ? 'bg-success' : 'bg-warning'}`}
                      style={{ width: `${aiCheck.score}%` }}
                    />
                  </div>
                  <p className="text-xs text-foreground">{aiCheck.feedback}</p>
                </div>
              )}

              {!aiCheck && !resumeUploaded && (
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <p>Upload resume to check JD fit before submitting</p>
                </div>
              )}
            </Card>

            {/* Job Requirements */}
            <Card className="p-6">
              <h3 className="font-bold mb-4">Job Requirements</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="text-xs text-muted-foreground mb-1">Required Skills</div>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="secondary" className="text-xs">React</Badge>
                    <Badge variant="secondary" className="text-xs">Node.js</Badge>
                    <Badge variant="secondary" className="text-xs">TypeScript</Badge>
                    <Badge variant="secondary" className="text-xs">AWS</Badge>
                  </div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-1">Experience</div>
                  <div className="text-sm">3-5 years</div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-1">Salary Range</div>
                  <div className="text-sm">฿60,000 - ฿90,000</div>
                </div>
              </div>
            </Card>

            {/* Commission Info */}
            <Card className="p-6 bg-primary-light">
              <h3 className="font-bold mb-2">Commission</h3>
              <div className="text-3xl font-bold text-primary mb-1">฿45,000</div>
              <p className="text-xs text-muted-foreground">
                Paid when candidate successfully starts work
              </p>
            </Card>

            {/* Submit Button */}
            <Button onClick={handleSubmit} className="w-full shadow-orange" size="lg">
              Submit Candidate
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitCandidate;
