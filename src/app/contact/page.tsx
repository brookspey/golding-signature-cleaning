import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Get a Free Cleaning Estimate | Palm Beach County, FL",
  description:
    "Request a free cleaning estimate in Palm Beach County, FL. Contact Golding Signature Cleaning for residential, Airbnb, and move-in/move-out cleaning services. We respond within 24 hours.",
  alternates: { canonical: "https://www.thegoldingagency.com/contact" },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pb-16 pt-32 sm:pt-36">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-4 font-serif text-4xl font-bold text-white sm:text-5xl">
            Contact Us
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/80">
            Have a question or need more information? Fill out the form below and
            a member of our team will get back to you as soon as possible. We
            usually respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {/* Form */}
          <div className="md:col-span-2">
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 sm:p-8">
              <h2 className="mb-2 text-xl font-bold text-navy">Request a Free Estimate</h2>
              <p className="mb-6 text-sm text-gray-500">
                Not sure which service you need? Select &ldquo;Not Sure Yet&rdquo; and we&apos;ll help you choose the best option.
              </p>

              <form className="space-y-5">
                {/* Name Row */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="mb-1 block text-sm font-medium text-gray-700">First Name *</label>
                    <input type="text" id="firstName" name="firstName" required className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="mb-1 block text-sm font-medium text-gray-700">Last Name *</label>
                    <input type="text" id="lastName" name="lastName" required className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold" />
                  </div>
                </div>

                {/* Email + Phone */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">Email *</label>
                    <input type="email" id="email" name="email" required className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">Phone *</label>
                    <input type="tel" id="phone" name="phone" required className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold" />
                  </div>
                </div>

                {/* Address */}
                <div>
                  <label htmlFor="address" className="mb-1 block text-sm font-medium text-gray-700">Address</label>
                  <input type="text" id="address" name="address" placeholder="Street address in Palm Beach County" className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold" />
                </div>

                {/* Service Type + Property Type */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="serviceType" className="mb-1 block text-sm font-medium text-gray-700">Type of Cleaning Service</label>
                    <select id="serviceType" name="serviceType" className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold">
                      <option value="">Select a service</option>
                      <option value="standard">Standard/Regular Cleaning</option>
                      <option value="deep">Deep Cleaning</option>
                      <option value="airbnb">Airbnb & Move-In/Move-Out</option>
                      <option value="custom">Custom Focus Cleaning (Hourly)</option>
                      <option value="not-sure">Not Sure Yet</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="propertyType" className="mb-1 block text-sm font-medium text-gray-700">Property Type</label>
                    <select id="propertyType" name="propertyType" className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold">
                      <option value="">Select type</option>
                      <option value="apartment">Apartment</option>
                      <option value="house">House</option>
                      <option value="condo">Condo</option>
                      <option value="office">Office</option>
                    </select>
                  </div>
                </div>

                {/* Bedrooms + Bathrooms */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="bedrooms" className="mb-1 block text-sm font-medium text-gray-700">Number of Bedrooms</label>
                    <select id="bedrooms" name="bedrooms" className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold">
                      <option value="">Select</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5+">5+</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="bathrooms" className="mb-1 block text-sm font-medium text-gray-700">Number of Bathrooms</label>
                    <select id="bathrooms" name="bathrooms" className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold">
                      <option value="">Select</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4+">4+</option>
                    </select>
                  </div>
                </div>

                {/* Preferred Date + Time */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="preferredDate" className="mb-1 block text-sm font-medium text-gray-700">Preferred Service Date</label>
                    <input type="date" id="preferredDate" name="preferredDate" className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold" />
                  </div>
                  <div>
                    <label htmlFor="timeWindow" className="mb-1 block text-sm font-medium text-gray-700">Preferred Time Window</label>
                    <select id="timeWindow" name="timeWindow" className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold">
                      <option value="">Select</option>
                      <option value="morning">Morning (6 AM – 12 PM)</option>
                      <option value="afternoon">Afternoon (12 PM – 5 PM)</option>
                      <option value="evening">Evening (5 PM – 10 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label htmlFor="notes" className="mb-1 block text-sm font-medium text-gray-700">Additional Notes</label>
                  <textarea id="notes" name="notes" rows={4} placeholder="Tell us about any specific areas, concerns, or special instructions..." className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold" />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-gold py-3.5 text-base font-semibold text-navy transition-all hover:bg-gold-light hover:shadow-lg sm:w-auto sm:px-10"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <div className="rounded-2xl bg-navy p-6 text-white">
              <h3 className="mb-4 font-serif text-lg font-semibold text-gold">Get in Touch</h3>
              <div className="space-y-4 text-sm">
                <a href="tel:16467646839" className="flex items-center gap-3 transition-colors hover:text-gold">
                  <svg className="h-5 w-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  +1 (646) 764-6839
                </a>
                <a href="mailto:info@thegoldingagency.com" className="flex items-center gap-3 transition-colors hover:text-gold">
                  <svg className="h-5 w-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  info@thegoldingagency.com
                </a>
                <div className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <span>West Palm Beach, FL 33401<br />Serving all of Palm Beach County</span>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="rounded-2xl bg-gray-50 p-6">
              <h3 className="mb-3 font-semibold text-navy">Business Hours</h3>
              <p className="text-sm text-gray-600">Monday – Sunday</p>
              <p className="text-sm font-semibold text-navy">6:00 AM – 10:00 PM</p>
            </div>

            {/* Quick Links */}
            <div className="rounded-2xl bg-gray-50 p-6">
              <h3 className="mb-3 font-semibold text-navy">Not sure what you need?</h3>
              <p className="mb-4 text-sm text-gray-600">
                Check out our services page to see which cleaning package is right for your home.
              </p>
              <Link href="/services" className="text-sm font-semibold text-gold hover:text-gold-light">
                View Our Services &rarr;
              </Link>
            </div>

            {/* Spam Notice */}
            <div className="rounded-2xl border border-gold/30 bg-gold/5 p-4">
              <p className="text-sm text-gray-600">
                <strong className="text-navy">Waiting for our response?</strong> Check your spam folder just in case!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
