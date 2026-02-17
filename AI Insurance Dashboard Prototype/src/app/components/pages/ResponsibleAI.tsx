import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import {
  Shield,
  Eye,
  Lock,
  FileText,
  TrendingUp,
  TrendingDown,
  Minus,
  CheckCircle,
  AlertTriangle,
  Info,
} from "lucide-react";
import { Progress } from "../ui/progress";
import { responsibleAIMetrics, biasMonitoring } from "../../data/mockData";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Tooltip } from "recharts";

const trendIcons = {
  improving: TrendingUp,
  stable: Minus,
  declining: TrendingDown,
};

const statusConfig = {
  Pass: { color: "bg-green-100 text-green-800", icon: CheckCircle },
  Monitor: { color: "bg-yellow-100 text-yellow-800", icon: AlertTriangle },
  Review: { color: "bg-red-100 text-red-800", icon: AlertTriangle },
};

const radarData = [
  { metric: "Transparency", value: responsibleAIMetrics.transparencyScore },
  { metric: "Fairness", value: responsibleAIMetrics.fairnessScore },
  { metric: "Privacy", value: responsibleAIMetrics.privacyCompliance },
  { metric: "Explainability", value: responsibleAIMetrics.explainabilityScore },
  { metric: "Bias Detection", value: responsibleAIMetrics.biasDetectionScore },
  { metric: "Data Quality", value: responsibleAIMetrics.dataQualityScore },
];

