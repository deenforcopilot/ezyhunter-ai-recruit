import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bell, CheckCircle, AlertCircle, Info, Calendar, DollarSign, Users, X } from "lucide-react";
import { useState } from "react";

interface Notification {
  id: number;
  type: "success" | "warning" | "info";
  title: string;
  message: string;
  time: string;
  read: boolean;
}

const NotificationCenter = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      type: "success",
      title: "Interview Scheduled",
      message: "Sarah Johnson - Tomorrow at 10:00 AM",
      time: "5 min ago",
      read: false
    },
    {
      id: 2,
      type: "info",
      title: "New Candidate Submitted",
      message: "Recruiter John submitted Michael Chen for review",
      time: "1 hour ago",
      read: false
    },
    {
      id: 3,
      type: "warning",
      title: "Payment Pending",
      message: "Invoice #1234 is due in 3 days",
      time: "2 hours ago",
      read: false
    },
    {
      id: 4,
      type: "success",
      title: "Application Approved",
      message: "Your application for Senior Developer was approved",
      time: "Yesterday",
      read: true
    },
    {
      id: 5,
      type: "info",
      title: "Commission Received",
      message: "You received ฿45,000 for Sarah Johnson placement",
      time: "2 days ago",
      read: true
    },
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "success":
        return <CheckCircle className="w-5 h-5 text-success" />;
      case "warning":
        return <AlertCircle className="w-5 h-5 text-warning" />;
      case "info":
        return <Info className="w-5 h-5 text-info" />;
      default:
        return <Bell className="w-5 h-5" />;
    }
  };

  const getIconBg = (type: string) => {
    switch (type) {
      case "success":
        return "bg-success/10";
      case "warning":
        return "bg-warning/10";
      case "info":
        return "bg-info/10";
      default:
        return "bg-muted";
    }
  };

  return (
    <Card className="w-full max-w-md">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-2">
          <Bell className="w-5 h-5" />
          <h3 className="font-bold">Notifications</h3>
          {unreadCount > 0 && (
            <Badge className="bg-primary">{unreadCount}</Badge>
          )}
        </div>
        {unreadCount > 0 && (
          <Button variant="ghost" size="sm" onClick={markAllAsRead}>
            Mark all read
          </Button>
        )}
      </div>

      {/* Notifications List */}
      <div className="max-h-[500px] overflow-y-auto">
        {notifications.length === 0 ? (
          <div className="p-8 text-center text-muted-foreground">
            <Bell className="w-12 h-12 mx-auto mb-3 opacity-20" />
            <p>No notifications yet</p>
          </div>
        ) : (
          <div className="divide-y">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 hover:bg-secondary transition-colors ${
                  !notification.read ? 'bg-primary-light/30' : ''
                }`}
              >
                <div className="flex gap-3">
                  <div className={`w-10 h-10 rounded-lg ${getIconBg(notification.type)} flex items-center justify-center flex-shrink-0`}>
                    {getIcon(notification.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h4 className={`text-sm font-medium ${!notification.read ? 'text-foreground' : 'text-muted-foreground'}`}>
                        {notification.title}
                      </h4>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6 flex-shrink-0"
                        onClick={() => deleteNotification(notification.id)}
                      >
                        <X className="w-3 h-3" />
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {notification.message}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        {notification.time}
                      </span>
                      {!notification.read && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-6 text-xs"
                          onClick={() => markAsRead(notification.id)}
                        >
                          Mark as read
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      {notifications.length > 0 && (
        <div className="p-3 border-t text-center">
          <Button variant="ghost" size="sm" className="text-primary">
            View All Notifications
          </Button>
        </div>
      )}
    </Card>
  );
};

export default NotificationCenter;
