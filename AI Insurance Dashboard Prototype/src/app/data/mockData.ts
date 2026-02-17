// Mock data for the AI Insurance Marketing Dashboard

export interface Customer {
  id: string;
  name: string;
  age: number;
  segment: string;
  lifestage: string;
  riskProfile: string;
  preferredChannel: string;
  engagementScore: number;
  ltv: number;
}

export interface AIDecision {
  id: string;
  timestamp: Date;
  customerId: string;
  customerName: string;
  product: string;
  channel: string;
  timing: string;
  confidence: number;
  factors: Array<{
    factor: string;
    weight: number;
    value: string;
  }>;
  outcome: "sent" | "scheduled" | "skipped";
  reason: string;
}

export interface RealtimeEvent {
  id: string;
  timestamp: Date;
  type: "analysis" | "decision" | "delivery" | "engagement";
  description: string;
  status: "success" | "pending" | "warning";
  details: string;
}

export const customers: Customer[] = [
  {
    id: "C001",
    name: "Priya Sharma",
    age: 34,
    segment: "Young Professionals",
    lifestage: "New Parent",
    riskProfile: "Low",
    preferredChannel: "Email",
    engagementScore: 87,
    ltv: 1050000,
  },
  {
    id: "C002",
    name: "Rajesh Kumar",
    age: 45,
    segment: "Established Family",
    lifestage: "Mid-Career",
    riskProfile: "Medium",
    preferredChannel: "Mobile App",
    engagementScore: 92,
    ltv: 2100000,
  },
  {
    id: "C003",
    name: "Ananya Patel",
    age: 28,
    segment: "Digital Natives",
    lifestage: "First-Time Buyer",
    riskProfile: "Low",
    preferredChannel: "SMS",
    engagementScore: 78,
    ltv: 715000,
  },
  {
    id: "C004",
    name: "Vikram Singh",
    age: 52,
    segment: "Pre-Retirement",
    lifestage: "Empty Nester",
    riskProfile: "Low",
    preferredChannel: "Email",
    engagementScore: 95,
    ltv: 3780000,
  },
  {
    id: "C005",
    name: "Lakshmi Iyer",
    age: 38,
    segment: "Established Family",
    lifestage: "Growing Family",
    riskProfile: "Medium",
    preferredChannel: "Mobile App",
    engagementScore: 84,
    ltv: 1512000,
  },
];

export const aiDecisions: AIDecision[] = [
  {
    id: "D001",
    timestamp: new Date("2026-02-17T09:23:00"),
    customerId: "C001",
    customerName: "Priya Sharma",
    product: "Life Insurance - Family Protection",
    channel: "Email",
    timing: "Tuesday 10:00 AM",
    confidence: 0.89,
    factors: [
      { factor: "Life Stage", weight: 0.35, value: "New Parent" },
      { factor: "Recent Search History", weight: 0.25, value: "Family Planning" },
      { factor: "Email Engagement", weight: 0.20, value: "High (87%)" },
      { factor: "Income Bracket", weight: 0.20, value: "Mid-High" },
    ],
    outcome: "sent",
    reason: "High confidence match: New parent profile with active family planning research",
  },
  {
    id: "D002",
    timestamp: new Date("2026-02-17T09:15:00"),
    customerId: "C002",
    customerName: "Rajesh Kumar",
    product: "Auto Insurance - Premium Plus",
    channel: "Mobile App",
    timing: "Tuesday 8:30 AM",
    confidence: 0.92,
    factors: [
      { factor: "Vehicle Purchase", weight: 0.40, value: "Recent (14 days ago)" },
      { factor: "App Usage Pattern", weight: 0.25, value: "Morning Active" },
      { factor: "Income Level", weight: 0.20, value: "High" },
      { factor: "Previous Claims", weight: 0.15, value: "Zero" },
    ],
    outcome: "sent",
    reason: "Recent vehicle purchase detected, optimal timing based on usage patterns",
  },
  {
    id: "D003",
    timestamp: new Date("2026-02-17T08:45:00"),
    customerId: "C003",
    customerName: "Ananya Patel",
    product: "Renters Insurance - Basic",
    channel: "SMS",
    timing: "Tuesday 9:00 AM",
    confidence: 0.76,
    factors: [
      { factor: "Age & Segment", weight: 0.30, value: "First-Time Renter" },
      { factor: "SMS Response Rate", weight: 0.30, value: "High (82%)" },
      { factor: "Budget Sensitivity", weight: 0.25, value: "High" },
      { factor: "Lease Start Date", weight: 0.15, value: "This Month" },
    ],
    outcome: "sent",
    reason: "First-time buyer with high SMS engagement, budget-conscious product match",
  },
  {
    id: "D004",
    timestamp: new Date("2026-02-17T08:30:00"),
    customerId: "C004",
    customerName: "Vikram Singh",
    product: "Retirement Annuity",
    channel: "Email",
    timing: "Wednesday 2:00 PM",
    confidence: 0.94,
    factors: [
      { factor: "Age & Life Stage", weight: 0.35, value: "Pre-Retirement (52)" },
      { factor: "Investment Activity", weight: 0.30, value: "High Interest" },
      { factor: "Email Open Rate", weight: 0.20, value: "Excellent (95%)" },
      { factor: "Financial Literacy", weight: 0.15, value: "High" },
    ],
    outcome: "scheduled",
    reason: "High-value prospect, scheduled for optimal engagement time based on historical data",
  },
  {
    id: "D005",
    timestamp: new Date("2026-02-17T08:00:00"),
    customerId: "C005",
    customerName: "Lakshmi Iyer",
    product: "Home Insurance - Upgrade",
    channel: "Mobile App",
    timing: "Friday 7:00 PM",
    confidence: 0.68,
    factors: [
      { factor: "Policy Renewal", weight: 0.40, value: "60 days" },
      { factor: "Home Value Change", weight: 0.25, value: "+15%" },
      { factor: "Engagement Score", weight: 0.20, value: "Good (84%)" },
      { factor: "Competitor Activity", weight: 0.15, value: "Low" },
    ],
    outcome: "scheduled",
    reason: "Approaching renewal with property value increase, scheduled for weekend leisure time",
  },
];

