import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "House Cleaning Services in Lake Worth Beach, FL",
  description:
    "Affordable, reliable house cleaning in Lake Worth Beach, FL. Serving College Park, Paradise Palms, Winston Trails, and all Lake Worth neighborhoods. Standard, deep, and move-out cleaning.",
  alternates: {
    canonical: "https://www.thegoldingagency.com/service-areas/lake-worth",
  },
};

const neighborhoods = [
  "College Park",
  "Paradise Palms",
  "Winston Trails",
  "Lake Worth Corridor",
  "South Palm Park",
  "Tropical Ridge",
  "Lakewood",
  "Lucerne Lakes",
];

const services = [
  {
    name: "Standard Cleaning",
    slug: "standard-cleaning",
    description:
      "Dependable recurring cleaning that covers kitchens, bathrooms, floors, and living areas — keeping your home fresh on a schedule that fits your budget.",
  },
  {
    name: "Deep Cleaning",
    slug: "deep-cleaning",
    description:
      "A detailed session that goes beyond the surface — scrubbing grout, cleaning inside cabinets, degreasing range hoods, and addressing every overlooked area.",
  },
  {
    name: "Move-In / Move-Out Cleaning",
    slug: "airbnb-cleaning",
    description:
      "Full-property cleaning for tenants, landlords, and homeowners in transition. Ideal for rental turnovers and getting security deposits back.",
  },
  {
    name: "Custom Focus Cleaning",
    slug: "custom-cleaning",
    description:
      "Choose where we spend our time. Great for short-term rental turnovers, post-party cleanups, or concentrating on the areas that matter most to you.",
  },
  {
    name: "Office Cleaning",
    slug: "office-cleaning",
    description:
      "Affordable office cleaning for Lake Worth Beach businesses along Lake Avenue and the Dixie Highway commercial corridor. We keep small offices and storefronts looking their best without stretching your budget.",
  },
];

export default function LakeWorthPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Service Areas", href: "/service-areas" }, { name: "Lake Worth Beach, FL", href: "/service-areas/lake-worth" }]} />
      {/* Hero */}
      <section className="bg-navy pb-16 pt-32 sm:pt-36">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-4 font-serif text-4xl font-bold text-white sm:text-5xl">
            House Cleaning Services in Lake Worth Beach, FL
          </h1>
          <p className="text-lg text-white/80">
            Affordable, flexible residential cleaning for Lake Worth Beach&apos;s
            diverse and vibrant community.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 text-gray-600 leading-relaxed">
          <p className="mb-6">
            Lake Worth Beach has a character all its own. Walk down Lake Avenue on any
            given evening and you will find live music spilling out of local venues, art
            galleries lit up for a show, and neighbors catching up over dinner at one of
            downtown&apos;s independent restaurants. The Cultural Council anchors a
            creative community that takes real pride in its surroundings, and that pride
            extends into the homes here — from the charming 1920s bungalows in College
            Park to the newer developments in Winston Trails and Lucerne Lakes. At
            Golding Signature Cleaning, we serve Lake Worth Beach homeowners who care
            about their space but need flexible, affordable cleaning that respects their
            budget.
          </p>
          <p className="mb-6">
            The housing stock in Lake Worth Beach is wonderfully varied. Historic
            cottages near downtown and South Palm Park feature original tile floors,
            jalousie windows, and compact kitchens that require a careful, attentive
            hand. Families in Paradise Palms and Tropical Ridge live in mid-century and
            newer single-family homes with larger footprints and more standard layouts.
            Out in the Lake Worth Corridor and Lakewood, you will find a mix of
            townhomes, duplexes, and single-family residences. We adapt our approach to
            every property type. Our Custom Focus Cleaning option is particularly
            popular here — it lets you direct where we spend our time, so you are paying
            for exactly what matters most to you rather than a rigid package that
            doesn&apos;t fit.
          </p>
          <p className="mb-6">
            Lake Worth Beach also has a growing short-term rental market, especially for
            properties within walking distance of the Lake Worth Beach pier and Bryant
            Park. We work with several property owners and Airbnb hosts in the area,
            providing turnover cleaning between guests that keeps reviews high and
            bookings steady. For residents who simply want a reliable recurring service,
            we offer weekly and biweekly schedules at rates that make sense for Lake
            Worth Beach. Whether you are near the pier watching the sunrise, exploring
            Snook Islands Natural Area on a kayak, or working from your home office, we
            handle the cleaning so you can focus on living in one of Palm Beach
            County&apos;s most authentic communities.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center font-serif text-3xl font-bold text-navy">
            Our Services
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.name}
                href={`/service-areas/lake-worth/${service.slug}`}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <h3 className="mb-2 text-lg font-bold text-navy">{service.name}</h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {service.description}
                </p>
                <span className="mt-3 inline-block text-sm font-semibold text-gold">
                  Learn more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-3 font-serif text-3xl font-bold text-navy">
            Popular Neighborhoods We Clean in Lake Worth Beach
          </h2>
          <p className="mb-8 text-sm text-gray-500">
            We serve all neighborhoods throughout Lake Worth Beach — here are just a few.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {neighborhoods.map((n) => (
              <span
                key={n}
                className="rounded-full bg-navy/10 px-5 py-2 text-sm font-medium text-navy"
              >
                {n}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="pb-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="overflow-hidden rounded-2xl shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56927.37783498758!2d-80.05616!3d26.61682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8d693119cfaab%3A0xf12e89a6ee6d9e04!2sLake%20Worth%20Beach%2C%20FL!5e0!3m2!1sen!2sus!4v1709900000000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map of Lake Worth Beach, FL service area"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 font-serif text-2xl font-bold text-white">
            Get a Clean Home Without Breaking the Budget
          </h2>
          <p className="mb-8 text-white/80">
            Reach out for a free estimate tailored to your Lake Worth Beach home. Flexible
            scheduling, honest pricing, no contracts.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="rounded-full bg-gold px-8 py-3.5 text-base font-semibold text-navy transition-colors hover:bg-gold-light"
            >
              Get a Free Estimate
            </Link>
            <a
              href="tel:15612466544"
              className="rounded-full border-2 border-white px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white hover:text-navy"
            >
              Call +1 (561) 246-6544
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
