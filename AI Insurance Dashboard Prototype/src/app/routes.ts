import { createBrowserRouter } from "react-router";
import { DashboardLayout } from "./components/DashboardLayout";
import { Overview } from "./components/pages/Overview";
import { CustomerInsights } from "./components/pages/CustomerInsights";
import { DecisionLog } from "./components/pages/DecisionLog";
import { RealTimeMonitoring } from "./components/pages/RealTimeMonitoring";
import { ChannelPerformance } from "./components/pages/ChannelPerformance";
import { ResponsibleAI } from "./components/pages/ResponsibleAI";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: DashboardLayout,
    children: [
      { index: true, Component: Overview },
      { path: "customers", Component: CustomerInsights },
      { path: "decisions", Component: DecisionLog },
      { path: "monitoring", Component: RealTimeMonitoring },
      { path: "channels", Component: ChannelPerformance },
      { path: "responsible-ai", Component: ResponsibleAI },
    ],
  },
]);
