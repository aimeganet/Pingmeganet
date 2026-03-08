'use client';

import { Bell } from 'lucide-react';
import { Button } from '../ui/button';

export function Topbar() {
  return (
    <header className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-3">
      <div className="text-sm text-slate-500">AI Facebook Publishing SaaS</div>
      <div className="flex items-center gap-3">
        <Button variant="outline" className="inline-flex items-center gap-2">
          <Bell size={16} />
          Notifications
        </Button>
      </div>
    </header>
  );
}
