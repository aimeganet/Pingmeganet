'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { authSchema } from '@/lib/validators/auth';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { supabase } from '@/lib/supabase/client';

export function AuthForm({ mode }: { mode: 'login' | 'register' }) {
  const { register, handleSubmit } = useForm<z.infer<typeof authSchema>>({
    resolver: zodResolver(authSchema)
  });

  const onSubmit = async (data: z.infer<typeof authSchema>) => {
    if (mode === 'register') {
      await supabase.auth.signUp(data);
      return;
    }

    await supabase.auth.signInWithPassword(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-md space-y-4 rounded-xl bg-white p-6 shadow">
      <input {...register('email')} placeholder="Email" className="w-full rounded-md border border-slate-300 p-2" />
      <input
        {...register('password')}
        type="password"
        placeholder="Password"
        className="w-full rounded-md border border-slate-300 p-2"
      />
      <Button type="submit" className="w-full">
        {mode === 'login' ? 'Sign in' : 'Create account'}
      </Button>
    </form>
  );
}
