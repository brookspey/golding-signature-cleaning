import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "House Cleaning Services in Wellington, FL",
  description:
    "Trusted house cleaning services in Wellington, FL. Serving Olympia, Wellington Shores, Versailles, and all Wellington neighborhoods. Weekly, biweekly, deep cleaning, and more.",
  alternates: { canonical: "https://www.thegoldingagency.com/service-areas/wellington" },
};

const neighborhoods = [
  "Olympia",
  "Wellington Shores",
  "Versailles",
  "The Isles",
  "Sugar Pond Manor",
  "Greenview Shores",
  "Meadow Walk",
  "Palm Beach Polo",
];

const services = [
  {
    name: "Standard Cleaning",
    slug: "standard-cleaning",
    description:
      "Consistent, thorough cleaning of your entire home on a schedule that works for you — weekly, biweekly, or monthly visits.",
  },
  {
    name: "Deep Cleaning",
    slug: "deep-cleaning",
    description:
      "An intensive session covering baseboards, light fixtures, inside cabinets, behind appliances, and every surface that regular cleaning misses.",
  },
  {
    name: "Move-In / Move-Out Cleaning",
    slug: "airbnb-cleaning",
    description:
      "A complete reset for your home between residents. Every closet, drawer, and fixture cleaned and ready for the next chapter.",
  },
  {
    name: "Custom Focus Cleaning",
    slug: "custom-cleaning",
    description:
      "You set the priorities — whether that means extra time on kitchens, tackling playrooms, or preparing guest suites for visitors.",
  },
  {
    name: "Office Cleaning",
    slug: "office-cleaning",
    description:
      "Thorough cleaning for offices and commercial spaces near Wellington Green and along State Road 7. We help Wellington businesses maintain a clean, welcoming environment for staff and visitors.",
  },
];

export default function WellingtonPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Service Areas", href: "/service-areas" }, { name: "Wellington, FL", href: "/service-areas/wellington" }]} />
      {/* Hero */}
      <section className="bg-navy pb-16 pt-32 sm:pt-36">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-4 font-serif text-4xl font-bold text-white sm:text-5xl">
            House Cleaning Services in Wellington, FL
          </h1>
          <p className="text-lg text-white/80">
            Trusted residential cleaning for Wellington&apos;s families, equestrian
            estates, and everything in between.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 text-gray-600 leading-relaxed">
          <p className="mb-6">
            Wellington has earned its reputation as one of South Florida&apos;s most
            family-oriented communities, and for good reason. Between the world-class
            polo matches at Wellington International, the excellent schools, and the
            abundance of parks like Village Park and Tiger Shark Cove water park, it
            attracts families who value quality of life. But maintaining a home in
            Wellington takes real effort. Many properties here are larger than the Palm
            Beach County average — four- and five-bedroom layouts with open floor plans,
            expansive master suites, and lanais that collect pollen and dust year-round.
            Estate-style homes near Palm Beach Polo and the equestrian grounds often
            have additional square footage that demands a more systematic approach to
            cleaning. That is exactly what Golding Signature Cleaning provides.
          </p>
          <p className="mb-6">
            Our Wellington clients include busy two-income households in Olympia and
            Versailles, growing families in Sugar Pond Manor and Greenview Shores who
            need help keeping up with the mess that active kids create, and retirees in
            The Isles and Meadow Walk who simply want their home maintained to a high
            standard without the physical strain. We build each cleaning plan around the
            specific layout and needs of your home. A family with three kids and a dog
            in Wellington Shores needs a different approach than a couple in a gated
            golf-course community — and we adjust accordingly. We bring all our own
            supplies and equipment, and our cleaning teams follow a detailed checklist
            customized for your property.
          </p>
          <p className="mb-6">
            Wellington families are busy. Between polo season, school events, weekends
            at Wellington Green mall, and juggling work, the last thing you want to
            spend your free time on is scrubbing showers and mopping floors. Our
            recurring cleaning schedules are designed to give you that time back. Clients
            who start with biweekly service often move to weekly once they experience
            the difference of coming home to a consistently clean house. We handle
            everything from the kitchen counters to the ceiling fans so you can focus on
            what matters — your family, your hobbies, and actually enjoying your
            Wellington home.
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
                href={`/service-areas/wellington/${service.slug}`}
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
            Popular Neighborhoods We Clean in Wellington
          </h2>
          <p className="mb-8 text-sm text-gray-500">
            We serve all neighborhoods throughout Wellington — here are just a few.
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56927.37783498758!2d-80.24145!3d26.65868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8dbf35e0dc555%3A0x3fe4cf6ae5c19e56!2sWellington%2C%20FL!5e0!3m2!1sen!2sus!4v1709900000000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map of Wellington, FL service area"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 font-serif text-2xl font-bold text-white">
            Let Us Take Cleaning Off Your Plate
          </h2>
          <p className="mb-8 text-white/80">
            Request a free estimate for your Wellington home. We&apos;ll match you with a
            cleaning plan that fits your schedule and your space.
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
