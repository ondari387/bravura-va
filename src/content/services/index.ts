import { adminServices } from "./admin";
import { customerServices } from "./customer";
import { operationsServices } from "./operations";
import { creativeServices } from "./creative";
export type { ServiceContent } from "./types";

export const serviceContent = [...adminServices, ...customerServices, ...operationsServices, ...creativeServices];
export const getServiceContent = (slug: string) => serviceContent.find((s) => s.slug === slug);
