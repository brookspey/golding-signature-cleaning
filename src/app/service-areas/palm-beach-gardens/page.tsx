import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "House Cleaning Services in Palm Beach Gardens, FL",
  description:
    "Professional residential cleaning in Palm Beach Gardens, FL. Serving PGA National, Mirasol, Old Palm, and all Palm Beach Gardens communities. Book your free cleaning estimate today.",
  alternates: {
    canonical: "https://www.thegoldingagency.com/service-areas/palm-beach-gardens",
  },
};

const neighborhoods = [
  "PGA National",
  "Mirasol",
  "Old Palm",
  "Evergrene",
  "Frenchman's Reserve",
  "Alton",
  "The Gardens",
  "San Michele",
  "BallenIsles",
];

const services = [
  {
    name: "Standard Cleaning",
    slug: "standard-cleaning",
    description:
      "A comprehensive clean of every room — kitchens, bathrooms, bedrooms, and common areas maintained to a premium standard each visit.",
  },
  {
    name: "Deep Cleaning",
    slug: "deep-cleaning",
    description:
      "Meticulous attention to every corner of your home, including inside ovens, behind refrigerators, window tracks, grout lines, and light fixtures.",
  },
  {
    name: "Move-In / Move-Out Cleaning",
    slug: "airbnb-cleaning",
    description:
      "A full property cleaning designed for homes changing hands. We ensure every surface, cabinet interior, and appliance is move-in ready.",
  },
  {
    name: "Custom Focus Cleaning",
    slug: "custom-cleaning",
    description:
      "Designed for homeowners who want to direct the session — ideal for pre-event preparation, guest suite refreshes, or targeting high-traffic zones.",
  },
  {
    name: "Office Cleaning",
    slug: "office-cleaning",
    description:
      "Professional office cleaning for businesses along PGA Boulevard and in the Gardens corporate parks. From medical offices near Midtown to professional suites at Downtown at the Gardens, we deliver spotless results.",
  },
];

export default function PalmBeachGardensPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Service Areas", href: "/service-areas" }, { name: "Palm Beach Gardens, FL", href: "/service-areas/palm-beach-gardens" }]} />
      {/* Hero */}
      <section className="bg-navy pb-16 pt-32 sm:pt-36">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-4 font-serif text-4xl font-bold text-white sm:text-5xl">
            House Cleaning Services in Palm Beach Gardens, FL
          </h1>
          <p className="text-lg text-white/80">
            Premium residential cleaning for one of Palm Beach County&apos;s most
            distinguished communities.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 text-gray-600 leading-relaxed">
          <p className="mb-6">
            Palm Beach Gardens consistently ranks among the most desirable places to
            live in northern Palm Beach County, and the homes here reflect that status.
            From the gated fairways of PGA National and BallenIsles to the refined
            estates in Mirasol and Old Palm, this is a community where homeowners have
            high expectations — for their neighborhoods, their lifestyles, and the
            services they bring into their homes. Golding Signature Cleaning was built
            to meet those expectations. We deliver cleaning that is thorough,
            consistent, and tailored to the specific finishes and layouts common in Palm
            Beach Gardens residences, from marble countertops and hardwood floors to
            expansive lanais and chef&apos;s kitchens.
          </p>
          <p className="mb-6">
            The shopping and dining along PGA Boulevard, the walkable energy of Downtown
            at the Gardens, and the proximity to attractions like The Gardens Mall and
            the nearby Loggerhead Marinelife Center make this area a hub of activity.
            Our clients in Evergrene, Frenchman&apos;s Reserve, and San Michele are
            professionals and families who would rather spend their Saturday at Burns
            Road Recreation Center or exploring a new restaurant than vacuuming their
            living room. We give them that freedom with recurring cleaning plans that
            keep their homes impeccable week after week. Every visit follows a detailed,
            room-by-room checklist, and we adjust that checklist based on your
            feedback — because no two Palm Beach Gardens homes are exactly alike.
          </p>
          <p className="mb-6">
            What sets us apart in a market like Palm Beach Gardens is our commitment to
            customization. We know that a homeowner in Alton with a modern open-concept
            layout has different priorities than someone in Old Palm with formal dining
            rooms and a wine cellar. We don&apos;t apply a one-size-fits-all approach.
            During your initial walkthrough, we discuss your priorities, note the
            materials and finishes in your home, and build a cleaning plan that
            addresses everything from your high-traffic entryway to the guest bathroom
            you only use during season. Whether you need weekly maintenance, a one-time
            deep clean before hosting, or a move-out cleaning that leaves the property
            in flawless condition, we deliver the caliber of service that PBG residents
            expect.
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
                href={`/service-areas/palm-beach-gardens/${service.slug}`}
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
            Popular Neighborhoods We Clean in Palm Beach Gardens
          </h2>
          <p className="mb-8 text-sm text-gray-500">
            We serve all neighborhoods throughout Palm Beach Gardens — here are just a few.
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56927.37783498758!2d-80.16225!3d26.82347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88ded10d05f8b267%3A0xd9a85b6cde10f22a!2sPalm%20Beach%20Gardens%2C%20FL!5e0!3m2!1sen!2sus!4v1709900000000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map of Palm Beach Gardens, FL service area"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 font-serif text-2xl font-bold text-white">
            Experience the Difference in Palm Beach Gardens
          </h2>
          <p className="mb-8 text-white/80">
            Book a free walkthrough and estimate. We&apos;ll design a cleaning plan that
            matches the quality of your home.
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
