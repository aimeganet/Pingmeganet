import { UsageChart } from '@/components/charts/usage-chart';

export default function AnalyticsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Analytics</h1>
      <UsageChart />
    </div>
  );
}
