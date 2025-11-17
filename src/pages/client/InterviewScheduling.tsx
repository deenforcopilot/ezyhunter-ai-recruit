import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Building2, Calendar as CalendarIcon, Clock, Video, Mail, Phone, User, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const InterviewScheduling = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>("");

  const timeSlots = [
    "09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00"
  ];

  const upcomingInterviews = [
    {
      id: 1,
      candidate: "Sarah Johnson",
      position: "Senior Developer",
      date: "Today",
      time: "2:00 PM",
      type: "Video Call",
      status: "Confirmed",
      interviewer: "John Smith"
    },
    {
      id: 2,
      candidate: "Michael Chen",
      position: "Product Manager",
      date: "Tomorrow",
      time: "10:00 AM",
      type: "In-Person",
      status: "Pending",
      interviewer: "Maria Garcia"
    },
  ];

  const handleSchedule = () => {
    if (!selectedTime) {
      toast({
        title: "Please select a time",
        variant: "destructive"
      });
      return;
    }
    toast({
      title: "Interview Scheduled",
      description: `Interview set for ${date?.toDateString()} at ${selectedTime}`,
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
            <Badge variant="secondary">Interview Scheduling</Badge>
          </div>
          <Link to="/client">
            <Button variant="outline" size="sm">Back to Dashboard</Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Interview Scheduling</h1>
          <p className="text-muted-foreground">Schedule and manage interviews with candidates</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Schedule New Interview */}
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-6">Schedule New Interview</h2>
            
            {/* Calendar */}
            <div className="mb-6">
              <label className="text-sm font-medium mb-2 block">Select Date</label>
              <div className="border rounded-lg p-3">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="pointer-events-auto"
                />
              </div>
            </div>

            {/* Time Slots */}
            <div className="mb-6">
              <label className="text-sm font-medium mb-2 block">Select Time</label>
              <div className="grid grid-cols-4 gap-2">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`p-2 rounded-md text-sm border transition-colors ${
                      selectedTime === time
                        ? 'bg-primary text-white border-primary'
                        : 'bg-white hover:border-primary'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Candidate Selection */}
            <div className="mb-6">
              <label className="text-sm font-medium mb-2 block">Select Candidate</label>
              <select className="w-full px-3 py-2 border rounded-md bg-white">
                <option>Sarah Johnson - Senior Developer</option>
                <option>Michael Chen - Product Manager</option>
                <option>Emily Rodriguez - UX Designer</option>
              </select>
            </div>

            {/* Interview Type */}
            <div className="mb-6">
              <label className="text-sm font-medium mb-2 block">Interview Type</label>
              <div className="grid grid-cols-2 gap-2">
                <button className="p-3 rounded-lg border bg-primary text-white border-primary">
                  <Video className="w-5 h-5 mx-auto mb-1" />
                  <span className="text-xs">Video Call</span>
                </button>
                <button className="p-3 rounded-lg border hover:border-primary">
                  <MapPin className="w-5 h-5 mx-auto mb-1" />
                  <span className="text-xs">In-Person</span>
                </button>
              </div>
            </div>

            <Button onClick={handleSchedule} className="w-full shadow-orange">
              <CalendarIcon className="w-4 h-4 mr-2" />
              Schedule Interview
            </Button>
          </Card>

          {/* Upcoming Interviews */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-6">Upcoming Interviews</h2>
              <div className="space-y-4">
                {upcomingInterviews.map((interview) => (
                  <Card key={interview.id} className="p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex gap-3">
                        <div className="w-12 h-12 rounded-lg bg-primary-light flex items-center justify-center text-lg font-bold text-primary">
                          {interview.candidate.charAt(0)}
                        </div>
                        <div>
                          <h3 className="font-bold mb-1">{interview.candidate}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{interview.position}</p>
                          <div className="flex gap-3 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <CalendarIcon className="w-3 h-3" />
                              {interview.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {interview.time}
                            </span>
                            <span className="flex items-center gap-1">
                              {interview.type === "Video Call" ? <Video className="w-3 h-3" /> : <MapPin className="w-3 h-3" />}
                              {interview.type}
                            </span>
                          </div>
                        </div>
                      </div>
                      <Badge className={interview.status === "Confirmed" ? "bg-success text-white" : "bg-warning text-white"}>
                        {interview.status}
                      </Badge>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="w-4 h-4" />
                        <span>Interviewer: {interview.interviewer}</span>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Mail className="w-3 h-3 mr-1" />
                          Notify
                        </Button>
                        <Button variant="outline" size="sm">Reschedule</Button>
                        {interview.type === "Video Call" && (
                          <Button size="sm" className="shadow-orange">
                            <Video className="w-3 h-3 mr-1" />
                            Join Call
                          </Button>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <Card className="p-4">
                <div className="text-2xl font-bold text-primary mb-1">8</div>
                <div className="text-xs text-muted-foreground">This Week</div>
              </Card>
              <Card className="p-4">
                <div className="text-2xl font-bold text-success mb-1">24</div>
                <div className="text-xs text-muted-foreground">This Month</div>
              </Card>
              <Card className="p-4">
                <div className="text-2xl font-bold text-info mb-1">92%</div>
                <div className="text-xs text-muted-foreground">Attendance Rate</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewScheduling;
