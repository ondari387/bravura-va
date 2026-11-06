import type { Metadata } from "next";
import { ComposeRelay } from "./ComposeRelay";

// Private helper for the Prospector tool: turns a draft into an email in your mail app.
// The draft travels in the URL hash, which browsers never send to the server.
export const metadata: Metadata = {
  title: { absolute: "Compose email | Bravura VA" },
  robots: { index: false, follow: false },
};

export default function ComposePage() {
  return <ComposeRelay />;
}
