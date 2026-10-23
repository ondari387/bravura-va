import { industriesPart1 } from "./part1";
import { industriesPart2 } from "./part2";
export type { IndustryContent } from "./types";
export const industryContent = [...industriesPart1, ...industriesPart2];
export const getIndustryContent = (slug: string) => industryContent.find((i) => i.slug === slug);
