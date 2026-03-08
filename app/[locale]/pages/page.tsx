import { PagesTable } from '@/components/tables/pages-table';
import { createServerClient } from '@/lib/supabase/server';

export default async function PagesPage() {
  const supabase = createServerClient();
  const { data } = await supabase.from('pages').select('*').limit(50);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Pages Management</h1>
      <PagesTable rows={(data ?? []) as never[]} />
    </div>
  );
}
