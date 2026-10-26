import { marketPages } from "./markets";
import { originPages } from "./countries";
export type { LocationPage } from "./types";
export { marketPages, originPages };

export const locationPages = [...marketPages, ...originPages];
export const getLocation = (slug: string) => locationPages.find((p) => p.slug === slug)!;