export function ResponsibleAI() {
  const avgScore =
    Object.values(responsibleAIMetrics).reduce((sum, val) => sum + val, 0) /
    Object.values(responsibleAIMetrics).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Responsible AI</h1>
        <p className="text-sm text-gray-600 mt-1">
          Transparency, fairness, and ethical AI practices monitoring
        </p>
      </div>

      {/* Overall Score */}
      <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                {avgScore.toFixed(1)}%
              </h2>
              <p className="text-sm text-gray-600">Overall Responsible AI Score</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="text-sm font-medium text-green-700">
              Exceeding Industry Standards
            </span>
          </div>
        </div>
      </Card>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="p-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Eye className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm text-gray-600">Transparency Score</h3>
              <p className="text-xl font-semibold text-gray-900">
                {responsibleAIMetrics.transparencyScore}%
              </p>
            </div>
          </div>
          <Progress value={responsibleAIMetrics.transparencyScore} className="h-2" />
          <p className="text-xs text-gray-600 mt-2">
            All AI decisions include explainable reasoning
          </p>
        </Card>

        <Card className="p-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-purple-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm text-gray-600">Fairness Score</h3>
              <p className="text-xl font-semibold text-gray-900">
                {responsibleAIMetrics.fairnessScore}%
              </p>
            </div>
          </div>
          <Progress value={responsibleAIMetrics.fairnessScore} className="h-2" />
          <p className="text-xs text-gray-600 mt-2">
            Balanced treatment across all demographics
          </p>
        </Card>

        <Card className="p-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Lock className="w-5 h-5 text-green-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm text-gray-600">Privacy Compliance</h3>
              <p className="text-xl font-semibold text-gray-900">
                {responsibleAIMetrics.privacyCompliance}%
              </p>
            </div>
          </div>
          <Progress value={responsibleAIMetrics.privacyCompliance} className="h-2" />
          <p className="text-xs text-gray-600 mt-2">
            GDPR, CCPA, and industry standards compliant
          </p>
        </Card>

        <Card className="p-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-orange-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm text-gray-600">Explainability Score</h3>
              <p className="text-xl font-semibold text-gray-900">
                {responsibleAIMetrics.explainabilityScore}%
              </p>
            </div>
          </div>
          <Progress value={responsibleAIMetrics.explainabilityScore} className="h-2" />
          <p className="text-xs text-gray-600 mt-2">
            Clear factor weighting and decision paths
          </p>
        </Card>

        <Card className="p-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-red-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm text-gray-600">Bias Detection</h3>
              <p className="text-xl font-semibold text-gray-900">
                {responsibleAIMetrics.biasDetectionScore}%
              </p>
            </div>
          </div>
          <Progress value={responsibleAIMetrics.biasDetectionScore} className="h-2" />
          <p className="text-xs text-gray-600 mt-2">
            Active monitoring across all segments
          </p>
        </Card>

        <Card className="p-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
              <Info className="w-5 h-5 text-cyan-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm text-gray-600">Data Quality</h3>
              <p className="text-xl font-semibold text-gray-900">
                {responsibleAIMetrics.dataQualityScore}%
              </p>
            </div>
          </div>
          <Progress value={responsibleAIMetrics.dataQualityScore} className="h-2" />
          <p className="text-xs text-gray-600 mt-2">
            High accuracy and completeness standards
          </p>
        </Card>
      </div>

      {/* Radar Chart and Bias Monitoring */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Radar Chart */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Responsible AI Metrics Overview
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={radarData}>
              <PolarGrid stroke="#e5e7eb" />
              <PolarAngleAxis dataKey="metric" tick={{ fill: "#6b7280", fontSize: 12 }} />
              <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: "#6b7280" }} />
              <Radar
                name="Score"
                dataKey="value"
                stroke="#8b5cf6"
                fill="#8b5cf6"
                fillOpacity={0.6}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </Card>

        {/* Bias Monitoring */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Bias Monitoring</h3>
          <div className="space-y-4">
            {biasMonitoring.map((item) => {
              const statusInfo = statusConfig[item.status as keyof typeof statusConfig];
              const StatusIcon = statusInfo.icon;
              const TrendIcon = trendIcons[item.trend as keyof typeof trendIcons];

              return (
                <div
                  key={item.category}
                  className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium text-gray-900">{item.category}</h4>
                      <Badge className={statusInfo.color}>
                        <StatusIcon className="w-3 h-3 mr-1" />
                        {item.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600">
                      <TrendIcon className="w-4 h-4" />
                      <span className="text-xs capitalize">{item.trend}</span>
                    </div>
                  </div>
                  <div className="mb-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-gray-600">Fairness Score</span>
                      <span className="text-sm font-medium text-gray-900">{item.score}%</span>
                    </div>
                    <Progress value={item.score} className="h-1.5" />
                  </div>
                  <p className="text-xs text-gray-600">{item.details}</p>
                </div>
              );
            })}
          </div>
        </Card>
      </div>

      {/* Transparency Features */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Transparency & Explainability Features
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
              <FileText className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-1">Decision Logging</h4>
              <p className="text-sm text-gray-600">
                Every AI decision is logged with complete reasoning, factor weights, and
                confidence scores for full auditability.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
              <Eye className="w-4 h-4 text-purple-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-1">Human Oversight</h4>
              <p className="text-sm text-gray-600">
                Human reviewers can inspect any decision, with alerts triggered for
                low-confidence or edge cases.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
              <Shield className="w-4 h-4 text-green-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-1">Bias Testing</h4>
              <p className="text-sm text-gray-600">
                Continuous automated testing for demographic bias with monthly audits
                across all customer segments.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
              <Lock className="w-4 h-4 text-orange-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-1">Data Privacy</h4>
              <p className="text-sm text-gray-600">
                Strict data minimization, encryption at rest and in transit, with
                customer consent management built-in.
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Compliance Status */}
      <Card className="p-6 bg-green-50 border-green-200">
        <div className="flex items-start gap-3">
          <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-green-900 mb-2">Compliance Status</h3>
            <p className="text-sm text-green-800 mb-3">
              This system is fully compliant with major data protection and AI ethics
              regulations:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              <Badge variant="outline" className="bg-white border-green-300 text-green-800">
                GDPR
              </Badge>
              <Badge variant="outline" className="bg-white border-green-300 text-green-800">
                CCPA
              </Badge>
              <Badge variant="outline" className="bg-white border-green-300 text-green-800">
                SOC 2
              </Badge>
              <Badge variant="outline" className="bg-white border-green-300 text-green-800">
                ISO 27001
              </Badge>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
