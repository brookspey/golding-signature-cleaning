import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import ServiceChecklist from "@/components/ServiceChecklist";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { cities, citySlugs } from "@/data/cities";
import { allServices, serviceSlugs } from "@/data/services";

interface Props {
  params: Promise<{ city: string; service: string }>;
}

const serviceImageMap: Record<string, string> = {
  "standard-cleaning": "/images/standard-cleaning.png",
  "deep-cleaning": "/images/deep-cleaning.png",
  "airbnb-cleaning": "/images/moveout-cleaning.png",
  "office-cleaning": "/images/standard-cleaning.png",
  "custom-cleaning": "/images/custom-cleaning.jpg",
};

export async function generateStaticParams() {
  const params: { city: string; service: string }[] = [];
  for (const city of citySlugs) {
    for (const service of serviceSlugs) {
      params.push({ city, service });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug, service: serviceSlug } = await params;
  const cityMeta = cities[citySlug];
  const serviceMeta = allServices[serviceSlug];
  if (!cityMeta || !serviceMeta) return {};

  const content = serviceMeta.locations[citySlug];
  if (!content) return {};

  const canonicalUrl = `https://www.thegoldingagency.com/service-areas/${citySlug}/${serviceSlug}`;

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: content.metaTitle,
      description: content.ogDescription ?? content.metaDescription,
      url: canonicalUrl,
      siteName: "Golding Signature Cleaning",
      type: "website",
      images: serviceImageMap[serviceSlug]
        ? [{ url: `https://www.thegoldingagency.com${serviceImageMap[serviceSlug]}` }]
        : undefined,
    },
    other: {
      "geo.region": "US-FL",
      "geo.placename": cityMeta.name,
    },
  };
}

export default async function ServiceLocationPage({ params }: Props) {
  const { city: citySlug, service: serviceSlug } = await params;
  const cityMeta = cities[citySlug];
  const serviceMeta = allServices[serviceSlug];
  if (!cityMeta || !serviceMeta) notFound();

  const content = serviceMeta.locations[citySlug];
  if (!content) notFound();

  // Related services: other services in same city
  const relatedServices = Object.values(allServices).filter(
    (s) => s.slug !== serviceSlug && s.locations[citySlug]
  );

  // Nearby areas: same service in neighboring cities
  const nearbyCities = cityMeta.nearby
    .filter((slug) => serviceMeta.locations[slug])
    .map((slug) => cities[slug]);

  const serviceImage = serviceImageMap[serviceSlug];

  // Schema: Service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${serviceMeta.name} in ${cityMeta.name}, ${cityMeta.state}`,
    serviceType: serviceMeta.serviceType,
    provider: {
      "@type": "HouseCleaningService",
      name: "Golding Signature Cleaning",
      url: "https://www.thegoldingagency.com",
    },
    areaServed: {
      "@type": "Place",
      name: `${cityMeta.name}, ${cityMeta.state}`,
    },
    description: content.metaDescription,
  };

  // Schema: FAQPage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-navy pb-16 pt-32 sm:pt-36">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Service Areas", href: "/service-areas" },
              { name: `${cityMeta.name}, FL`, href: `/service-areas/${citySlug}` },
              {
                name: serviceMeta.shortName,
                href: `/service-areas/${citySlug}/${serviceSlug}`,
              },
            ]}
          />
          <h1 className="mb-4 font-serif text-4xl font-bold text-white sm:text-5xl">
            {content.heroHeading}
          </h1>
          <p className="mb-6 text-lg text-white/80">{content.heroSubheading}</p>

          {/* Trust Badges */}
          <div className="mb-8 flex flex-wrap items-center justify-center gap-4 text-sm text-white/70">
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Fully Insured
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Background-Checked Staff
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              100% Satisfaction Guaranteed
            </span>
          </div>

          {/* Hero CTA */}
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

      <article>
        {/* Main Content — 3 unique paragraphs */}
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none text-gray-600">
              {content.paragraphs.map((p, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
              ))}
            </div>

            {/* Inline CTA */}
            <p className="mt-8 text-center text-lg font-medium text-navy">
              Ready for a spotless {serviceSlug === "office-cleaning" ? "workspace" : "home"}?{" "}
              <Link href="/contact" className="font-bold text-gold underline underline-offset-2 hover:text-gold-light">
                Get your free estimate &rarr;
              </Link>
            </p>
          </div>
        </section>

        {/* Service Image */}
        {serviceImage && (
          <section className="pb-10">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <div className="overflow-hidden rounded-2xl shadow-md">
                <Image
                  src={serviceImage}
                  alt={`Professional ${serviceMeta.name.toLowerCase()} in ${cityMeta.name}, FL`}
                  width={896}
                  height={504}
                  className="h-auto w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </section>
        )}

        {/* Service Checklist */}
        <section className="bg-gray-50 py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-10 text-center font-serif text-3xl font-bold text-navy">
              What&rsquo;s Included in {serviceMeta.shortName}
            </h2>
            <ServiceChecklist items={content.checklist} />
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-10 text-center font-serif text-3xl font-bold text-navy">
              {serviceMeta.shortName} FAQs for {cityMeta.name}
            </h2>
            <FAQSection faqs={content.faqs} />

            {/* Post-FAQ CTA */}
            <p className="mt-10 text-center text-lg text-gray-600">
              Still have questions?{" "}
              <a href="tel:16467646839" className="font-bold text-navy underline underline-offset-2 hover:text-gold">
                Call us at (646) 764-6839
              </a>
            </p>
          </div>
        </section>
      </article>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="bg-gray-50 py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-10 text-center font-serif text-3xl font-bold text-navy">
              Other Services in {cityMeta.name}
            </h2>
            <nav aria-label="Related cleaning services">
              <div className="grid gap-4 sm:grid-cols-2">
                {relatedServices.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/service-areas/${citySlug}/${s.slug}`}
                    className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <h3 className="mb-1 text-lg font-bold text-navy">
                      {s.name} in {cityMeta.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {s.shortName} in {cityMeta.name} &rarr;
                    </p>
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </section>
      )}

      {/* Nearby Areas */}
      {nearbyCities.length > 0 && (
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-10 text-center font-serif text-3xl font-bold text-navy">
              {serviceMeta.shortName} in Nearby Areas
            </h2>
            <nav aria-label="Nearby service areas">
              <div className="flex flex-wrap justify-center gap-3">
                {nearbyCities.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/service-areas/${c.slug}/${serviceSlug}`}
                    className="rounded-full border border-navy/20 bg-navy/5 px-5 py-2.5 text-sm font-medium text-navy transition-colors hover:bg-navy hover:text-white"
                  >
                    {serviceMeta.shortName} in {c.name}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </section>
      )}

      {/* Google Maps */}
      <section className="pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl shadow-md">
            <iframe
              src={cityMeta.mapEmbedUrl}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map of ${cityMeta.name}, FL service area`}
            />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-navy py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 font-serif text-2xl font-bold text-white">
            Book {serviceMeta.shortName} in {cityMeta.name}
          </h2>
          <p className="mb-2 text-white/80">
            Get a free estimate for professional {serviceMeta.name.toLowerCase()} in{" "}
            {cityMeta.name}, FL. We&rsquo;ll match the service to your{" "}
            {serviceSlug === "office-cleaning" ? "workspace" : "home"}.
          </p>
          <p className="mb-6 text-sm text-gold">
            Limited availability this month &mdash; book now to secure your spot.
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

      <StickyMobileCTA />
    </>
  );
}
