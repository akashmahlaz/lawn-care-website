import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact | GreenEdge Lawn Care",
  description:
    "Get a fast, friendly quote. Call, email, or send a message. View our service coverage areas across New Zealand.",
}

const areas = ["Auckland", "North Shore", "Wellington", "Lower Hutt", "Christchurch", "Hamilton", "Tauranga"]

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-balance text-3xl font-semibold text-slate-900 md:text-4xl">Contact Us</h1>
        <p className="mt-2 max-w-2xl text-pretty text-slate-500">
          Send an enquiry for a fast quote, or call us directly. We’re here to help.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <ContactForm />
          </div>
          <aside className="space-y-4">
            <div className="rounded border border-slate-500/20 p-4">
              <h2 className="text-lg font-semibold text-slate-900">Quick Contact</h2>
              <ul className="mt-2 space-y-2 text-sm">
                <li>
                  <a href="tel:+6400000000" className="text-slate-500 hover:opacity-80">
                    Phone: +64 00 000 0000
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@greenedge.nz" className="text-slate-500 hover:opacity-80">
                    Email: hello@greenedge.nz
                  </a>
                </li>
                <li className="text-slate-500">Hours: Mon–Sat, 8am–6pm</li>
              </ul>
            </div>
            <div className="rounded border border-slate-500/20 p-4">
              <h2 className="text-lg font-semibold text-slate-900">Coverage Areas</h2>
              <ul className="mt-2 grid grid-cols-2 gap-2 text-sm text-slate-500">
                {areas.map((a) => (
                  <li key={a}>• {a}</li>
                ))}
              </ul>
              <img
                src="/coverage-map-new-zealand.png"
                alt="Coverage map of New Zealand"
                className="mt-3 h-auto w-full rounded border border-slate-500/10"
              />
            </div>
          </aside>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
