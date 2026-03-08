import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Residential Cleaning Services | Deep Clean, Airbnb & Move-Out | Palm Beach County",
  description:
    "Residential cleaning services in West Palm Beach and all of Palm Beach County, FL. Weekly, biweekly, and one-time deep cleaning for homes, Airbnbs, and move-outs. Book online today!",
  alternates: { canonical: "https://www.thegoldingagency.com/services" },
};

const packages = [
  {
    name: "Standard/Regular Cleaning",
    image: "/images/standard-cleaning.png",
    alt: "Standard residential house cleaning service in Palm Beach County FL",
    price: "Starting estimate provided after consultation",
    description:
      "Ideal for routine upkeep and maintaining a clean, comfortable home. This service focuses on high-traffic and commonly used areas throughout your Palm Beach County residence.",
    includes: [
      "Dusting surfaces",
      "Sweeping & mopping floors",
      "Kitchen wipe-down (counters, sink, exterior appliances)",
      "Bathroom surface cleaning",
      "Trash removal",
    ],
    note: "Recommended for weekly, bi-weekly, or monthly service.",
    popular: false,
  },
  {
    name: "Deep Cleaning",
    image: "/images/deep-cleaning.png",
    alt: "Deep house cleaning service in West Palm Beach and Palm Beach County FL",
    price: "Starting estimate provided after consultation",
    description:
      "A more detailed clean designed to tackle built-up dirt and neglected areas. Perfect for first-time clients or homes in Palm Beach County that need extra attention.",
    includes: [
      "Everything in Standard Cleaning",
      "Detailed bathroom scrubbing",
      "Baseboards & buildup removal",
      "Kitchen deep clean (exterior appliances, heavier grime)",
    ],
    note: "Deep cleaning is recommended before starting recurring service.",
    popular: true,
  },
  {
    name: "Airbnb & Move-In/Move-Out Cleaning",
    image: "/images/moveout-cleaning.png",
    alt: "Airbnb turnover and move-out cleaning service in Palm Beach County FL",
    price: "Starting estimate provided after consultation",
    description:
      "Designed for property turnovers, rentals, and move-outs across Palm Beach County. This service focuses on preparing the space for the next occupant or guest.",
    includes: [
      "Kitchen & bathroom deep clean",
      "Floors throughout",
      "Interior surface wipe-down",
      "Trash removal",
    ],
    note: null,
    popular: false,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex items-center justify-center overflow-hidden bg-navy pb-20 pt-32 sm:pt-36">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/services-hero.png" alt="" fill className="object-cover" aria-hidden="true" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-4 font-serif text-4xl font-bold text-white sm:text-5xl">
            Choose Your Shine
          </h1>
          <p className="text-lg text-white/80">
            Residential cleaning, deep clean, Airbnb turnovers &mdash; packages for every home in Palm Beach County.
          </p>
        </div>
      </section>

      {/* Scrolling Marquee */}
      <div className="overflow-hidden bg-gold py-3">
        <div className="animate-marquee flex whitespace-nowrap">
          {Array.from({ length: 3 }).map((_, i) => (
            <span key={i} className="mx-8 text-sm font-semibold text-navy">
              Residential Cleaning &#10038; Deep Clean &#10038; Satisfaction Guaranteed &#10038; Trusted Staff &#10038; Bathroom Sparkle &#10038; Palm Beach County
            </span>
          ))}
        </div>
      </div>

      {/* Service Packages */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-3">
            {packages.map((pkg) => (
              <article
                key={pkg.name}
                className={`relative overflow-hidden rounded-2xl border bg-white shadow-sm transition-shadow hover:shadow-lg ${
                  pkg.popular ? "border-gold ring-2 ring-gold/20" : "border-gray-100"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute right-4 top-4 z-10 rounded-full bg-gold px-3 py-1 text-xs font-bold text-navy">
                    Most Popular
                  </div>
                )}
                <div className="relative h-72 overflow-hidden">
                  <Image src={pkg.image} alt={pkg.alt} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h2 className="mb-2 text-xl font-bold text-navy">{pkg.name}</h2>
                  <p className="mb-4 text-sm italic text-gold">{pkg.price}</p>
                  <p className="mb-4 text-sm leading-relaxed text-gray-600">{pkg.description}</p>

                  <h3 className="mb-2 text-sm font-semibold text-navy">Includes:</h3>
                  <ul className="mb-5 space-y-2">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                        <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  {pkg.note && <p className="mb-5 text-xs italic text-gray-500">{pkg.note}</p>}

                  <Link
                    href="/contact"
                    className={`block rounded-full py-3 text-center text-sm font-semibold transition-colors ${
                      pkg.popular
                        ? "bg-gold text-navy hover:bg-gold-light"
                        : "bg-navy text-white hover:bg-navy-light"
                    }`}
                  >
                    Get Your Free Estimate
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Focus Cleaning */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <div className="relative h-80 overflow-hidden rounded-2xl md:h-[450px]">
            <Image
              src="/images/custom-cleaning.jpg"
              alt="Custom focus hourly cleaning service for homes in Palm Beach County FL"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="mb-4 font-serif text-3xl font-bold text-navy">
              Custom Focus Cleaning (Hourly)
            </h2>
            <p className="mb-4 text-gray-600">
              Not every home needs a full clean. Our Custom Focus Cleaning allows
              you to customize your service based on your budget and priority areas.
            </p>
            <h3 className="mb-3 font-semibold text-navy">How it works:</h3>
            <ul className="mb-6 space-y-2.5">
              <li className="flex items-start gap-3 text-gray-600">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gold text-xs font-bold text-navy">1</span>
                You tell us your budget
              </li>
              <li className="flex items-start gap-3 text-gray-600">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gold text-xs font-bold text-navy">2</span>
                You choose the areas that matter most
              </li>
              <li className="flex items-start gap-3 text-gray-600">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gold text-xs font-bold text-navy">3</span>
                We clean thoroughly within the agreed time frame
              </li>
            </ul>
            <p className="mb-6 text-sm text-gray-500">
              Final scope, price, and timing are confirmed before your appointment.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-full bg-gold px-8 py-3 text-sm font-semibold text-navy transition-all hover:bg-gold-light hover:shadow-lg"
            >
              Request a Custom Cleaning
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16 text-center">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="mb-4 font-serif text-3xl font-bold text-white">
            Not Sure Which Service You Need?
          </h2>
          <p className="mb-8 text-white/70">
            Contact us and we&apos;ll help you choose the best cleaning package for your home.
            We serve all of Palm Beach County, FL.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-gold px-8 py-3.5 text-base font-semibold text-navy transition-all hover:bg-gold-light hover:shadow-lg"
          >
            Get a Free Estimate
          </Link>
        </div>
      </section>

    </>
  );
}
