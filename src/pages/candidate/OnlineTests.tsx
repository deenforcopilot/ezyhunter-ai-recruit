import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, CheckCircle, Clock, FileText, Brain, Target, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const OnlineTests = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const tests = [
    {
      id: 1,
      title: "Soft Skills Assessment",
      duration: "15 minutes",
      questions: 20,
      status: "Not Started",
      icon: Brain,
      description: "Evaluate communication, teamwork, and problem-solving abilities"
    },
    {
      id: 2,
      title: "Personality Test",
      duration: "10 minutes",
      questions: 15,
      status: "Completed",
      score: 85,
      icon: Target,
      description: "Understand your work style and cultural fit"
    },
    {
      id: 3,
      title: "Technical Assessment",
      duration: "30 minutes",
      questions: 25,
      status: "In Progress",
      icon: FileText,
      description: "Test your technical knowledge and coding skills"
    },
  ];

  const sampleQuestions = [
    {
      question: "How do you typically handle conflicts in a team setting?",
      options: [
        "I address conflicts directly and seek compromise",
        "I avoid confrontation and wait for issues to resolve",
        "I escalate to management immediately",
        "I try to understand all perspectives before acting"
      ]
    },
    {
      question: "When working on a challenging project, what motivates you most?",
      options: [
        "Recognition from peers and management",
        "Learning new skills and technologies",
        "Achieving measurable results",
        "Contributing to team success"
      ]
    },
  ];

  const handleStartTest = (testTitle: string) => {
    toast({
      title: "Test Started",
      description: `Beginning ${testTitle}`,
    });
  };

  const handleSubmitTest = () => {
    setShowResults(true);
    toast({
      title: "Test Submitted",
      description: "Your results have been sent to the client",
    });
  };

  const completedTests = tests.filter(t => t.status === "Completed");
  const averageScore = completedTests.length > 0 
    ? Math.round(completedTests.reduce((acc, t) => acc + (t.score || 0), 0) / completedTests.length)
    : 0;

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
            <Badge variant="secondary">Online Tests</Badge>
          </div>
          <Link to="/candidate">
            <Button variant="outline" size="sm">Back to Dashboard</Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Online Assessments</h1>
          <p className="text-muted-foreground">Complete tests to improve your profile and match score</p>
        </div>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold">{tests.length}</div>
                <div className="text-xs text-muted-foreground">Total Tests</div>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-success" />
              </div>
              <div>
                <div className="text-2xl font-bold">{completedTests.length}</div>
                <div className="text-xs text-muted-foreground">Completed</div>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-warning" />
              </div>
              <div>
                <div className="text-2xl font-bold">{averageScore}%</div>
                <div className="text-xs text-muted-foreground">Avg Score</div>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Available Tests */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-xl font-bold mb-4">Available Tests</h2>
            {tests.map((test) => (
              <Card key={test.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary-light flex items-center justify-center flex-shrink-0">
                    <test.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-lg font-bold mb-1">{test.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{test.description}</p>
                      </div>
                      <Badge 
                        className={
                          test.status === "Completed" ? "bg-success text-white" :
                          test.status === "In Progress" ? "bg-warning text-white" :
                          "bg-muted"
                        }
                      >
                        {test.status}
                      </Badge>
                    </div>
                    
                    <div className="flex gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {test.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <FileText className="w-4 h-4" />
                        {test.questions} questions
                      </span>
                      {test.score && (
                        <span className="flex items-center gap-1 text-success font-medium">
                          <CheckCircle className="w-4 h-4" />
                          Score: {test.score}%
                        </span>
                      )}
                    </div>

                    <div className="flex gap-2">
                      {test.status === "Not Started" && (
                        <Button onClick={() => handleStartTest(test.title)} className="shadow-orange">
                          Start Test
                        </Button>
                      )}
                      {test.status === "In Progress" && (
                        <Button className="shadow-orange">
                          Continue Test
                        </Button>
                      )}
                      {test.status === "Completed" && (
                        <Button variant="outline">
                          View Results
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}

            {/* Sample Question Preview */}
            <Card className="p-6 mt-6">
              <h3 className="text-lg font-bold mb-4">Sample Questions Preview</h3>
              <div className="space-y-6">
                {sampleQuestions.map((q, idx) => (
                  <div key={idx} className="p-4 rounded-lg bg-secondary">
                    <h4 className="font-medium mb-3">{idx + 1}. {q.question}</h4>
                    <div className="space-y-2">
                      {q.options.map((option, optIdx) => (
                        <div key={optIdx} className="flex items-center gap-2 p-2 rounded hover:bg-white transition-colors cursor-pointer">
                          <div className="w-4 h-4 rounded-full border-2" />
                          <span className="text-sm">{option}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Test Tips */}
            <Card className="p-6 bg-primary-light">
              <h3 className="font-bold mb-4">Test Tips 💡</h3>
              <ul className="space-y-2 text-sm">
                <li>• Find a quiet space</li>
                <li>• Complete in one sitting</li>
                <li>• Answer honestly</li>
                <li>• No time pressure</li>
                <li>• Results sent automatically</li>
              </ul>
            </Card>

            {/* Benefits */}
            <Card className="p-6">
              <h3 className="font-bold mb-4">Why Take Tests?</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                  <span>Increase profile match score</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                  <span>Stand out to employers</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                  <span>Get better job matches</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                  <span>Speed up hiring process</span>
                </div>
              </div>
            </Card>

            {/* Your Results */}
            {completedTests.length > 0 && (
              <Card className="p-6">
                <h3 className="font-bold mb-4">Your Test Results</h3>
                <div className="space-y-3">
                  {completedTests.map((test) => (
                    <div key={test.id} className="flex items-center justify-between">
                      <span className="text-sm">{test.title}</span>
                      <Badge className="bg-success text-white">{test.score}%</Badge>
                    </div>
                  ))}
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineTests;
