'use client';

import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  { day: 'Mon', usage: 10 },
  { day: 'Tue', usage: 24 },
  { day: 'Wed', usage: 16 },
  { day: 'Thu', usage: 30 },
  { day: 'Fri', usage: 22 }
];

export function UsageChart() {
  return (
    <div className="h-64 w-full rounded-xl border border-slate-200 bg-white p-3">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="usage" stroke="#4f46e5" fill="#c7d2fe" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
