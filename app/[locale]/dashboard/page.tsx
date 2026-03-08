import { UsageChart } from '@/components/charts/usage-chart';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {['Posts', 'Scheduled', 'Pages', 'AI Usage'].map((item) => (
          <div key={item} className="rounded-xl border border-slate-200 bg-white p-4">
            <div className="text-sm text-slate-500">{item}</div>
            <div className="text-2xl font-semibold">0</div>
          </div>
        ))}
      </div>
      <UsageChart />
    </div>
  );
}
