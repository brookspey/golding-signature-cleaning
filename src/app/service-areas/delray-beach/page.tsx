import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "House Cleaning Services in Delray Beach, FL",
  description:
    "Trusted house cleaning services in Delray Beach, FL. Serving Pineapple Grove, Lake Ida, Tropic Isle, and all Delray Beach neighborhoods. Weekly, biweekly, and one-time cleaning available.",
  alternates: {
    canonical: "https://www.thegoldingagency.com/service-areas/delray-beach",
  },
};

const neighborhoods = [
  "Pineapple Grove",
  "Lake Ida",
  "Tropic Isle",
  "Tropic Palms",
  "Delray Beach Shores",
  "Rainberry Bay",
  "Hammock Reserve",
  "Seagate",
];

const services = [
  {
    name: "Standard Cleaning",
    slug: "standard-cleaning",
    description:
      "Regular maintenance cleaning that keeps your Delray Beach home fresh between deeper sessions. Perfect for busy homeowners who would rather be walking Atlantic Avenue than scrubbing floors.",
  },
  {
    name: "Deep Cleaning",
    slug: "deep-cleaning",
    description:
      "An intensive clean covering baseboards, ceiling fans, inside appliances, and every overlooked surface. Ideal for seasonal residents returning to Delray or preparing a home for the season.",
  },
  {
    name: "Airbnb / Move-Out Cleaning",
    slug: "airbnb-cleaning",
    description:
      "Quick-turnaround cleaning for vacation rentals and properties in transition. We handle guest-ready preparation so your listing maintains five-star reviews.",
  },
  {
    name: "Custom Focus Cleaning",
    slug: "custom-cleaning",
    description:
      "Choose the rooms or tasks that need the most attention. From post-renovation dust removal to pre-event preparation, we build the clean around your specific situation.",
  },
  {
    name: "Office Cleaning",
    slug: "office-cleaning",
    description:
      "Reliable office cleaning for Delray Beach businesses along Atlantic Avenue and the Congress Avenue corridor. We keep your workspace polished and professional so you can focus on your clients.",
  },
];

export default function DelrayBeachPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Service Areas", href: "/service-areas" }, { name: "Delray Beach, FL", href: "/service-areas/delray-beach" }]} />
      {/* Hero */}
      <section className="bg-navy pb-16 pt-32 sm:pt-36">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-4 font-serif text-4xl font-bold text-white sm:text-5xl">
            House Cleaning Services in Delray Beach, FL
          </h1>
          <p className="text-lg text-white/80">
            Reliable residential cleaning for Delray Beach homeowners, seasonal
            residents, and vacation rental hosts.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              Delray Beach has earned its reputation as one of South Florida&apos;s
              most vibrant small cities, and the people who live here want to spend
              their time enjoying it &mdash; not cleaning. Whether you&apos;re
              heading to Atlantic Avenue for dinner, browsing galleries in the
              downtown arts district, or spending a Saturday afternoon at the beach,
              the last thing on your mind should be whether the kitchen counters got
              wiped down. That&apos;s where we come in. Golding Signature Cleaning
              provides consistent, thorough house cleaning so Delray Beach residents
              can make the most of their time in this remarkable community.
            </p>
            <p>
              Delray&apos;s housing stock tells a story of a city that has evolved
              significantly over the past two decades. In neighborhoods like
              Pineapple Grove and Lake Ida, renovated mid-century homes sit alongside
              new construction, creating a mix of finishes and materials that require
              different cleaning techniques. The waterfront homes in Tropic Isle and
              Seagate face additional challenges from salt exposure and moisture that
              can accelerate wear on surfaces if not properly maintained. Near the
              Morikami Museum area and further west in communities like Hammock
              Reserve and Rainberry Bay, larger single-family homes with pool decks
              and screened lanais need regular attention to stay comfortable and
              inviting.
            </p>
            <p>
              We also work closely with vacation rental owners throughout Delray
              Beach. The city&apos;s popularity as a destination &mdash; particularly
              for visitors drawn to the Delray Marketplace, the beach, and the
              walkable downtown &mdash; has created a thriving short-term rental
              market. Turnover cleaning for these properties demands speed and
              precision: guests expect a spotless space, and hosts need it done
              between checkout and the next arrival. Our Airbnb and move-out cleaning
              service is built for exactly this scenario, with checklists refined
              through hundreds of turnovers. For year-round residents in Tropic Palms
              and Delray Beach Shores, we offer flexible weekly and biweekly
              schedules that adapt to your life, not the other way around.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center font-serif text-3xl font-bold text-navy">
            Our Services in Delray Beach
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.name}
                href={`/service-areas/delray-beach/${service.slug}`}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <h3 className="mb-2 text-lg font-bold text-navy">
                  {service.name}
                </h3>
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
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-3 font-serif text-3xl font-bold text-navy">
            Popular Neighborhoods We Clean In
          </h2>
          <p className="mb-10 text-sm text-gray-500">
            We serve all neighborhoods throughout Delray Beach — here are just a few.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {neighborhoods.map((n) => (
              <span
                key={n}
                className="rounded-full border border-navy/20 bg-navy/5 px-4 py-2 text-sm font-medium text-navy"
              >
                {n}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56927.37783498758!2d-80.07282!3d26.46146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8e33ef3b3a127%3A0xdbaborce6fa5e422!2sDelray%20Beach%2C%20FL!5e0!3m2!1sen!2sus!4v1709900000000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map of Delray Beach, FL service area"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 font-serif text-2xl font-bold text-white">
            Book Your Delray Beach Cleaning Today
          </h2>
          <p className="mb-6 text-white/80">
            Spend more time on Atlantic Avenue and less time on chores. Reach out
            for a free estimate &mdash; no commitment required.
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
