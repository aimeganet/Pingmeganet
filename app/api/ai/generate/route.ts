import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { generateAiText } from '@/lib/ai/generate';

const schema = z.object({
  prompt: z.string().min(3)
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const text = await generateAiText(parsed.data.prompt);
  return NextResponse.json({ text });
}
