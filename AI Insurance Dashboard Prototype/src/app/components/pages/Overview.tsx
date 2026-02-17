import { Card } from "../ui/card";
import { ArrowUpRight, ArrowDownRight, TrendingUp, Users, MessageSquare, Target } from "lucide-react";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { dashboardMetrics, weeklyPerformance, productPerformance, channelPerformance } from "../../data/mockData";

export function Overview() {
  const metrics = [
    {
      title: "Total Messages Sent",
      value: dashboardMetrics.totalMessages.toLocaleString(),
      change: dashboardMetrics.messagesChange,
      icon: MessageSquare,
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Avg AI Confidence",
      value: `${dashboardMetrics.avgConfidence}%`,
      change: dashboardMetrics.confidenceChange,
      icon: Target,
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      title: "Engagement Rate",
      value: `${dashboardMetrics.engagementRate}%`,
      change: dashboardMetrics.engagementChange,
      icon: TrendingUp,
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      title: "Conversion Rate",
      value: `${dashboardMetrics.conversionRate}%`,
      change: dashboardMetrics.conversionChange,
      icon: Users,
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard Overview</h1>
        <p className="text-sm text-gray-600 mt-1">
          Real-time insights into AI-powered insurance marketing operations
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          const isPositive = metric.change > 0;

          return (
            <Card key={metric.title} className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-10 h-10 rounded-lg ${metric.bgColor} flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 ${metric.iconColor}`} />
                </div>
                <div className={`flex items-center gap-1 text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                  {isPositive ? (
                    <ArrowUpRight className="w-4 h-4" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4" />
                  )}
                  <span>{Math.abs(metric.change)}%</span>
                </div>
              </div>
              <h3 className="text-sm text-gray-600 mb-1">{metric.title}</h3>
              <p className="text-2xl font-semibold text-gray-900">{metric.value}</p>
            </Card>
          );
        })}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Performance */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Weekly Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={weeklyPerformance}>
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
              <Line type="monotone" dataKey="messages" stroke="#3b82f6" strokeWidth={2} name="Messages" />
              <Line type="monotone" dataKey="engagement" stroke="#8b5cf6" strokeWidth={2} name="Engagement %" />
              <Line type="monotone" dataKey="conversion" stroke="#ec4899" strokeWidth={2} name="Conversion %" />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Product Distribution */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={productPerformance}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {productPerformance.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Channel Performance Table */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Channel Performance</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm text-gray-600">Channel</th>
                <th className="text-right py-3 px-4 text-sm text-gray-600">Sent</th>
                <th className="text-right py-3 px-4 text-sm text-gray-600">Opened</th>
                <th className="text-right py-3 px-4 text-sm text-gray-600">Clicked</th>
                <th className="text-right py-3 px-4 text-sm text-gray-600">Converted</th>
                <th className="text-right py-3 px-4 text-sm text-gray-600">Confidence</th>
                <th className="text-right py-3 px-4 text-sm text-gray-600">Revenue</th>
              </tr>
            </thead>
            <tbody>
              {channelPerformance.map((channel) => (
                <tr key={channel.channel} className="border-b border-gray-100">
                  <td className="py-3 px-4">
                    <span className="font-medium text-gray-900">{channel.channel}</span>
                  </td>
                  <td className="text-right py-3 px-4 text-gray-700">{channel.sent}</td>
                  <td className="text-right py-3 px-4 text-gray-700">{channel.opened}</td>
                  <td className="text-right py-3 px-4 text-gray-700">{channel.clicked}</td>
                  <td className="text-right py-3 px-4 text-gray-700">{channel.converted}</td>
                  <td className="text-right py-3 px-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs bg-blue-100 text-blue-800">
                      {channel.avgConfidence}%
                    </span>
                  </td>
                  <td className="text-right py-3 px-4 font-medium text-gray-900">
                    ₹{channel.revenue.toLocaleString('en-IN')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}