export const realtimeEvents: RealtimeEvent[] = [
  {
    id: "E001",
    timestamp: new Date("2026-02-17T09:24:15"),
    type: "engagement",
    description: "Email opened by Priya Sharma",
    status: "success",
    details: "Life Insurance - Family Protection campaign",
  },
  {
    id: "E002",
    timestamp: new Date("2026-02-17T09:23:42"),
    type: "delivery",
    description: "Message delivered via Email",
    status: "success",
    details: "Customer: Priya Sharma (C001)",
  },
  {
    id: "E003",
    timestamp: new Date("2026-02-17T09:23:30"),
    type: "decision",
    description: "AI selected Life Insurance product",
    status: "success",
    details: "Confidence: 89% | Channel: Email",
  },
  {
    id: "E004",
    timestamp: new Date("2026-02-17T09:23:10"),
    type: "analysis",
    description: "Customer profile analysis completed",
    status: "success",
    details: "Priya Sharma - New Parent segment identified",
  },
  {
    id: "E005",
    timestamp: new Date("2026-02-17T09:22:55"),
    type: "analysis",
    description: "Data enrichment in progress",
    status: "pending",
    details: "Updating customer preferences from recent interactions",
  },
];

export const dashboardMetrics = {
  totalMessages: 1247,
  messagesChange: 12.5,
  avgConfidence: 87.3,
  confidenceChange: 5.2,
  engagementRate: 34.5,
  engagementChange: 8.3,
  conversionRate: 12.8,
  conversionChange: 3.1,
};

export const channelPerformance = [
  {
    channel: "Email",
    sent: 542,
    opened: 412,
    clicked: 187,
    converted: 89,
    avgConfidence: 85.2,
    revenue: 10533600,
  },
  {
    channel: "Mobile App",
    sent: 387,
    opened: 365,
    clicked: 245,
    converted: 124,
    avgConfidence: 91.5,
    revenue: 15750000,
  },
  {
    channel: "SMS",
    sent: 218,
    opened: 198,
    clicked: 156,
    converted: 67,
    avgConfidence: 78.9,
    revenue: 6627600,
  },
  {
    channel: "Push Notification",
    sent: 100,
    opened: 67,
    clicked: 34,
    converted: 15,
    avgConfidence: 72.4,
    revenue: 1965600,
  },
];

export const weeklyPerformance = [
  { day: "Mon", messages: 178, engagement: 32, conversion: 11 },
  { day: "Tue", messages: 195, engagement: 38, conversion: 14 },
  { day: "Wed", messages: 189, engagement: 35, conversion: 13 },
  { day: "Thu", messages: 203, engagement: 41, conversion: 16 },
  { day: "Fri", messages: 187, engagement: 36, conversion: 12 },
  { day: "Sat", messages: 145, engagement: 28, conversion: 9 },
  { day: "Sun", messages: 150, engagement: 30, conversion: 10 },
];

export const productPerformance = [
  { name: "Auto Insurance", value: 32, color: "#3b82f6" },
  { name: "Home Insurance", value: 28, color: "#8b5cf6" },
  { name: "Life Insurance", value: 24, color: "#ec4899" },
  { name: "Health Insurance", value: 16, color: "#f59e0b" },
];

export const responsibleAIMetrics = {
  transparencyScore: 94,
  fairnessScore: 91,
  privacyCompliance: 98,
  explainabilityScore: 89,
  biasDetectionScore: 87,
  dataQualityScore: 93,
};

export const biasMonitoring = [
  {
    category: "Age",
    score: 92,
    status: "Pass",
    trend: "stable",
    details: "Equal distribution across age groups",
  },
  {
    category: "Gender",
    score: 89,
    status: "Pass",
    trend: "improving",
    details: "Balanced engagement rates",
  },
  {
    category: "Location",
    score: 94,
    status: "Pass",
    trend: "stable",
    details: "No geographic bias detected",
  },
  {
    category: "Income",
    score: 85,
    status: "Monitor",
    trend: "stable",
    details: "Slight variation in high-income segment",
  },
];