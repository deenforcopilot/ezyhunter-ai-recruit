import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Send, Paperclip, Phone, Video, MoreVertical, X } from "lucide-react";
import { useState } from "react";

interface Message {
  id: number;
  sender: string;
  senderType: "client" | "recruiter" | "candidate";
  content: string;
  timestamp: string;
}

interface ChatPanelProps {
  onClose?: () => void;
}

const ChatPanel = ({ onClose }: ChatPanelProps) => {
  const [message, setMessage] = useState("");
  const [messages] = useState<Message[]>([
    {
      id: 1,
      sender: "Recruiter John",
      senderType: "recruiter",
      content: "Hi! I've found a great candidate for your Senior Developer position.",
      timestamp: "10:30 AM"
    },
    {
      id: 2,
      sender: "TechCorp",
      senderType: "client",
      content: "Great! Can you share their profile?",
      timestamp: "10:32 AM"
    },
    {
      id: 3,
      sender: "Recruiter John",
      senderType: "recruiter",
      content: "Sure! Sarah Johnson has 5 years experience with React and Node.js. I've submitted her profile for your review.",
      timestamp: "10:35 AM"
    },
    {
      id: 4,
      sender: "Sarah Johnson",
      senderType: "candidate",
      content: "Hello! I'm very interested in this position. When can we schedule an interview?",
      timestamp: "11:00 AM"
    },
  ]);

  const handleSend = () => {
    if (message.trim()) {
      // Handle send message
      setMessage("");
    }
  };

  const getSenderColor = (type: string) => {
    switch (type) {
      case "client":
        return "bg-primary text-white";
      case "recruiter":
        return "bg-info text-white";
      case "candidate":
        return "bg-success text-white";
      default:
        return "bg-muted";
    }
  };

  return (
    <Card className="flex flex-col h-[600px] max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <div>
          <h3 className="font-bold">Senior Developer Position</h3>
          <div className="flex gap-2 mt-1">
            <Badge variant="secondary" className="text-xs">3 participants</Badge>
            <Badge className="bg-success text-white text-xs">Active</Badge>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Phone className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Video className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <MoreVertical className="w-4 h-4" />
          </Button>
          {onClose && (
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className="flex gap-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${getSenderColor(msg.senderType)}`}>
              {msg.sender.charAt(0)}
            </div>
            <div className="flex-1">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-medium text-sm">{msg.sender}</span>
                <Badge variant="secondary" className="text-xs capitalize">
                  {msg.senderType}
                </Badge>
                <span className="text-xs text-muted-foreground">{msg.timestamp}</span>
              </div>
              <div className="bg-secondary p-3 rounded-lg text-sm">
                {msg.content}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 border-t">
        <div className="flex gap-2">
          <Button variant="ghost" size="icon">
            <Paperclip className="w-4 h-4" />
          </Button>
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type a message..."
            className="flex-1"
          />
          <Button onClick={handleSend} className="shadow-orange">
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ChatPanel;
