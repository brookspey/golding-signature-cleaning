import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "House Cleaning Services in Lantana, FL",
  description:
    "Professional house cleaning services in Lantana, FL. Serving Hypoluxo Island, Ridge at Lantana, and all Lantana neighborhoods. Standard cleaning, deep cleaning, and Airbnb turnovers.",
  alternates: {
    canonical: "https://www.thegoldingagency.com/service-areas/lantana",
  },
};

const neighborhoods = [
  "Hypoluxo Island",
  "Ridge at Lantana",
  "Carlisle at Lantana",
  "Lake Osborne",
  "Pine Ridge",
  "South Lantana",
  "Water's Edge",
  "Moorings at Lantana",
];

const services = [
  {
    name: "Standard Cleaning",
    slug: "standard-cleaning",
    description:
      "Regular upkeep cleaning built for Lantana's coastal lifestyle. We tackle salt residue on windows, sand in entryways, and humidity-driven buildup on bathroom surfaces so your home stays fresh between the beach and the Intracoastal.",
  },
  {
    name: "Deep Cleaning",
    slug: "deep-cleaning",
    description:
      "A meticulous top-to-bottom clean for waterfront condos and single-family homes alike. We address mildew in bathrooms, grout discoloration, interior window tracks, and all the spots that routine cleaning misses in Lantana's humid climate.",
  },
  {
    name: "Airbnb / Short-Term Rental Cleaning",
    slug: "airbnb-cleaning",
    description:
      "Fast, reliable turnovers for Lantana's growing vacation rental market. We restock essentials, launder linens on request, and ensure every surface meets guest-ready standards — even on tight same-day schedules between bookings.",
  },
  {
    name: "Custom Focus Cleaning",
    slug: "custom-cleaning",
    description:
      "Choose what gets cleaned and set your own budget. Perfect for Lantana homeowners who want extra attention on specific areas — a boat-tracked mudroom, a kitchen after hosting, or a guest room before snowbird season begins.",
  },
  {
    name: "Office Cleaning",
    slug: "office-cleaning",
    description:
      "Professional cleaning for small offices and commercial spaces in Lantana's business district along Lantana Road and Hypoluxo Road. We keep your workspace clean and inviting for both employees and clients.",
  },
];

export default function LantanaPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Service Areas", href: "/service-areas" }, { name: "Lantana, FL", href: "/service-areas/lantana" }]} />
      {/* Hero */}
      <section className="bg-navy pb-16 pt-32 sm:pt-36">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-4 font-serif text-4xl font-bold text-white sm:text-5xl">
            House Cleaning Services in Lantana, FL
          </h1>
          <p className="text-lg text-white/80">
            Trusted, personal cleaning services for Lantana&apos;s coastal
            homes, waterfront properties, and vacation rentals.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              Lantana is one of those South Florida towns that locals love and
              visitors stumble upon by happy accident. Tucked between Lake Worth
              Beach and Boynton Beach along the coast, this small community has a
              character all its own &mdash; from the iconic Old Key Lime House on
              the Intracoastal to the quiet stretches of Lantana Beach where
              parking is still free and the crowds are thin. Living here means
              salt air is a constant companion, and that salt does a number on
              your home. Window sills develop a chalky film, bathroom fixtures
              corrode faster, and fine sand migrates from the beach into every
              crevice of your flooring. Golding Signature Cleaning understands
              these coastal realities because we clean Lantana homes every week,
              and we&apos;ve developed routines specifically for the challenges
              that come with living this close to the water.
            </p>
            <p>
              Lantana&apos;s housing stock is as varied as its residents.
              Hypoluxo Island features waterfront estates with expansive lanais
              and boat docks, while the Ridge at Lantana and Carlisle at Lantana
              offer newer townhome-style living with modern finishes. Over near
              Lake Osborne, you&apos;ll find established single-family homes
              surrounded by mature landscaping, and in Pine Ridge and South
              Lantana, modest bungalows and duplexes line quiet residential
              streets. We adapt our cleaning approach to each property type
              &mdash; the marble countertops in a Water&apos;s Edge condo get
              treated differently than the laminate surfaces in a Pine Ridge
              rental. Our cleaners know which products protect natural stone,
              which tackle hard water stains on glass shower doors, and how to
              get tile grout looking new again in Lantana&apos;s
              humidity-prone bathrooms.
            </p>
            <p>
              Word of mouth drives our business in Lantana more than anywhere
              else we serve. In a town this small &mdash; where you run into your
              neighbors at Bicentennial Park and know the bartender at the local
              spots along Ocean Avenue &mdash; reputation is everything. Many of
              our Lantana clients came to us through referrals from friends in
              the Moorings at Lantana or coworkers who live near the Lantana
              Nature Preserve. We take that trust seriously. Every home gets
              the same level of care, whether it&apos;s a weekly standard
              clean or a one-time deep clean before listing a property. And for
              the growing number of short-term rental owners near Lantana Beach
              and Eau Palm Beach, we offer same-day turnovers that keep your
              reviews at five stars and your calendar fully booked.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center font-serif text-3xl font-bold text-navy">
            Our Services in Lantana
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.name}
                href={`/service-areas/lantana/${service.slug}`}
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
            We serve all neighborhoods throughout Lantana — here are just a few.
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56927.37783498758!2d-80.05149!3d26.58679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8d4ea0ce89255%3A0x2feba53bb451c99d!2sLantana%2C%20FL!5e0!3m2!1sen!2sus!4v1709900000000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map of Lantana, FL service area"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 font-serif text-2xl font-bold text-white">
            Book Your Lantana Home Cleaning Today
          </h2>
          <p className="mb-6 text-white/80">
            Whether you need weekly service for your family home or same-day
            turnovers for your beach rental, we&apos;re ready to help.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="rounded-full bg-gold px-8 py-3.5 text-base font-semibold text-navy transition-colors hover:bg-gold-light"
            >
              Get a Free Estimate
            </Link>
            <a
              href="tel:16467646839"
              className="rounded-full border-2 border-white px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white hover:text-navy"
            >
              Call +1 (646) 764-6839
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
