import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "House Cleaning Services in Royal Palm Beach, FL",
  description:
    "Dependable house cleaning services in Royal Palm Beach, FL. Serving Madison Green, Crestwood, Saratoga, and all Royal Palm Beach communities. Book your cleaning today.",
  alternates: {
    canonical:
      "https://www.thegoldingagency.com/service-areas/royal-palm-beach",
  },
};

const neighborhoods = [
  "Madison Green",
  "Crestwood",
  "Saratoga",
  "Royal Palm Beach Commons",
  "La Mancha",
  "Willows",
  "Cypress Lakes",
  "Hampton Cay",
];

const services = [
  {
    name: "Standard Cleaning",
    description:
      "Recurring maintenance cleaning designed for busy Royal Palm Beach families. We handle every room so you can spend your weekends at Commons Park instead of scrubbing floors. Consistent results every visit, with the same trusted cleaner each time.",
  },
  {
    name: "Deep Cleaning",
    description:
      "A comprehensive clean that covers everything from ceiling fan blades to baseboards. Ideal for larger Royal Palm Beach homes with extra square footage in communities like Madison Green and Hampton Cay where dust and allergens accumulate quickly.",
  },
  {
    name: "Airbnb / Move-Out Cleaning",
    description:
      "Thorough turnover cleaning for rental properties and homeowners preparing to move. We leave every surface inspection-ready, from freshly scrubbed bathrooms to spotless kitchen appliances, so you can hand over the keys with confidence.",
  },
  {
    name: "Custom Focus Cleaning",
    description:
      "You set the priorities and the budget. Whether it's deep-scrubbing the playroom after a week of kid activities or detailing the master suite before company arrives, we focus our time where it matters most to your household.",
  },
];

export default function RoyalPalmBeachPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pb-16 pt-32 sm:pt-36">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-4 font-serif text-4xl font-bold text-white sm:text-5xl">
            House Cleaning Services in Royal Palm Beach, FL
          </h1>
          <p className="text-lg text-white/80">
            Dependable residential cleaning for the families and communities of
            Royal Palm Beach &mdash; so you can reclaim your weekends.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              Royal Palm Beach sits just west of I-95 in one of the
              fastest-growing corridors of Palm Beach County, and its appeal is
              easy to understand. Planned communities like Madison Green,
              Saratoga, and Hampton Cay offer spacious floor plans, well-kept
              common areas, and a neighborhood feel that&apos;s hard to find
              closer to the coast. But those larger homes &mdash; often 2,000 to
              3,500 square feet or more &mdash; come with more tile to mop, more
              bedrooms to dust, and more bathrooms to scrub. That&apos;s where
              Golding Signature Cleaning comes in. We provide recurring cleaning
              services that keep your home consistently clean without eating into
              the time you&apos;d rather spend with your family at Royal Palm
              Beach Commons Park or catching a community event at the Cultural
              Center.
            </p>
            <p>
              Many of our Royal Palm Beach clients are dual-income households
              with young children, and they tell us the same thing: keeping up
              with the house feels like a second job. Between school drop-offs,
              soccer practice at Seminole Palms Park, and the daily commute along
              Crestwood Boulevard, there simply aren&apos;t enough hours in the
              day. Our weekly and biweekly cleaning plans are built for exactly
              this situation. We arrive on the same day each week, follow a
              detailed checklist tailored to your home, and lock up when
              we&apos;re done. You come home to clean floors, fresh-smelling
              bathrooms, and a kitchen you can actually cook in without clearing
              clutter first. It&apos;s one less thing on your plate &mdash; and
              our clients consistently say it&apos;s the best recurring expense
              in their budget.
            </p>
            <p>
              We also understand that Royal Palm Beach homes deal with specific
              South Florida challenges. Cypress Lakes and La Mancha back up to
              preserves and green spaces, which means pollen, insects, and
              moisture are constant visitors. The Willows and Royal Palm Beach
              Commons neighborhoods feature screened lanais and pool areas that
              track debris into the main living space. Our cleaning process
              accounts for these realities &mdash; we pay extra attention to
              entryways, sliding glass door tracks, and the fine layer of dust
              that settles on every horizontal surface between visits. Whether
              you need a standard weekly clean or a seasonal deep clean to reset
              your home before the holidays, we deliver reliable, thorough
              service at a fair price.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center font-serif text-3xl font-bold text-navy">
            Our Services in Royal Palm Beach
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.name}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <h3 className="mb-2 text-lg font-bold text-navy">
                  {service.name}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {service.description}
                </p>
              </div>
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
            We serve all neighborhoods throughout Royal Palm Beach — here are just a few.
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56927.37783498758!2d-80.23063!3d26.70841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8d79e6b0c2341%3A0x6e1d23d33c5ac725!2sRoyal%20Palm%20Beach%2C%20FL!5e0!3m2!1sen!2sus!4v1709900000000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map of Royal Palm Beach, FL service area"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 font-serif text-2xl font-bold text-white">
            Ready for a Cleaner Home in Royal Palm Beach?
          </h2>
          <p className="mb-6 text-white/80">
            Get a free estimate and let us handle the cleaning so you can focus
            on what matters &mdash; your family, your weekends, your life.
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
