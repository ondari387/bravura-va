/**
 * VERIFIED TESTIMONIALS ONLY.
 * Bravura VA is a new company. Add entries here only with the client's written permission.
 * While this list is empty, the site shows a process-focused trust section instead of reviews.
 * Do not add invented names, quotes or ratings. Review/rating schema is never generated from this list.
 *
 * Example entry (remove the comment markers when you have a real, approved testimonial):
 * {
 *   name: "Client Name",
 *   position: "Founder",
 *   company: "Company Ltd",
 *   country: "United States",
 *   quote: "Their words, exactly as approved.",
 *   photo: "/images/testimonials/client-name.jpg", // optional, with permission
 *   videoUrl: "",                                  // optional
 *   rating: 5,                                     // optional, only if the client gave this rating
 *   verified: true,
 *   service: "customer-support",                   // optional service slug
 * },
 */
export type Testimonial = {
  name: string; position: string; company: string; country: string; quote: string;
  photo?: string; videoUrl?: string; rating?: 1 | 2 | 3 | 4 | 5; verified: boolean; service?: string;
};

export const testimonials: Testimonial[] = [];

export const publishedTestimonials = testimonials.filter((t) => t.verified);
