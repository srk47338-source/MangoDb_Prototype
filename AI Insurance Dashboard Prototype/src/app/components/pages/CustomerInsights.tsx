import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Search, Filter, TrendingUp, Mail, Smartphone, MessageSquare } from "lucide-react";
import { customers } from "../../data/mockData";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const channelIcons = {
  Email: Mail,
  "Mobile App": Smartphone,
  SMS: MessageSquare,
};

export function CustomerInsights() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Customer Insights</h1>
          <p className="text-sm text-gray-600 mt-1">
            AI-analyzed customer profiles and preferences
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search customers..."
              className="pl-9 w-64"
            />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>
      </div>

      {/* Customer Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {customers.map((customer) => {
          const ChannelIcon = channelIcons[customer.preferredChannel as keyof typeof channelIcons];
          
          return (
            <Card key={customer.id} className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold">
                    {customer.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{customer.name}</h3>
                    <p className="text-sm text-gray-600">{customer.id}</p>
                  </div>
                </div>
                <Badge variant={customer.engagementScore >= 85 ? "default" : "secondary"}>
                  {customer.engagementScore}% Engaged
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-xs text-gray-600 mb-1">Age & Segment</p>
                  <p className="text-sm font-medium text-gray-900">{customer.age} yrs</p>
                  <p className="text-xs text-gray-600">{customer.segment}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-1">Life Stage</p>
                  <p className="text-sm font-medium text-gray-900">{customer.lifestage}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-1">Risk Profile</p>
                  <Badge variant="outline" className="text-xs">
                    {customer.riskProfile} Risk
                  </Badge>
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-1">Lifetime Value</p>
                  <p className="text-sm font-medium text-gray-900">
                    ₹{customer.ltv.toLocaleString('en-IN')}
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {ChannelIcon && <ChannelIcon className="w-4 h-4 text-gray-600" />}
                    <p className="text-sm text-gray-600">Preferred Channel</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{customer.preferredChannel}</p>
                </div>
              </div>

              {/* AI Insights */}
              <div className="mt-4 bg-blue-50 rounded-lg p-3">
                <div className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-blue-900 mb-1">AI Insight</p>
                    <p className="text-xs text-blue-700">
                      {getAIInsight(customer)}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <p className="text-sm text-gray-600 mb-1">Total Customers</p>
          <p className="text-2xl font-semibold text-gray-900">{customers.length}</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-gray-600 mb-1">Avg Engagement</p>
          <p className="text-2xl font-semibold text-gray-900">
            {(customers.reduce((sum, c) => sum + c.engagementScore, 0) / customers.length).toFixed(1)}%
          </p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-gray-600 mb-1">Total LTV</p>
          <p className="text-2xl font-semibold text-gray-900">
            ₹{customers.reduce((sum, c) => sum + c.ltv, 0).toLocaleString('en-IN')}
          </p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-gray-600 mb-1">High Engagement</p>
          <p className="text-2xl font-semibold text-gray-900">
            {customers.filter((c) => c.engagementScore >= 85).length}
          </p>
        </Card>
      </div>
    </div>
  );
}

function getAIInsight(customer: typeof customers[0]): string {
  if (customer.lifestage === "New Parent") {
    return "High propensity for life insurance. Recent family changes indicate strong conversion potential.";
  } else if (customer.lifestage === "Mid-Career" && customer.engagementScore > 90) {
    return "Excellent engagement with premium products. Consider upsell opportunities for comprehensive coverage.";
  } else if (customer.lifestage === "First-Time Buyer") {
    return "Budget-sensitive segment. Focus on starter packages and educational content to build trust.";
  } else if (customer.lifestage === "Empty Nester" || customer.lifestage === "Pre-Retirement") {
    return "High-value segment entering retirement planning phase. Strong candidate for wealth protection products.";
  } else {
    return "Growing family needs indicate opportunity for home and auto bundle expansion.";
  }
}