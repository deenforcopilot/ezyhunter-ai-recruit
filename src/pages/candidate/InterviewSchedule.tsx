import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Building2, Calendar as CalendarIcon, Clock, Video, MapPin, User, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const InterviewSchedule = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedSlot, setSelectedSlot] = useState<string>("");

  const availableSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM", "04:00 PM"
  ];

  const upcomingInterviews = [
    {
      id: 1,
      company: "TechCorp",
      position: "Senior Developer",
      date: "Tomorrow",
      time: "10:00 AM",
      type: "Video Call",
      interviewer: "John Smith",
      status: "Confirmed",
    },
    {
      id: 2,
      company: "StartupX",
      position: "Product Manager",
      date: "Jan 30",
      time: "02:00 PM",
      type: "In-Person",
      location: "Bangkok Office",
      interviewer: "Maria Garcia",
      status: "Pending Confirmation",
    },
  ];

  const handleConfirmSlot = () => {
    if (!selectedSlot) {
      toast({
        title: "Please select a time slot",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Interview Scheduled",
      description: `Your interview has been scheduled for ${date?.toDateString()} at ${selectedSlot}`,
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
            <Badge variant="secondary">Interview Schedule</Badge>
          </div>
          <Link to="/candidate">
            <Button variant="outline" size="sm">Back to Dashboard</Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Interview Schedule</h1>
          <p className="text-muted-foreground">Manage your interview appointments</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-6">Select Interview Time</h2>
            
            <div className="mb-6">
              <label className="text-sm font-medium mb-2 block">Available Dates</label>
              <div className="border rounded-lg p-3">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="pointer-events-auto"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="text-sm font-medium mb-2 block">Available Time Slots</label>
              <div className="grid grid-cols-2 gap-2">
                {availableSlots.map((slot) => (
                  <button
                    key={slot}
                    onClick={() => setSelectedSlot(slot)}
                    className={`p-3 rounded-md text-sm border transition-colors ${
                      selectedSlot === slot
                        ? 'bg-primary text-white border-primary'
                        : 'bg-white hover:border-primary'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            <Button onClick={handleConfirmSlot} className="w-full shadow-orange">
              <CalendarIcon className="w-4 h-4 mr-2" />
              Confirm Schedule
            </Button>
          </Card>

          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-6">Upcoming Interviews</h2>
              <div className="space-y-4">
                {upcomingInterviews.map((interview) => (
                  <Card key={interview.id} className="p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex gap-3">
                        <div className="w-12 h-12 rounded-lg bg-primary-light flex items-center justify-center">
                          <Briefcase className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold mb-1">{interview.position}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{interview.company}</p>
                          <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <CalendarIcon className="w-3 h-3" />
                              {interview.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {interview.time}
                            </span>
                            <span className="flex items-center gap-1">
                              {interview.type === "Video Call" ? (
                                <Video className="w-3 h-3" />
                              ) : (
                                <MapPin className="w-3 h-3" />
                              )}
                              {interview.type}
                            </span>
                          </div>
                          {interview.location && (
                            <p className="text-xs text-muted-foreground mt-1">
                              Location: {interview.location}
                            </p>
                          )}
                        </div>
                      </div>
                      <Badge
                        className={
                          interview.status === "Confirmed"
                            ? "bg-success text-white"
                            : "bg-warning text-white"
                        }
                      >
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
                          Reschedule
                        </Button>
                        {interview.type === "Video Call" && interview.status === "Confirmed" && (
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

            <div className="grid md:grid-cols-3 gap-4">
              <Card className="p-4">
                <div className="text-2xl font-bold text-primary mb-1">5</div>
                <div className="text-xs text-muted-foreground">Scheduled This Month</div>
              </Card>
              <Card className="p-4">
                <div className="text-2xl font-bold text-success mb-1">12</div>
                <div className="text-xs text-muted-foreground">Completed</div>
              </Card>
              <Card className="p-4">
                <div className="text-2xl font-bold text-info mb-1">95%</div>
                <div className="text-xs text-muted-foreground">Attendance Rate</div>
              </Card>
            </div>

            <Card className="p-6 bg-primary-light">
              <h3 className="font-bold mb-3">Interview Tips</h3>
              <ul className="space-y-2 text-sm">
                <li>• Test your camera and microphone 15 minutes before video interviews</li>
                <li>• Research the company and prepare questions</li>
                <li>• Dress professionally, even for video calls</li>
                <li>• Join the call 5 minutes early</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewSchedule;
