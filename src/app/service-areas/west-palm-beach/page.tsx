import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "House Cleaning Services in West Palm Beach, FL",
  description:
    "Professional house cleaning services in West Palm Beach, FL. Standard cleaning, deep cleaning, and move-out services for homes in Downtown, Northwood, Flamingo Park, and surrounding neighborhoods.",
  alternates: {
    canonical: "https://www.thegoldingagency.com/service-areas/west-palm-beach",
  },
};

const neighborhoods = [
  "Downtown West Palm Beach",
  "Northwood Village",
  "Flamingo Park",
  "El Cid",
  "Grandview Heights",
  "SoSo (South of Southern)",
  "Palm Beach Lakes",
  "Prospect Park",
];

const services = [
  {
    name: "Standard Cleaning",
    description:
      "Routine maintenance cleaning that keeps your West Palm Beach home looking its best week after week. We dust, vacuum, mop, and sanitize all living spaces so you can focus on enjoying the waterfront lifestyle.",
  },
  {
    name: "Deep Cleaning",
    description:
      "A thorough, top-to-bottom clean that reaches every corner of your home. Ideal for historic Flamingo Park bungalows or modern downtown condos that need a detailed refresh.",
  },
  {
    name: "Airbnb / Move-Out Cleaning",
    description:
      "Fast-turnaround cleaning for short-term rental hosts and tenants moving in or out. We ensure every surface is spotless and ready for the next guest or occupant.",
  },
  {
    name: "Custom Focus Cleaning",
    description:
      "Tell us what matters most to you. Whether it's the kitchen after a dinner party or a nursery that needs extra attention, we tailor the clean to your priorities.",
  },
];

export default function WestPalmBeachPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pb-16 pt-32 sm:pt-36">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-4 font-serif text-4xl font-bold text-white sm:text-5xl">
            House Cleaning Services in West Palm Beach, FL
          </h1>
          <p className="text-lg text-white/80">
            Our home base &mdash; proudly serving every neighborhood in West Palm
            Beach with reliable, detail-driven residential cleaning.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              West Palm Beach is where Golding Signature Cleaning started, and it
              remains the heart of our operation. Because we live and work here, we
              understand the unique demands that South Florida living places on a
              home. Salt air off the Intracoastal, afternoon humidity, and fine sand
              that somehow finds its way indoors all contribute to faster
              accumulation of dust and grime. Our cleaning routines are designed
              around these realities, using methods and products that protect your
              surfaces while delivering a genuinely deep clean.
            </p>
            <p>
              The architectural diversity across West Palm Beach keeps our work
              interesting. In Flamingo Park and El Cid, we care for beautifully
              restored Mediterranean Revival homes with tile floors, arched
              doorways, and original woodwork that demand a careful touch. Along
              Clematis Street and throughout the CityPlace district &mdash; now
              known as Rosemary Square &mdash; we service modern high-rise condos
              with floor-to-ceiling glass and sleek stone countertops. Over in
              Northwood Village, charming mid-century cottages sit alongside
              renovated bungalows, each with their own cleaning needs. No matter the
              style, we adapt our approach to suit your home&apos;s materials and
              layout.
            </p>
            <p>
              Being headquartered in West Palm Beach means faster response times and
              more flexible scheduling for local clients. Need a same-day deep clean
              before guests arrive from the Palm Beach waterfront? We can often
              accommodate that. Looking for consistent weekly service for your
              Grandview Heights family home or your SoSo rental property? We build
              recurring schedules that keep your space immaculate without you having
              to think about it. Our familiarity with the area &mdash; from the
              tree-lined streets of Prospect Park to the bustling energy around the
              Norton Museum of Art &mdash; means we know the neighborhoods, the
              traffic patterns, and the best way to get to your door on time, every
              time.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center font-serif text-3xl font-bold text-navy">
            Our Services in West Palm Beach
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
          <h2 className="mb-10 font-serif text-3xl font-bold text-navy">
            Neighborhoods We Serve
          </h2>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56927.37783498758!2d-80.09312!3d26.71534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8d5fbee3e5b2d%3A0x8c3f0321c8e0f315!2sWest%20Palm%20Beach%2C%20FL!5e0!3m2!1sen!2sus!4v1709900000000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map of West Palm Beach, FL service area"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 font-serif text-2xl font-bold text-white">
            Ready for a Cleaner Home in West Palm Beach?
          </h2>
          <p className="mb-6 text-white/80">
            Get a free, no-obligation estimate for your home. We&apos;ll build a
            cleaning plan that fits your schedule and budget.
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
