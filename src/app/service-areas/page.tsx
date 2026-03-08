import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Service Areas | House Cleaning Across Palm Beach County, FL",
  description:
    "Golding Signature Cleaning serves all of Palm Beach County, FL including West Palm Beach, Boca Raton, Delray Beach, Jupiter, Wellington, Boynton Beach, Palm Beach Gardens, and more.",
  alternates: { canonical: "https://www.thegoldingagency.com/service-areas" },
};

const areas = [
  {
    city: "West Palm Beach",
    slug: "west-palm-beach",
    zip: "33401, 33405, 33407",
    description:
      "Our home base. We provide residential cleaning, deep cleaning, and move-out cleaning services throughout West Palm Beach and its surrounding neighborhoods.",
  },
  {
    city: "Boca Raton",
    slug: "boca-raton",
    zip: "33427, 33428, 33431, 33432, 33433, 33434",
    description:
      "From beachside condos to family homes, we deliver premium house cleaning services to Boca Raton residents on a weekly, bi-weekly, or one-time basis.",
  },
  {
    city: "Delray Beach",
    slug: "delray-beach",
    zip: "33444, 33445, 33446, 33483, 33484",
    description:
      "Serving Delray Beach homeowners with reliable, detail-oriented cleaning. Standard cleans, deep cleans, and Airbnb turnover services available.",
  },
  {
    city: "Boynton Beach",
    slug: "boynton-beach",
    zip: "33424, 33425, 33426, 33435, 33436, 33437",
    description:
      "Professional house cleaning for Boynton Beach homes and rentals. Our team handles everything from routine maintenance to thorough deep cleans.",
  },
  {
    city: "Jupiter",
    slug: "jupiter",
    zip: "33458, 33468, 33469, 33477, 33478",
    description:
      "Trusted cleaning services for Jupiter residents. Whether you need regular upkeep or a one-time deep clean, we have you covered.",
  },
  {
    city: "Wellington",
    slug: "wellington",
    zip: "33411, 33414, 33449",
    description:
      "Wellington families rely on Golding Signature Cleaning for consistent, high-quality house cleaning services tailored to their homes.",
  },
  {
    city: "Palm Beach Gardens",
    slug: "palm-beach-gardens",
    zip: "33403, 33408, 33410, 33418",
    description:
      "Serving the Palm Beach Gardens community with professional residential cleaning, including standard, deep, and move-in/move-out packages.",
  },
  {
    city: "Lake Worth Beach",
    slug: "lake-worth",
    zip: "33449, 33460, 33461, 33462, 33463",
    description:
      "Affordable, reliable cleaning services for Lake Worth Beach homeowners. We work around your schedule to keep your home fresh and comfortable.",
  },
  {
    city: "Royal Palm Beach",
    slug: "royal-palm-beach",
    zip: "33411, 33414",
    description:
      "Royal Palm Beach residents trust us for thorough, detail-oriented cleaning. We customize every service to fit your home and budget.",
  },
  {
    city: "Lantana",
    slug: "lantana",
    zip: "33462",
    description:
      "Professional house cleaning services for Lantana homes, apartments, and rental properties. Available seven days a week.",
  },
  {
    city: "Greenacres",
    slug: "greenacres",
    zip: "33413, 33454, 33463, 33467",
    description:
      "Dependable cleaning services for Greenacres residents. From weekly maintenance to deep cleaning, we keep your home spotless.",
  },
];

export default function ServiceAreasPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pb-16 pt-32 sm:pt-36">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-4 font-serif text-4xl font-bold text-white sm:text-5xl">
            Serving All of Palm Beach County, FL
          </h1>
          <p className="text-lg text-white/80">
            Professional house cleaning services from Jupiter to Boca Raton and
            everywhere in between. Available 7 days a week.
          </p>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {areas.map((area) => (
              <Link
                key={area.city}
                href={`/service-areas/${area.slug}`}
                className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-gold/30"
              >
                <h2 className="mb-1 text-lg font-bold text-navy group-hover:text-gold transition-colors">
                  {area.city}, FL
                </h2>
                <p className="mb-3 text-xs text-gray-400">ZIP: {area.zip}</p>
                <p className="mb-4 text-sm leading-relaxed text-gray-600">{area.description}</p>
                <span className="text-sm font-semibold text-gold">
                  Learn more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Full Coverage Note */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 font-serif text-2xl font-bold text-navy">
            Don&apos;t See Your Area Listed?
          </h2>
          <p className="mb-6 text-gray-600">
            We serve all communities throughout Palm Beach County, Florida. If
            your city or neighborhood isn&apos;t listed above, contact us and
            we&apos;ll confirm availability in your area.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="rounded-full bg-navy px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-navy-light"
            >
              Get a Free Estimate
            </Link>
            <a
              href="tel:16467646839"
              className="rounded-full border-2 border-navy px-8 py-3.5 text-base font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
            >
              Call +1 (646) 764-6839
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
