import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-aqua-pale py-24 sm:py-32">
      <div aria-hidden="true" className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-orange" />
      <div className="container-x relative max-w-2xl text-center">
        <p className="eyebrow">Error 404</p>
        <h1 className="h-display mt-4">This page took the day off.</h1>
        <p className="lead mx-auto mt-5 max-w-lg">The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you back on track.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/" arrow>Back to Home</ButtonLink>
          <ButtonLink href="/services/" variant="secondary">Explore Services</ButtonLink>
        </div>
        <p className="mt-8 text-sm text-ink-muted">Need help? <Link href="/contact/" className="font-semibold text-teal underline">Contact us</Link>.</p>
      </div>
    </section>
  );
}
