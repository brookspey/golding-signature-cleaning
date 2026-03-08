import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "House Cleaning Services in Boca Raton, FL",
  description:
    "Professional residential cleaning services in Boca Raton, FL. Serving Mizner Park, Royal Palm Yacht Club, Boca West, and all Boca Raton neighborhoods. Book your free estimate today.",
  alternates: {
    canonical: "https://www.thegoldingagency.com/service-areas/boca-raton",
  },
};

const neighborhoods = [
  "Mizner Park",
  "Royal Palm Yacht & Country Club",
  "Boca West",
  "Town Center",
  "Woodfield Country Club",
  "Broken Sound",
  "Palmetto Park",
  "Spanish River",
];

const services = [
  {
    name: "Standard Cleaning",
    description:
      "Consistent, reliable upkeep for Boca Raton's larger homes and estates. We handle every room so your property stays guest-ready between deep cleans.",
  },
  {
    name: "Deep Cleaning",
    description:
      "A comprehensive clean that addresses buildup in hard-to-reach areas. Especially important in Boca's tropical climate, where humidity accelerates dust, mildew, and allergen accumulation.",
  },
  {
    name: "Airbnb / Move-Out Cleaning",
    description:
      "Detailed turnover cleaning for rental properties and homes changing hands. We leave every surface, appliance, and fixture in move-in condition.",
  },
  {
    name: "Custom Focus Cleaning",
    description:
      "You set the priorities. Whether your master bath needs extra attention or your lanai needs a thorough wipe-down, we customize the service to match.",
  },
];

export default function BocaRatonPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pb-16 pt-32 sm:pt-36">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-4 font-serif text-4xl font-bold text-white sm:text-5xl">
            House Cleaning Services in Boca Raton, FL
          </h1>
          <p className="text-lg text-white/80">
            Premium residential cleaning tailored to Boca Raton&apos;s upscale
            homes, gated communities, and waterfront properties.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              Boca Raton is known for its beautifully maintained homes, manicured
              landscapes, and an expectation of quality that extends into every
              detail of daily life. At Golding Signature Cleaning, we match that
              standard. Many of the residences we service in Boca feature four, five,
              or more bedrooms, multiple bathrooms, expansive kitchens, and outdoor
              living areas that are used year-round. Keeping a home of that size
              consistently clean requires more than a quick once-over &mdash; it
              requires a systematic approach, trained professionals, and cleaning
              products that are effective without being harsh on premium finishes.
            </p>
            <p>
              South Florida&apos;s tropical climate plays a significant role in how
              quickly a home accumulates dust, pollen, and mildew. In communities
              like Boca West and Woodfield Country Club, where many homes are
              surrounded by lush vegetation and golf course greenery, airborne
              particles settle on surfaces faster than homeowners in drier climates
              might expect. Regular cleaning &mdash; whether weekly or biweekly
              &mdash; is not a luxury in this environment; it&apos;s a practical
              necessity for maintaining healthy indoor air quality and protecting
              surfaces like natural stone countertops, hardwood floors, and stainless
              steel appliances. We calibrate our cleaning frequency and product
              selection to the specific conditions of your home and neighborhood.
            </p>
            <p>
              Whether you live near the shops at Mizner Park, along the quiet
              tree-lined streets of Palmetto Park, or in a gated community off
              Yamato Road near the FAU campus, we provide the same level of care and
              attention. Our team regularly services homes around Town Center Mall,
              Spanish River, and the Royal Palm Yacht &amp; Country Club area. We
              also work with property managers and homeowners who rent seasonally,
              ensuring that homes are thoroughly cleaned and inspection-ready between
              tenants. For Boca Raton residents who take pride in their homes, we
              offer a cleaning service that reflects that same commitment to
              excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center font-serif text-3xl font-bold text-navy">
            Our Services in Boca Raton
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56927.37783498758!2d-80.10305!3d26.35869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d91fce825de443%3A0x5ba186e5e6a0e4e0!2sBoca%20Raton%2C%20FL!5e0!3m2!1sen!2sus!4v1709900000000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map of Boca Raton, FL service area"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 font-serif text-2xl font-bold text-white">
            Schedule Your Boca Raton Home Cleaning
          </h2>
          <p className="mb-6 text-white/80">
            Let us handle the cleaning so you can enjoy everything Boca Raton has
            to offer. Request your free estimate today.
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
