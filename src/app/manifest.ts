import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Bravura VA",
    short_name: "Bravura VA",
    description: "Human-led virtual assistant support from Nairobi, Kenya.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#0D292D",
    icons: [{ src: "/images/brand/icon-512.png", sizes: "512x512", type: "image/png" }],
  };
}
