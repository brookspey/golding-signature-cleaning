import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "House Cleaning Services in Boynton Beach, FL",
  description:
    "Reliable house cleaning services in Boynton Beach, FL. Serving Canyon Lakes, Indian Spring, Valencia, and all Boynton Beach communities. Deep cleaning, standard, and move-out services.",
  alternates: {
    canonical: "https://www.thegoldingagency.com/service-areas/boynton-beach",
  },
};

const neighborhoods = [
  "Canyon Lakes",
  "Indian Spring",
  "Valencia at Boynton Beach",
  "Hunters Run",
  "Aberdeen",
  "Leisureville",
  "Chapel Hill",
  "Venetian Isles",
];

const services = [
  {
    name: "Standard Cleaning",
    description:
      "Dependable weekly or biweekly cleaning designed for Boynton Beach families and retirees. We maintain every room so your home stays comfortable and welcoming between visits.",
  },
  {
    name: "Deep Cleaning",
    description:
      "A comprehensive clean that covers areas often missed during routine maintenance — inside cabinets, behind appliances, under furniture, and along baseboards throughout your home.",
  },
  {
    name: "Airbnb / Move-Out Cleaning",
    description:
      "Thorough cleaning for rental turnovers and real estate transactions. We prepare properties for new occupants with a detailed checklist that covers every room and surface.",
  },
  {
    name: "Custom Focus Cleaning",
    description:
      "Direct our team to the areas that matter most to you. Whether it's a post-holiday kitchen reset or a garage-to-guest-room conversion, we handle the specific tasks you need done.",
  },
];

export default function BoyntonBeachPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pb-16 pt-32 sm:pt-36">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-4 font-serif text-4xl font-bold text-white sm:text-5xl">
            House Cleaning Services in Boynton Beach, FL
          </h1>
          <p className="text-lg text-white/80">
            Professional cleaning for Boynton Beach&apos;s family neighborhoods,
            active adult communities, and coastal rental properties.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              Boynton Beach occupies a unique position in Palm Beach County,
              blending the affordability and space of a suburban community with
              genuine proximity to the coast. It&apos;s a city of contrasts: young
              families in Canyon Lakes and Chapel Hill live just minutes from retirees
              in Leisureville and Hunters Run, and the growing commercial corridor
              near Boynton Beach Mall sits alongside quiet residential streets shaded
              by mature oaks. Golding Signature Cleaning serves all of these
              communities, adapting our cleaning approach to match the size, layout,
              and lifestyle of each household.
            </p>
            <p>
              A significant portion of Boynton Beach&apos;s population lives in 55+
              and active adult communities, including Aberdeen, Indian Spring, and
              Valencia at Boynton Beach. Many residents in these neighborhoods value
              regular cleaning help &mdash; not because they can&apos;t maintain
              their homes, but because they&apos;d rather invest their time in the
              activities and social life these communities are built around. We
              provide consistent, scheduled cleaning services that give these
              residents peace of mind. Our team handles everything from floor-to-
              ceiling dusting to bathroom sanitization, and we pay particular
              attention to the details that matter in smaller homes and villas:
              grout lines, window tracks, fan blades, and the fine layer of Florida
              dust that settles on every horizontal surface between cleanings.
            </p>
            <p>
              Boynton Beach&apos;s oceanfront area &mdash; stretching from the
              Boynton Beach Inlet down to Oceanfront Park &mdash; has also seen a
              surge in rental activity. Property owners near the beach and along the
              Intracoastal are increasingly listing homes and condos on short-term
              rental platforms, and each turnover requires a thorough clean that meets
              guest expectations. Our move-in and move-out cleaning service handles
              this efficiently, with standardized checklists that cover appliances,
              bathrooms, bedding areas, and common touchpoints. For families near the
              Schoolhouse Children&apos;s Museum or in the Venetian Isles
              neighborhood, we also offer flexible scheduling &mdash; including
              weekends &mdash; so cleaning fits around school runs, sports, and
              everything else that keeps a Boynton Beach household moving.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center font-serif text-3xl font-bold text-navy">
            Our Services in Boynton Beach
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
            We serve all neighborhoods throughout Boynton Beach — here are just a few.
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56927.37783498758!2d-80.06619!3d26.52535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8e51786899197%3A0x65040ce5c21b7de5!2sBoynton%20Beach%2C%20FL!5e0!3m2!1sen!2sus!4v1709900000000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map of Boynton Beach, FL service area"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 font-serif text-2xl font-bold text-white">
            Get a Clean Home in Boynton Beach
          </h2>
          <p className="mb-6 text-white/80">
            From Canyon Lakes to the coast, we keep Boynton Beach homes spotless.
            Contact us for a free, no-obligation estimate.
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
