import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "House Cleaning Services in Greenacres, FL",
  description:
    "Affordable, reliable house cleaning in Greenacres, FL. Serving Palm Hills, Holiday City, Waterside, and all Greenacres neighborhoods. Weekly, biweekly, and one-time cleaning.",
  alternates: {
    canonical: "https://www.thegoldingagency.com/service-areas/greenacres",
  },
};

const neighborhoods = [
  "Palm Hills",
  "Holiday City",
  "Waterside",
  "Greenacres Terrace",
  "Palm Ridge",
  "Rainberry Lake",
  "Broadmoor Village",
  "Haverhill Heights",
];

const services = [
  {
    name: "Standard Cleaning",
    slug: "standard-cleaning",
    description:
      "Practical, thorough maintenance cleaning that covers every room in your Greenacres home. We vacuum, mop, dust, and sanitize on a consistent schedule — weekly, biweekly, or monthly — so your home is always guest-ready without the effort.",
  },
  {
    name: "Deep Cleaning",
    slug: "deep-cleaning",
    description:
      "An intensive clean for homes that need a full reset. We scrub tile grout, degrease range hoods, detail bathroom fixtures, and clean behind appliances. Popular with Greenacres homeowners doing seasonal refreshes or preparing for family visits.",
  },
  {
    name: "Airbnb / Move-Out Cleaning",
    slug: "airbnb-cleaning",
    description:
      "Complete turnover cleaning for rental units and move-outs across Greenacres. We handle everything from oven interiors to closet shelving, ensuring the space is ready for the next tenant or a successful final walkthrough.",
  },
  {
    name: "Custom Focus Cleaning",
    slug: "custom-cleaning",
    description:
      "Set your own priorities and budget. Tell us which rooms or tasks matter most — whether that's a kitchen deep-scrub, bathroom detailing, or a full living area refresh — and we'll build a cleaning plan that fits your price point.",
  },
  {
    name: "Office Cleaning",
    slug: "office-cleaning",
    description:
      "Budget-friendly office cleaning for Greenacres businesses along Jog Road and the 10th Avenue North commercial strip. We provide consistent, no-frills workspace cleaning that keeps your office presentable and hygienic.",
  },
];

export default function GreenacresPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Service Areas", href: "/service-areas" }, { name: "Greenacres, FL", href: "/service-areas/greenacres" }]} />
      {/* Hero */}
      <section className="bg-navy pb-16 pt-32 sm:pt-36">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-4 font-serif text-4xl font-bold text-white sm:text-5xl">
            House Cleaning Services in Greenacres, FL
          </h1>
          <p className="text-lg text-white/80">
            Affordable, no-nonsense residential cleaning for every home in
            Greenacres &mdash; from single-family houses to apartments and
            townhomes.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              Greenacres is one of Palm Beach County&apos;s most diverse and
              hardworking communities, and the people who live here value
              practicality above all else. Residents along the 10th Avenue North
              corridor and throughout neighborhoods like Palm Hills, Holiday
              City, and Greenacres Terrace aren&apos;t looking for luxury
              cleaning services with a premium price tag &mdash; they want a
              reliable team that shows up on time, cleans thoroughly, and charges
              a fair rate. That&apos;s exactly what Golding Signature Cleaning
              delivers. We built our Custom Focus Cleaning option with
              communities like Greenacres in mind: you tell us your budget and
              priorities, and we put together a cleaning plan that maximizes
              value without cutting corners on quality.
            </p>
            <p>
              The housing mix in Greenacres reflects the community&apos;s
              accessibility. You&apos;ll find affordable single-family homes in
              Palm Ridge and Haverhill Heights sitting alongside well-maintained
              townhome communities like Broadmoor Village and Rainberry Lake.
              Apartments and duplexes are common along Jog Road and the
              residential streets near Greenacres Community Park. We clean all of
              them. A 900-square-foot apartment gets the same attention to detail
              as a 2,200-square-foot house &mdash; we just scale the service to
              match the space and the budget. For retirees in Waterside who want
              biweekly help keeping up with the house, or working families near
              Okeeheelee Park who need weekly service because there&apos;s
              simply no time to clean after long shifts, we offer flexible
              scheduling that works around real life, not around our convenience.
            </p>
            <p>
              What sets us apart in Greenacres is that we don&apos;t
              oversell. You won&apos;t get a pitch for add-on services you
              don&apos;t need or a quote inflated by unnecessary extras. We
              walk through your home, understand what matters to you, and give
              you a straightforward price. Many of our Greenacres clients
              started with a one-time deep clean &mdash; often before a family
              gathering or after a renovation &mdash; and switched to recurring
              service once they saw the results. We earn repeat business by
              delivering consistent quality at a price that respects your
              household budget. Whether you live off Jog Road, near the shops
              along 10th Avenue North, or in one of the quieter pockets south of
              Lake Worth Road, Golding Signature Cleaning is here to keep your
              home clean and comfortable without the stress of doing it yourself.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center font-serif text-3xl font-bold text-navy">
            Our Services in Greenacres
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.name}
                href={`/service-areas/greenacres/${service.slug}`}
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
            We serve all neighborhoods throughout Greenacres — here are just a few.
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56927.37783498758!2d-80.14865!3d26.62743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8d6f98eca7fa3%3A0x46bba7a78f67a8d6!2sGreenacres%2C%20FL!5e0!3m2!1sen!2sus!4v1709900000000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map of Greenacres, FL service area"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 font-serif text-2xl font-bold text-white">
            Get Affordable Cleaning in Greenacres
          </h2>
          <p className="mb-6 text-white/80">
            Tell us what you need and your budget &mdash; we&apos;ll put
            together a cleaning plan that works for your home and your wallet.
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
