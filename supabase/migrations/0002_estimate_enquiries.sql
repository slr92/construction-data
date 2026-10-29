-- Allow enquiries from the /estimate flow. Answers and any computed estimate
-- are stored in details.answers and details.estimate.
alter table public.leads drop constraint if exists leads_kind_check;
alter table public.leads
  add constraint leads_kind_check
  check (kind in ('buyer_request', 'partner_application', 'estimate_enquiry'));
