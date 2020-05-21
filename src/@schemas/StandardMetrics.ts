const validMetricIds = ["active_hours", "search_count", "uri_count"] as const;
type MetricId = typeof validMetricIds[number];

interface MetricDefinition {
  value: MetricId;
  period: "weekly" | "daily" | "overall";
  label: string;
  description: string;
  baseline: number | string;
}

export const StandardMetrics: MetricDefinition[] = [
  {
    value: "active_hours",
    period: "weekly",
    label: "Active hours per week",
    baseline: "6.29",
    description: "This is a measurement of any active browsing activity.",
  },
  {
    value: "search_count",
    period: "weekly",
    label: "Search count per week",
    baseline: "14.6",
    description: "This includes searches from any search entry point.",
  },
  {
    value: "uri_count",
    period: "weekly",
    label: "URI count per week",
    baseline: 859,
    description:
      "This is a count of unique URIs (not including multiple visits).",
  },
];

export function getMetricById(id: MetricId) {
  return StandardMetrics.find((m) => m.value === id);
}
