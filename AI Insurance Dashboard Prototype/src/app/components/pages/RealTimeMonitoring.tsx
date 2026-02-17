import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Activity, CheckCircle, Clock, AlertTriangle, Database, Cpu, Zap } from "lucide-react";
import { realtimeEvents } from "../../data/mockData";
import { format } from "date-fns";
import { useState, useEffect } from "react";

const eventTypeConfig = {
  analysis: {
    label: "Analysis",
    color: "bg-blue-100 text-blue-800",
    icon: Database,
    borderColor: "border-blue-500",
  },
  decision: {
    label: "Decision",
    color: "bg-purple-100 text-purple-800",
    icon: Cpu,
    borderColor: "border-purple-500",
  },
  delivery: {
    label: "Delivery",
    color: "bg-green-100 text-green-800",
    icon: Zap,
    borderColor: "border-green-500",
  },
  engagement: {
    label: "Engagement",
    color: "bg-orange-100 text-orange-800",
    icon: Activity,
    borderColor: "border-orange-500",
  },
};

const statusConfig = {
  success: { icon: CheckCircle, color: "text-green-600" },
  pending: { icon: Clock, color: "text-yellow-600" },
  warning: { icon: AlertTriangle, color: "text-red-600" },
};

export function RealTimeMonitoring() {
  const [events, setEvents] = useState(realtimeEvents);
  const [isLive, setIsLive] = useState(true);

  // Simulate real-time updates
  useEffect(() => {
    if (!isLive) return;

    const interval = setInterval(() => {
      const newEvent = generateRandomEvent();
      setEvents((prev) => [newEvent, ...prev.slice(0, 19)]);
    }, 5000);

    return () => clearInterval(interval);
  }, [isLive]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Real-Time Monitoring</h1>
          <p className="text-sm text-gray-600 mt-1">
            Live AI operations and decision-making pipeline
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${isLive ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`} />
            <span className="text-sm text-gray-700">{isLive ? 'Live' : 'Paused'}</span>
          </div>
          <button
            onClick={() => setIsLive(!isLive)}
            className="px-3 py-1.5 text-sm bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            {isLive ? 'Pause' : 'Resume'}
          </button>
        </div>
      </div>

      {/* System Status */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">System Status</p>
            <CheckCircle className="w-4 h-4 text-green-600" />
          </div>
          <p className="text-xl font-semibold text-gray-900">Operational</p>
          <p className="text-xs text-gray-600 mt-1">All systems running</p>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Processing Rate</p>
            <Activity className="w-4 h-4 text-blue-600" />
          </div>
          <p className="text-xl font-semibold text-gray-900">247/min</p>
          <p className="text-xs text-gray-600 mt-1">Above average</p>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Avg Response Time</p>
            <Zap className="w-4 h-4 text-yellow-600" />
          </div>
          <p className="text-xl font-semibold text-gray-900">127ms</p>
          <p className="text-xs text-gray-600 mt-1">Excellent latency</p>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Success Rate</p>
            <CheckCircle className="w-4 h-4 text-green-600" />
          </div>
          <p className="text-xl font-semibold text-gray-900">99.8%</p>
          <p className="text-xs text-gray-600 mt-1">Last 24 hours</p>
        </Card>
      </div>

      {/* Event Stream */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Live Event Stream</h3>
        <div className="space-y-3 max-h-[600px] overflow-y-auto">
          {events.map((event) => {
            const typeInfo = eventTypeConfig[event.type];
            const statusInfo = statusConfig[event.status];
            const TypeIcon = typeInfo.icon;
            const StatusIcon = statusInfo.icon;

            return (
              <div
                key={event.id}
                className={`border-l-4 ${typeInfo.borderColor} bg-gray-50 rounded-r-lg p-4 hover:bg-gray-100 transition-colors`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3 flex-1">
                    <div className={`w-8 h-8 rounded-lg ${typeInfo.color} flex items-center justify-center flex-shrink-0`}>
                      <TypeIcon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline" className="text-xs">
                          {typeInfo.label}
                        </Badge>
                        <span className="text-xs text-gray-600">
                          {format(event.timestamp, "h:mm:ss a")}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-gray-900 mb-1">
                        {event.description}
                      </p>
                      <p className="text-xs text-gray-600">{event.details}</p>
                    </div>
                  </div>
                  <StatusIcon className={`w-5 h-5 ${statusInfo.color} flex-shrink-0`} />
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Pipeline Visualization */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Pipeline Flow</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <div className="bg-blue-50 border-2 border-blue-500 rounded-lg p-4">
              <Database className="w-6 h-6 text-blue-600 mb-2" />
              <h4 className="font-medium text-gray-900 mb-1">Data Collection</h4>
              <p className="text-xs text-gray-600">Customer data aggregation</p>
              <div className="mt-2 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs text-green-700">Active</span>
              </div>
            </div>
            <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2">
              <div className="w-4 h-4 rotate-45 border-t-2 border-r-2 border-gray-300" />
            </div>
          </div>

          <div className="relative">
            <div className="bg-purple-50 border-2 border-purple-500 rounded-lg p-4">
              <Cpu className="w-6 h-6 text-purple-600 mb-2" />
              <h4 className="font-medium text-gray-900 mb-1">AI Analysis</h4>
              <p className="text-xs text-gray-600">Profile & preference analysis</p>
              <div className="mt-2 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs text-green-700">Processing</span>
              </div>
            </div>
            <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2">
              <div className="w-4 h-4 rotate-45 border-t-2 border-r-2 border-gray-300" />
            </div>
          </div>

          <div className="relative">
            <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4">
              <Zap className="w-6 h-6 text-green-600 mb-2" />
              <h4 className="font-medium text-gray-900 mb-1">Decision Making</h4>
              <p className="text-xs text-gray-600">Channel & content selection</p>
              <div className="mt-2 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs text-green-700">Active</span>
              </div>
            </div>
            <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2">
              <div className="w-4 h-4 rotate-45 border-t-2 border-r-2 border-gray-300" />
            </div>
          </div>

          <div>
            <div className="bg-orange-50 border-2 border-orange-500 rounded-lg p-4">
              <Activity className="w-6 h-6 text-orange-600 mb-2" />
              <h4 className="font-medium text-gray-900 mb-1">Delivery & Track</h4>
              <p className="text-xs text-gray-600">Message delivery & monitoring</p>
              <div className="mt-2 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs text-green-700">Delivering</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

// Helper function to generate random events for demonstration
function generateRandomEvent() {
  const types: Array<"analysis" | "decision" | "delivery" | "engagement"> = [
    "analysis",
    "decision",
    "delivery",
    "engagement",
  ];
  const statuses: Array<"success" | "pending" | "warning"> = ["success", "pending"];
  const descriptions = {
    analysis: [
      "Customer profile analysis completed",
      "Data enrichment in progress",
      "Preference learning updated",
    ],
    decision: [
      "AI selected Auto Insurance product",
      "Channel optimization completed",
      "Timing algorithm executed",
    ],
    delivery: [
      "Message delivered via Email",
      "SMS notification sent",
      "Push notification delivered",
    ],
    engagement: [
      "Email opened by customer",
      "Link clicked in message",
      "App session started",
    ],
  };

  const type = types[Math.floor(Math.random() * types.length)];
  const status = statuses[Math.floor(Math.random() * statuses.length)];
  const description =
    descriptions[type][Math.floor(Math.random() * descriptions[type].length)];

  return {
    id: `E${Date.now()}`,
    timestamp: new Date(),
    type,
    description,
    status,
    details: `Customer ID: C00${Math.floor(Math.random() * 9) + 1}`,
  };
}
