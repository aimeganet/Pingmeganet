import { NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabase/server';

export async function POST() {
  const supabase = createServerClient();
  const now = new Date().toISOString();

  const { data: duePosts, error } = await supabase
    .from('posts')
    .select('*')
    .eq('status', 'scheduled')
    .lte('scheduled_at', now)
    .limit(20);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  for (const post of duePosts ?? []) {
    await supabase
      .from('posts')
      .update({ status: 'published', published_at: new Date().toISOString() })
      .eq('id', post.id);
  }

  return NextResponse.json({ processed: duePosts?.length ?? 0 });
}
