import type { ServiceMeta } from "../types";
import { standardCleaning } from "./standard-cleaning";
import { deepCleaning } from "./deep-cleaning";
import { airbnbCleaning } from "./airbnb-cleaning";
import { officeCleaning } from "./office-cleaning";
import { customCleaning } from "./custom-cleaning";

export const allServices: Record<string, ServiceMeta> = {
  "standard-cleaning": standardCleaning,
  "deep-cleaning": deepCleaning,
  "airbnb-cleaning": airbnbCleaning,
  "office-cleaning": officeCleaning,
  "custom-cleaning": customCleaning,
};

export const serviceSlugs = Object.keys(allServices);
export const serviceList = Object.values(allServices);
