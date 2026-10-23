export const countries = ["United States", "United Kingdom", "Australia", "Canada", "Kenya", "Other"];
export const hoursOptions = ["Under 10 hours/week", "10-20 hours/week", "20-30 hours/week", "Full-time (around 40 hours/week)", "Not sure yet"];
export const overlapOptions = ["US Eastern business hours", "US Central business hours", "US Mountain business hours", "US Pacific business hours", "UK business hours", "Australian business hours", "Flexible / asynchronous", "Not sure yet"];
export const startOptions = ["As soon as possible", "Within a month", "In 1-3 months", "Just exploring"];

export type EnquiryPayload = {
  formType: "contact" | "quote" | "service" | "general";
  name: string; email: string; phone?: string; company?: string; country?: string; service?: string;
  message: string; tasks?: string[]; hours?: string; overlap?: string; start?: string;
  consent: boolean; page?: string; website?: string; elapsedMs?: number;
};

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateEnquiry(p: Partial<EnquiryPayload>) {
  const errors: Record<string, string> = {};
  if (!p.name || p.name.trim().length < 2) errors.name = "Please enter your full name.";
  if (!p.email || !emailRe.test(p.email.trim())) errors.email = "Please enter a valid business email address.";
  if (p.phone && !/^[+()\d\s.-]{7,20}$/.test(p.phone.trim())) errors.phone = "Please enter a valid phone number, including country code.";
  if (!p.message || p.message.trim().length < 10) errors.message = "Tell us a little about what you need help with (at least 10 characters).";
  if (p.message && p.message.length > 5000) errors.message = "Please keep your message under 5,000 characters.";
  if (!p.consent) errors.consent = "Please confirm you agree to us contacting you about your enquiry.";
  return errors;
}

export const isEmail = (v: string) => emailRe.test(v.trim());
