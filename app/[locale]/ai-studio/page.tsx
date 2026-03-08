'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function AiStudioPage() {
  const [prompt, setPrompt] = useState('');
  const [output, setOutput] = useState('');

  const onGenerate = async () => {
    const res = await fetch('/api/ai/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });
    const data = (await res.json()) as { text: string };
    setOutput(data.text);
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">AI Studio</h1>
      <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} className="w-full rounded-md border p-3" rows={5} />
      <Button onClick={onGenerate}>Generate</Button>
      <pre className="rounded-md bg-slate-900 p-4 text-slate-100">{output}</pre>
    </div>
  );
}
