import { countries } from "./countries";
import { statePages, allStates } from "./states";
import { cityPages } from "./cities";
export type { LocationPage } from "./types";
export { countries, statePages, allStates, cityPages };

export const subPages = [...statePages, ...cityPages];
export const getCountry = (slug: string) => countries.find((c) => c.slug === slug);
export const getSubPage = (country: string, slug: string) => subPages.find((p) => p.parent === country && p.slug === slug);
export const childrenOf = (country: string) => subPages.filter((p) => p.parent === country);
