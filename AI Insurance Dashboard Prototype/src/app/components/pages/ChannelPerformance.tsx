import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Mail, Smartphone, MessageSquare, Bell, TrendingUp, DollarSign } from "lucide-react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { channelPerformance } from "../../data/mockData";

const channelIcons = {
  Email: Mail,
  "Mobile App": Smartphone,
  SMS: MessageSquare,
  "Push Notification": Bell,
};

const conversionData = [
  { week: "Week 1", Email: 14.2, "Mobile App": 18.5, SMS: 12.8, "Push Notification": 8.3 },
  { week: "Week 2", Email: 15.1, "Mobile App": 19.2, SMS: 13.5, "Push Notification": 9.1 },
  { week: "Week 3", Email: 14.8, "Mobile App": 20.1, SMS: 14.2, "Push Notification": 8.9 },
  { week: "Week 4", Email: 16.4, "Mobile App": 32.0, SMS: 30.7, "Push Notification": 15.0 },
];

const engagementTrend = [
  { day: "Mon", Email: 76, "Mobile App": 94, SMS: 91, "Push Notification": 67 },
  { day: "Tue", Email: 78, "Mobile App": 95, SMS: 92, "Push Notification": 68 },
  { day: "Wed", Email: 75, "Mobile App": 93, SMS: 90, "Push Notification": 65 },
  { day: "Thu", Email: 79, "Mobile App": 96, SMS: 93, "Push Notification": 70 },
  { day: "Fri", Email: 77, "Mobile App": 94, SMS: 91, "Push Notification": 69 },
  { day: "Sat", Email: 72, "Mobile App": 91, SMS: 88, "Push Notification": 64 },
  { day: "Sun", Email: 73, "Mobile App": 92, SMS: 89, "Push Notification": 65 },
];

export function ChannelPerformance() {
  const totalRevenue = channelPerformance.reduce((sum, ch) => sum + ch.revenue, 0);
  const totalConverted = channelPerformance.reduce((sum, ch) => sum + ch.converted, 0);
  const totalSent = channelPerformance.reduce((sum, ch) => sum + ch.sent, 0);
  const avgConversionRate = (totalConverted / totalSent) * 100;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Channel Performance</h1>
        <p className="text-sm text-gray-600 mt-1">
          Compare effectiveness across communication channels
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Total Revenue</p>
            <DollarSign className="w-4 h-4 text-green-600" />
          </div>
          <p className="text-2xl font-semibold text-gray-900">
            ₹{totalRevenue.toLocaleString('en-IN')}
          </p>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Total Conversions</p>
            <TrendingUp className="w-4 h-4 text-blue-600" />
          </div>
          <p className="text-2xl font-semibold text-gray-900">{totalConverted}</p>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Avg Conversion</p>
            <TrendingUp className="w-4 h-4 text-purple-600" />
          </div>
          <p className="text-2xl font-semibold text-gray-900">
            {avgConversionRate.toFixed(1)}%
          </p>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Total Sent</p>
            <MessageSquare className="w-4 h-4 text-orange-600" />
          </div>
          <p className="text-2xl font-semibold text-gray-900">{totalSent}</p>
        </Card>
      </div>

      {/* Channel Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {channelPerformance.map((channel) => {
          const Icon = channelIcons[channel.channel as keyof typeof channelIcons];
          const openRate = ((channel.opened / channel.sent) * 100).toFixed(1);
          const clickRate = ((channel.clicked / channel.opened) * 100).toFixed(1);
          const conversionRate = ((channel.converted / channel.sent) * 100).toFixed(1);

          return (
            <Card key={channel.channel} className="p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  {Icon && <Icon className="w-5 h-5 text-blue-600" />}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{channel.channel}</h3>
                  <Badge variant="outline" className="mt-1 text-xs">
                    {channel.avgConfidence}% Confidence
                  </Badge>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-gray-600">Open Rate</span>
                    <span className="text-xs font-medium text-gray-900">{openRate}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-500"
                      style={{ width: `${openRate}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-gray-600">Click Rate</span>
                    <span className="text-xs font-medium text-gray-900">{clickRate}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-purple-500"
                      style={{ width: `${clickRate}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-gray-600">Conversion</span>
                    <span className="text-xs font-medium text-gray-900">{conversionRate}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-green-500"
                      style={{ width: `${conversionRate}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600">Revenue</span>
                  <span className="font-semibold text-gray-900">
                    ₹{channel.revenue.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Conversion Trends */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Conversion Rate Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={conversionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="week" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                }}
              />
              <Legend />
              <Bar dataKey="Email" fill="#3b82f6" />
              <Bar dataKey="Mobile App" fill="#8b5cf6" />
              <Bar dataKey="SMS" fill="#ec4899" />
              <Bar dataKey="Push Notification" fill="#f59e0b" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Engagement Trends */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Weekly Engagement Rates</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={engagementTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="day" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                }}
              />
              <Legend />
              <Line type="monotone" dataKey="Email" stroke="#3b82f6" strokeWidth={2} />
              <Line type="monotone" dataKey="Mobile App" stroke="#8b5cf6" strokeWidth={2} />
              <Line type="monotone" dataKey="SMS" stroke="#ec4899" strokeWidth={2} />
              <Line type="monotone" dataKey="Push Notification" stroke="#f59e0b" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* AI Recommendations */}
      <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">AI Channel Recommendations</h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3 bg-white rounded-lg p-3">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-4 h-4 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Mobile App showing strong performance</p>
              <p className="text-xs text-gray-600 mt-1">
                32% conversion rate with high engagement scores. Consider increasing allocation by 15%.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-white rounded-lg p-3">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <MessageSquare className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">SMS engagement improving</p>
              <p className="text-xs text-gray-600 mt-1">
                30.7% conversion rate this week. Optimal for time-sensitive offers and reminders.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-white rounded-lg p-3">
            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Mail className="w-4 h-4 text-purple-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Email best for detailed content</p>
              <p className="text-xs text-gray-600 mt-1">
                Highest confidence scores (85.2%) for complex products requiring explanation.
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}