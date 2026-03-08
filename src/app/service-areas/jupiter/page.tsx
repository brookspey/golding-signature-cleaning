import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "House Cleaning Services in Jupiter, FL",
  description:
    "Professional house cleaning services in Jupiter, FL. Serving Abacoa, Jupiter Farms, Indiantown Road, and all Jupiter neighborhoods. Trusted, detail-oriented cleaning for your home.",
  alternates: { canonical: "https://www.thegoldingagency.com/service-areas/jupiter" },
};

const neighborhoods = [
  "Abacoa",
  "Jupiter Farms",
  "Jupiter Village",
  "Egret Landing",
  "The Bluffs",
  "Jupiter Country Club",
  "Botanica",
  "Mallory Creek",
];

const services = [
  {
    name: "Standard Cleaning",
    description:
      "Routine upkeep for your Jupiter home — kitchens, bathrooms, floors, and living spaces cleaned to a consistent standard every visit.",
  },
  {
    name: "Deep Cleaning",
    description:
      "A thorough, top-to-bottom clean that tackles built-up grime, baseboards, ceiling fans, inside appliances, and hard-to-reach areas.",
  },
  {
    name: "Move-In / Move-Out Cleaning",
    description:
      "Comprehensive cleaning for homes in transition. We leave every surface spotless so you can start fresh or get your deposit back.",
  },
  {
    name: "Custom Focus Cleaning",
    description:
      "Tell us your priorities and we build the session around them — perfect for specific rooms, post-renovation dust, or seasonal refreshes.",
  },
];

export default function JupiterPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pb-16 pt-32 sm:pt-36">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-4 font-serif text-4xl font-bold text-white sm:text-5xl">
            House Cleaning Services in Jupiter, FL
          </h1>
          <p className="text-lg text-white/80">
            Reliable, detail-oriented residential cleaning for Jupiter homeowners — from
            the inlet to the farms and every neighborhood in between.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 text-gray-600 leading-relaxed">
          <p className="mb-6">
            Jupiter is a town built around the outdoors. Between morning paddleboard
            sessions at Dubois Park, afternoons watching spring training at Roger Dean
            Stadium, and evenings strolling Harbourside Place, residents here spend more
            time outside than almost anywhere in Palm Beach County. That active, coastal
            lifestyle is what makes Jupiter special — but it also means your home faces
            a unique set of cleaning challenges. Sand tracked in from Jupiter Beach works
            its way into tile grout and under furniture. Salt air leaves a stubborn film
            on windows and glass doors. Florida&apos;s humidity invites mildew into
            bathrooms and closets faster than you&apos;d expect. At Golding Signature
            Cleaning, we understand these challenges because we clean Jupiter homes
            every week, and we know exactly where to focus.
          </p>
          <p className="mb-6">
            Whether you live in a newer Abacoa townhome near the shops and restaurants,
            a spacious property out in Jupiter Farms surrounded by acres of green, or a
            family home in Egret Landing or The Bluffs, we tailor every cleaning session
            to fit your space and your priorities. Windowsills and sliding-door tracks
            get the extra attention they need in coastal homes. Bathroom surfaces are
            treated to prevent mildew buildup. Floors are cleaned with techniques suited
            to the tile, wood, or luxury vinyl common in Jupiter residences. We pay
            attention to the details that make a real difference when you walk through
            your front door after a long day outside.
          </p>
          <p className="mb-6">
            Many of our Jupiter clients are families with active kids, professionals who
            commute south to Palm Beach Gardens or West Palm Beach, or retirees who want
            to spend their time enjoying the area — not scrubbing bathrooms. We offer
            weekly and biweekly recurring cleaning schedules so your home stays
            consistently fresh without you having to think about it. Homes near Jupiter
            Inlet Lighthouse and the beach benefit especially from our recurring
            service, where we stay ahead of the sand and salt before it accumulates. If
            you live in Jupiter Country Club, Botanica, Mallory Creek, or Jupiter
            Village, we&apos;re already cleaning homes in your community and can easily
            add you to our route.
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
              <div
                key={service.name}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <h3 className="mb-2 text-lg font-bold text-navy">{service.name}</h3>
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
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-3 font-serif text-3xl font-bold text-navy">
            Popular Neighborhoods We Clean in Jupiter
          </h2>
          <p className="mb-8 text-sm text-gray-500">
            We serve all neighborhoods throughout Jupiter — here are just a few.
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56927.37783498758!2d-80.09423!3d26.93426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88ded31b6e2b1789%3A0x968a2bb3d8e4e1c1!2sJupiter%2C%20FL!5e0!3m2!1sen!2sus!4v1709900000000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map of Jupiter, FL service area"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 font-serif text-2xl font-bold text-white">
            Ready for a Cleaner Home in Jupiter?
          </h2>
          <p className="mb-8 text-white/80">
            Get a free, no-obligation estimate for your Jupiter home. We&apos;ll build a
            cleaning plan around your schedule and priorities.
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
