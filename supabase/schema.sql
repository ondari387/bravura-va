-- Bravura VA: run this once in Supabase (SQL Editor > New query > paste > Run)

create table if not exists public.enquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  form_type text not null default 'general',
  name text not null,
  email text not null,
  phone text,
  company text,
  country text,
  service text,
  message text not null,
  tasks text[] not null default '{}',
  hours text,
  overlap text,
  start_timeframe text,
  page text,
  consent boolean not null default false,
  ip_country text,
  budget text,
  contact_method text,
  utm jsonb,
  status text not null default 'new'
);

create index if not exists enquiries_created_at_idx on public.enquiries (created_at desc);

create table if not exists public.newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  email text not null unique,
  source text,
  unsubscribed boolean not null default false
);

-- Lock both tables down. The website writes with the secret service role key on the server,
-- which bypasses these rules. Nobody can read or write with the public (anon) key.
alter table public.enquiries enable row level security;
alter table public.newsletter_subscribers enable row level security;
