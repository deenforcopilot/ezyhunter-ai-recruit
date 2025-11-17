import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Building2, Upload, Sparkles, Download, Eye, Plus, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const ResumeBuilder = () => {
  const [resumeUploaded, setResumeUploaded] = useState(false);
  const [aiProcessed, setAiProcessed] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);
  const [currentSkill, setCurrentSkill] = useState("");

  const handleUpload = () => {
    setResumeUploaded(true);
    // Simulate AI processing
    setTimeout(() => {
      setAiProcessed(true);
      setSkills(["React", "Node.js", "TypeScript", "AWS", "MongoDB"]);
      toast({
        title: "Resume Processed",
        description: "AI has extracted and summarized your information",
      });
    }, 2000);
  };

  const addSkill = () => {
    if (currentSkill.trim() && !skills.includes(currentSkill.trim())) {
      setSkills([...skills, currentSkill.trim()]);
      setCurrentSkill("");
    }
  };

  const removeSkill = (skill: string) => {
    setSkills(skills.filter(s => s !== skill));
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
            <Badge variant="secondary">AI Resume Builder</Badge>
          </div>
          <div className="flex gap-2">
            <Link to="/candidate">
              <Button variant="outline" size="sm">Back to Dashboard</Button>
            </Link>
            {aiProcessed && (
              <>
                <Button variant="outline" size="sm">
                  <Eye className="w-4 h-4 mr-2" />
                  Preview
                </Button>
                <Button size="sm" className="shadow-orange">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </>
            )}
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">AI Resume Builder</h1>
          <p className="text-muted-foreground">Upload your existing resume or create a new one from scratch</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Upload Section */}
            {!resumeUploaded && (
              <Card className="p-6">
                <h3 className="text-lg font-bold mb-4">Upload Existing Resume</h3>
                <div 
                  onClick={handleUpload}
                  className="border-2 border-dashed rounded-lg p-12 text-center hover:border-primary transition-colors cursor-pointer"
                >
                  <Upload className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-lg font-medium mb-2">Click to upload or drag and drop</p>
                  <p className="text-sm text-muted-foreground mb-4">PDF, DOC, DOCX up to 10MB</p>
                  <Badge variant="secondary" className="gap-2">
                    <Sparkles className="w-3 h-3" />
                    AI will auto-extract information
                  </Badge>
                </div>
              </Card>
            )}

            {/* Personal Information */}
            <Card className="p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                Personal Information
                {aiProcessed && <Badge variant="secondary" className="text-xs">AI Extracted</Badge>}
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" defaultValue={aiProcessed ? "Sarah" : ""} className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue={aiProcessed ? "Johnson" : ""} className="mt-2" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue={aiProcessed ? "sarah.j@email.com" : ""} className="mt-2" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" defaultValue={aiProcessed ? "+66 81 234 5678" : ""} className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" defaultValue={aiProcessed ? "Bangkok, Thailand" : ""} className="mt-2" />
                  </div>
                </div>
              </div>
            </Card>

            {/* Professional Summary */}
            <Card className="p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                Professional Summary
                {aiProcessed && (
                  <Button variant="ghost" size="sm">
                    <Sparkles className="w-4 h-4 mr-1 text-primary" />
                    AI Enhance
                  </Button>
                )}
              </h3>
              <Textarea 
                defaultValue={aiProcessed ? "Senior Full Stack Developer with 5+ years of experience building scalable web applications. Expert in React, Node.js, and cloud technologies. Proven track record of delivering high-quality solutions for enterprise clients." : ""}
                placeholder="Brief professional summary..."
                className="min-h-[120px]"
              />
            </Card>

            {/* Skills */}
            <Card className="p-6">
              <h3 className="text-lg font-bold mb-4">Skills</h3>
              <div className="space-y-4">
                <div className="flex gap-2">
                  <Input 
                    value={currentSkill}
                    onChange={(e) => setCurrentSkill(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
                    placeholder="Add a skill"
                  />
                  <Button onClick={addSkill} size="sm">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} className="pl-3 pr-2 py-1.5">
                      {skill}
                      <button onClick={() => removeSkill(skill)} className="ml-2">
                        <X className="w-3 h-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>

            {/* Work Experience */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold">Work Experience</h3>
                <Button variant="outline" size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Experience
                </Button>
              </div>
              <div className="space-y-4">
                {aiProcessed && (
                  <div className="p-4 rounded-lg border">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-bold">Senior Developer</h4>
                        <p className="text-sm text-muted-foreground">TechCorp • 2020 - Present</p>
                      </div>
                      <Button variant="ghost" size="sm">Edit</Button>
                    </div>
                    <p className="text-sm mt-2">
                      Led development of enterprise web applications using React and Node.js. 
                      Managed team of 5 developers and improved system performance by 40%.
                    </p>
                  </div>
                )}
              </div>
            </Card>

            {/* Education */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold">Education</h3>
                <Button variant="outline" size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Education
                </Button>
              </div>
              <div className="space-y-4">
                {aiProcessed && (
                  <div className="p-4 rounded-lg border">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-bold">Master's in Computer Science</h4>
                        <p className="text-sm text-muted-foreground">Chulalongkorn University • 2018</p>
                      </div>
                      <Button variant="ghost" size="sm">Edit</Button>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* AI Features */}
            <Card className="p-6 bg-primary-light">
              <div className="flex gap-3 mb-4">
                <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">AI Features</h3>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li>✓ Auto-extract information</li>
                    <li>✓ Optimize descriptions</li>
                    <li>✓ Keyword suggestions</li>
                    <li>✓ ATS-friendly format</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Templates */}
            <Card className="p-6">
              <h3 className="font-bold mb-4">Choose Template</h3>
              <div className="space-y-3">
                <div className="p-3 rounded-lg border-2 border-primary bg-primary-light cursor-pointer">
                  <div className="font-medium mb-1">Modern Professional</div>
                  <div className="text-xs text-muted-foreground">Clean and minimal</div>
                </div>
                <div className="p-3 rounded-lg border cursor-pointer hover:border-primary transition-colors">
                  <div className="font-medium mb-1">Creative</div>
                  <div className="text-xs text-muted-foreground">Bold and colorful</div>
                </div>
                <div className="p-3 rounded-lg border cursor-pointer hover:border-primary transition-colors">
                  <div className="font-medium mb-1">Executive</div>
                  <div className="text-xs text-muted-foreground">Formal and elegant</div>
                </div>
              </div>
            </Card>

            {/* Quick Tips */}
            <Card className="p-6">
              <h3 className="font-bold mb-4">Quick Tips</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Use action verbs</li>
                <li>• Quantify achievements</li>
                <li>• Keep it concise (1-2 pages)</li>
                <li>• Update regularly</li>
                <li>• Proofread carefully</li>
              </ul>
            </Card>

            {/* Save Button */}
            <Button className="w-full shadow-orange" size="lg">
              Save Resume
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
