import { NextRequest, NextResponse } from 'next/server';
import { fetchFacebookPages } from '@/lib/facebook/client';

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get('token');
  if (!token) return NextResponse.json({ error: 'token is required' }, { status: 400 });

  const data = await fetchFacebookPages(token);
  return NextResponse.json(data);
}
