import { Page } from '@/types/database';
import { Button } from '@/components/ui/button';

export function PagesTable({ rows }: { rows: Page[] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
      <table className="w-full text-sm">
        <thead className="bg-slate-50 text-left">
          <tr>
            <th className="p-3">Name</th>
            <th className="p-3">Facebook ID</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id} className="border-t border-slate-100">
              <td className="p-3">{row.page_name}</td>
              <td className="p-3">{row.facebook_page_id}</td>
              <td className="p-3">
                <div className="flex gap-2">
                  <Button variant="outline">Edit</Button>
                  <Button variant="danger">Delete</Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
