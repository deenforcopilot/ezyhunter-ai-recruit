import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Building2, Search, Upload, FileText, Download, Eye, Share2, Trash2, File, Image, FilePlus } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const DocumentCenter = () => {
  const location = useLocation();
  const userRole = location.pathname.includes('client') ? 'client' : 
                   location.pathname.includes('recruiter') ? 'recruiter' : 'candidate';
  
  const backPath = userRole === 'client' ? '/client' : 
                   userRole === 'recruiter' ? '/recruiter' : '/candidate';

  const [selectedCategory, setSelectedCategory] = useState("all");

  const documents = [
    {
      id: 1,
      name: "Employment_Contract_Sarah_Johnson.pdf",
      type: "Contract",
      size: "2.4 MB",
      date: "2024-01-15",
      shared: ["Client", "Candidate"],
      icon: FileText,
    },
    {
      id: 2,
      name: "Resume_Michael_Chen.pdf",
      type: "Resume",
      size: "1.2 MB",
      date: "2024-01-20",
      shared: ["Recruiter", "Client"],
      icon: FileText,
    },
    {
      id: 3,
      name: "Onboarding_Checklist.pdf",
      type: "Onboarding",
      size: "856 KB",
      date: "2024-01-22",
      shared: ["Client", "Candidate"],
      icon: File,
    },
    {
      id: 4,
      name: "ID_Card_Copy.jpg",
      type: "Verification",
      size: "3.1 MB",
      date: "2024-01-18",
      shared: ["Client"],
      icon: Image,
    },
    {
      id: 5,
      name: "NDA_Agreement.pdf",
      type: "Contract",
      size: "1.8 MB",
      date: "2024-01-10",
      shared: ["Client", "Candidate"],
      icon: FileText,
    },
  ];

  const categories = ["all", "Contract", "Resume", "Onboarding", "Verification"];

  const filteredDocs = selectedCategory === "all" 
    ? documents 
    : documents.filter(doc => doc.type === selectedCategory);

  const handleUpload = () => {
    toast({
      title: "Upload Successful",
      description: "Document has been uploaded to the center.",
    });
  };

  const handleDownload = (name: string) => {
    toast({
      title: "Downloading",
      description: `${name} is being downloaded.`,
    });
  };

  const handleShare = (name: string) => {
    toast({
      title: "Share Link Generated",
      description: `Share link for ${name} has been copied to clipboard.`,
    });
  };

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
            <Badge variant="secondary">Document Center</Badge>
          </div>
          <Link to={backPath}>
            <Button variant="outline" size="sm">Back to Dashboard</Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Document Center</h1>
          <p className="text-muted-foreground">Manage all contracts, resumes, and onboarding files</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-4 mb-6">
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold">42</div>
                <div className="text-xs text-muted-foreground">Total Documents</div>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                <Share2 className="w-5 h-5 text-success" />
              </div>
              <div>
                <div className="text-2xl font-bold">18</div>
                <div className="text-xs text-muted-foreground">Shared Files</div>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-info/10 flex items-center justify-center">
                <FilePlus className="w-5 h-5 text-info" />
              </div>
              <div>
                <div className="text-2xl font-bold">8</div>
                <div className="text-xs text-muted-foreground">This Week</div>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center">
                <FileText className="w-5 h-5 text-warning" />
              </div>
              <div>
                <div className="text-2xl font-bold">156 MB</div>
                <div className="text-xs text-muted-foreground">Total Size</div>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input placeholder="Search documents..." className="pl-10" />
            </div>
            <Button onClick={handleUpload} className="shadow-orange">
              <Upload className="w-4 h-4 mr-2" />
              Upload Document
            </Button>
          </div>

          <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="whitespace-nowrap"
              >
                {category === "all" ? "All Files" : category}
              </Button>
            ))}
          </div>

          <div className="space-y-3">
            {filteredDocs.map((doc) => {
              const Icon = doc.icon;
              return (
                <Card key={doc.id} className="p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-12 h-12 rounded-lg bg-primary-light flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold truncate">{doc.name}</h3>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                          <span>{doc.size}</span>
                          <span>•</span>
                          <span>{doc.date}</span>
                          <span>•</span>
                          <Badge variant="secondary" className="text-xs">{doc.type}</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="hidden md:flex items-center gap-1 mr-2">
                        {doc.shared.map((role, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {role}
                          </Badge>
                        ))}
                      </div>
                      <Button variant="ghost" size="sm" onClick={() => handleDownload(doc.name)}>
                        <Download className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => handleShare(doc.name)}>
                        <Share2 className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="w-4 h-4 text-destructive" />
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DocumentCenter;
