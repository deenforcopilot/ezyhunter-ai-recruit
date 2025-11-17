import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Building2, Plus, X, Upload, Sparkles, DollarSign, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const CreateJob = () => {
  const [skills, setSkills] = useState<string[]>([]);
  const [currentSkill, setCurrentSkill] = useState("");
  const [jd, setJd] = useState("");

  const addSkill = () => {
    if (currentSkill.trim() && !skills.includes(currentSkill.trim())) {
      setSkills([...skills, currentSkill.trim()]);
      setCurrentSkill("");
    }
  };

  const removeSkill = (skill: string) => {
    setSkills(skills.filter(s => s !== skill));
  };

  const aiSuggestJD = () => {
    toast({
      title: "AI Suggestion Generated",
      description: "Job description has been optimized with AI recommendations.",
    });
  };

  const handleSubmit = () => {
    toast({
      title: "Job Posted Successfully",
      description: "Your job posting is now live and visible to recruiters.",
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
            <Badge variant="secondary">Create Job</Badge>
          </div>
          <Link to="/client">
            <Button variant="outline" size="sm">Back to Dashboard</Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Post a New Job</h1>
          <p className="text-muted-foreground">Create a detailed job description to attract the best candidates</p>
        </div>

        <Card className="p-6 mb-6">
          <div className="space-y-6">
            {/* Job Title */}
            <div>
              <Label htmlFor="title">Job Title *</Label>
              <Input id="title" placeholder="e.g. Senior Full Stack Developer" className="mt-2" />
            </div>

            {/* Job Description */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <Label htmlFor="jd">Job Description *</Label>
                <Button variant="ghost" size="sm" onClick={aiSuggestJD}>
                  <Sparkles className="w-4 h-4 mr-2 text-primary" />
                  AI Suggest
                </Button>
              </div>
              <Textarea 
                id="jd" 
                value={jd}
                onChange={(e) => setJd(e.target.value)}
                placeholder="Describe the role, responsibilities, and requirements..."
                className="mt-2 min-h-[200px]"
              />
            </div>

            {/* Skills */}
            <div>
              <Label htmlFor="skills">Required Skills *</Label>
              <div className="flex gap-2 mt-2">
                <Input 
                  id="skills"
                  value={currentSkill}
                  onChange={(e) => setCurrentSkill(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
                  placeholder="Add a skill and press Enter"
                />
                <Button onClick={addSkill} size="sm">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="pl-3 pr-2 py-1.5">
                    {skill}
                    <button onClick={() => removeSkill(skill)} className="ml-2">
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            </div>

            {/* Salary Range */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="salaryMin">
                  <DollarSign className="w-4 h-4 inline mr-1" />
                  Min Salary (THB/month)
                </Label>
                <Input id="salaryMin" type="number" placeholder="50000" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="salaryMax">
                  <DollarSign className="w-4 h-4 inline mr-1" />
                  Max Salary (THB/month)
                </Label>
                <Input id="salaryMax" type="number" placeholder="80000" className="mt-2" />
              </div>
            </div>

            {/* Location & Experience */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="Bangkok, Thailand" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="experience">Years of Experience</Label>
                <Input id="experience" type="number" placeholder="3" className="mt-2" />
              </div>
            </div>

            {/* Urgency */}
            <div>
              <Label htmlFor="urgency">
                <Clock className="w-4 h-4 inline mr-1" />
                Urgency Level
              </Label>
              <select id="urgency" className="w-full mt-2 px-3 py-2 border rounded-md bg-white">
                <option>Normal</option>
                <option>Urgent</option>
                <option>Very Urgent</option>
              </select>
            </div>

            {/* File Upload */}
            <div>
              <Label htmlFor="files">Additional Documents</Label>
              <div className="mt-2 border-2 border-dashed rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
                <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">Click to upload or drag and drop</p>
                <p className="text-xs text-muted-foreground mt-1">PDF, DOC up to 10MB</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <Button onClick={handleSubmit} className="flex-1 shadow-orange">
                <Plus className="w-4 h-4 mr-2" />
                Post Job
              </Button>
              <Button variant="outline" className="flex-1">Save as Draft</Button>
            </div>
          </div>
        </Card>

        {/* AI Recommendations Card */}
        <Card className="p-6 bg-primary-light">
          <div className="flex gap-3">
            <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold mb-2">AI Recommendations</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Consider adding "Team Leadership" as a required skill</li>
                <li>• Market salary range for this role: ฿55,000 - ฿85,000</li>
                <li>• Similar positions take average 18 days to fill</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CreateJob;
