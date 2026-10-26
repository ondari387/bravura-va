-- Run once in Supabase (SQL Editor > New query > paste > Run).
-- Adds the optional fields collected by the updated enquiry form.
alter table public.enquiries add column if not exists budget text;
alter table public.enquiries add column if not exists contact_method text;
alter table public.enquiries add column if not exists utm jsonb;
