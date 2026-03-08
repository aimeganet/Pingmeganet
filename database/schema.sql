create extension if not exists "pgcrypto";

create table if not exists public.users (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.pages (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  facebook_page_id text not null,
  page_name text not null,
  access_token_encrypted text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(user_id, facebook_page_id)
);
create index if not exists idx_pages_user_id on public.pages(user_id);

create table if not exists public.ai_models (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  provider text not null,
  model_name text not null,
  is_default boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.posts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  page_id uuid not null references public.pages(id) on delete cascade,
  content text not null check (char_length(content) > 0),
  status text not null check (status in ('draft', 'scheduled', 'published', 'failed')),
  scheduled_at timestamptz,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists idx_posts_user_id on public.posts(user_id);
create index if not exists idx_posts_status_scheduled on public.posts(status, scheduled_at);

create table if not exists public.post_images (
  id uuid primary key default gen_random_uuid(),
  post_id uuid not null references public.posts(id) on delete cascade,
  image_url text not null,
  prompt text,
  created_at timestamptz not null default now()
);

create table if not exists public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references auth.users(id) on delete cascade,
  plan_name text not null check (plan_name in ('free', 'pro', 'team')),
  status text not null check (status in ('active', 'canceled', 'past_due')),
  monthly_quota int not null default 100,
  period_start timestamptz,
  period_end timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.usage_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  action text not null,
  units int not null default 1,
  metadata jsonb,
  created_at timestamptz not null default now()
);
create index if not exists idx_usage_logs_user_id_created_at on public.usage_logs(user_id, created_at desc);

create table if not exists public.settings (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references auth.users(id) on delete cascade,
  locale text not null default 'ar' check (locale in ('ar', 'en')),
  timezone text not null default 'UTC',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.users enable row level security;
alter table public.pages enable row level security;
alter table public.ai_models enable row level security;
alter table public.posts enable row level security;
alter table public.post_images enable row level security;
alter table public.subscriptions enable row level security;
alter table public.usage_logs enable row level security;
alter table public.settings enable row level security;

create policy "users owner all" on public.users for all using (auth.uid() = id) with check (auth.uid() = id);
create policy "pages owner all" on public.pages for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "ai_models owner all" on public.ai_models for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "posts owner all" on public.posts for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "post_images owner all" on public.post_images for all using (
  exists (select 1 from public.posts p where p.id = post_id and p.user_id = auth.uid())
) with check (
  exists (select 1 from public.posts p where p.id = post_id and p.user_id = auth.uid())
);
create policy "subscriptions owner all" on public.subscriptions for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "usage_logs owner all" on public.usage_logs for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "settings owner all" on public.settings for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
