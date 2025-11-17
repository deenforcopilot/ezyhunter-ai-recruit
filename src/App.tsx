import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import ClientDashboard from "./pages/ClientDashboard";
import RecruiterDashboard from "./pages/RecruiterDashboard";
import CandidateDashboard from "./pages/CandidateDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

// Client Pages
import CreateJob from "./pages/client/CreateJob";
import CandidateReview from "./pages/client/CandidateReview";

// Recruiter Pages
import JobMarketplace from "./pages/recruiter/JobMarketplace";
import SubmitCandidate from "./pages/recruiter/SubmitCandidate";

// Candidate Pages
import ResumeBuilder from "./pages/candidate/ResumeBuilder";
import JobBrowser from "./pages/candidate/JobBrowser";
import OnlineTests from "./pages/candidate/OnlineTests";

// Additional Pages
import InterviewScheduling from "./pages/client/InterviewScheduling";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth />} />
          
          {/* Client Routes */}
          <Route path="/client" element={<ClientDashboard />} />
          <Route path="/client/create-job" element={<CreateJob />} />
          <Route path="/client/review-candidates" element={<CandidateReview />} />
          <Route path="/client/interviews" element={<InterviewScheduling />} />
          
          {/* Recruiter Routes */}
          <Route path="/recruiter" element={<RecruiterDashboard />} />
          <Route path="/recruiter/marketplace" element={<JobMarketplace />} />
          <Route path="/recruiter/submit-candidate" element={<SubmitCandidate />} />
          
          {/* Candidate Routes */}
          <Route path="/candidate" element={<CandidateDashboard />} />
          <Route path="/candidate/resume-builder" element={<ResumeBuilder />} />
          <Route path="/candidate/browse-jobs" element={<JobBrowser />} />
          <Route path="/candidate/tests" element={<OnlineTests />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminDashboard />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
