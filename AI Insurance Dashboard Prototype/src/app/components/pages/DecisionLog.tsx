import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Clock, TrendingUp, Mail, Smartphone, MessageSquare, CheckCircle, Calendar, AlertCircle } from "lucide-react";
import { aiDecisions } from "../../data/mockData";
import { format } from "date-fns";

const channelIcons = {
  Email: Mail,
  "Mobile App": Smartphone,
  SMS: MessageSquare,
  "Push Notification": MessageSquare,
};

const outcomeConfig = {
  sent: { label: "Sent", color: "bg-green-100 text-green-800", icon: CheckCircle },
  scheduled: { label: "Scheduled", color: "bg-blue-100 text-blue-800", icon: Calendar },
  skipped: { label: "Skipped", color: "bg-gray-100 text-gray-800", icon: AlertCircle },
};

export function DecisionLog() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">AI Decision Log</h1>
        <p className="text-sm text-gray-600 mt-1">
          Transparent view of AI decision-making process and reasoning
        </p>
      </div>

      {/* Decision Cards */}
      <div className="space-y-4">
        {aiDecisions.map((decision) => {
          const ChannelIcon = channelIcons[decision.channel as keyof typeof channelIcons];
          const outcomeInfo = outcomeConfig[decision.outcome];
          const OutcomeIcon = outcomeInfo.icon;

          return (
            <Card key={decision.id} className="p-6">
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-gray-900">{decision.customerName}</h3>
                    <Badge variant="outline" className="text-xs">
                      {decision.customerId}
                    </Badge>
                  </div>
                  <p className="text-sm text-blue-600 font-medium">{decision.product}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className={outcomeInfo.color}>
                    <OutcomeIcon className="w-3 h-3 mr-1" />
                    {outcomeInfo.label}
                  </Badge>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    {format(decision.timestamp, "MMM dd, h:mm a")}
                  </div>
                </div>
              </div>

              {/* Decision Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="flex items-center gap-2">
                  {ChannelIcon && <ChannelIcon className="w-4 h-4 text-gray-600" />}
                  <div>
                    <p className="text-xs text-gray-600">Channel</p>
                    <p className="text-sm font-medium text-gray-900">{decision.channel}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-600" />
                  <div>
                    <p className="text-xs text-gray-600">Timing</p>
                    <p className="text-sm font-medium text-gray-900">{decision.timing}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-gray-600" />
                  <div>
                    <p className="text-xs text-gray-600">Confidence Score</p>
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium text-gray-900">
                        {(decision.confidence * 100).toFixed(0)}%
                      </p>
                      <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${
                            decision.confidence >= 0.85
                              ? "bg-green-500"
                              : decision.confidence >= 0.7
                              ? "bg-yellow-500"
                              : "bg-red-500"
                          }`}
                          style={{ width: `${decision.confidence * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decision Factors */}
              <div className="border-t border-gray-200 pt-4 mb-4">
                <h4 className="text-sm font-medium text-gray-900 mb-3">Decision Factors</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {decision.factors.map((factor, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <p className="text-sm text-gray-700">{factor.factor}</p>
                          <span className="text-xs text-gray-600">{(factor.weight * 100).toFixed(0)}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden mb-1">
                          <div
                            className="h-full bg-blue-500"
                            style={{ width: `${factor.weight * 100}%` }}
                          />
                        </div>
                        <p className="text-xs text-gray-600">{factor.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Reasoning */}
              <div className="bg-purple-50 rounded-lg p-4">
                <div className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-purple-900 mb-1">AI Reasoning</p>
                    <p className="text-sm text-purple-700">{decision.reason}</p>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4">
          <p className="text-sm text-gray-600 mb-1">Avg Confidence</p>
          <p className="text-2xl font-semibold text-gray-900">
            {(aiDecisions.reduce((sum, d) => sum + d.confidence, 0) / aiDecisions.length * 100).toFixed(1)}%
          </p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-gray-600 mb-1">Decisions Today</p>
          <p className="text-2xl font-semibold text-gray-900">{aiDecisions.length}</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-gray-600 mb-1">High Confidence</p>
          <p className="text-2xl font-semibold text-gray-900">
            {aiDecisions.filter((d) => d.confidence >= 0.85).length}
          </p>
        </Card>
      </div>
    </div>
  );
}
