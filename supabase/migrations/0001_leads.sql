-- Form submissions from the marketing site (buyer requests, partner applications).
-- Written by the /api/lead route with the service role key. RLS is on with no
-- policies, so the public anon key can neither read nor write this table.
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  kind text not null check (kind in ('buyer_request', 'partner_application')),
  name text not null,
  email text not null,
  phone text,
  details jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

alter table public.leads enable row level security;

create index if not exists leads_kind_created_at_idx on public.leads (kind, created_at desc);
