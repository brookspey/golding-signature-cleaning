export interface FAQ {
  question: string;
  answer: string;
}

export interface ServiceLocationContent {
  metaTitle: string;
  metaDescription: string;
  ogDescription?: string;
  heroHeading: string;
  heroSubheading: string;
  /** 3 unique prose paragraphs: service context, local niche, why-us */
  paragraphs: [string, string, string];
  /** What's included in this service */
  checklist: string[];
  faqs: FAQ[];
}

export interface ServiceMeta {
  slug: string;
  name: string;
  /** Short label for breadcrumbs and links */
  shortName: string;
  serviceType: string;
  /** Content keyed by city slug */
  locations: Record<string, ServiceLocationContent>;
}

export interface CityMeta {
  slug: string;
  name: string;
  /** e.g. "Boca Raton" */
  state: string;
  zip: string;
  neighborhoods: string[];
  mapEmbedUrl: string;
  /** Neighboring city slugs for cross-linking */
  nearby: string[];
}
