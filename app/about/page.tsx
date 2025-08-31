import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "About Us | GreenEdge Lawn Care",
  description:
    "Our story, mission, values, and team standards. Learn about franchise opportunities and why customers trust us.",
}

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-balance text-3xl font-semibold text-slate-900 md:text-4xl">About Us</h1>
        <div className="mt-4 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <p className="text-pretty text-slate-500">
              For years, we’ve helped homeowners and businesses keep their outdoor spaces pristine. Our mission is
              simple: reliable, friendly service with professional results—every time.
            </p>
            <ul className="mt-4 grid grid-cols-1 gap-2 text-sm text-slate-500">
              <li>• Qualified team members</li>
              <li>• Police-checked and insured</li>
              <li>• Respectful, on-time, tidy work</li>
              <li>• Satisfaction guarantee</li>
            </ul>
          </div>
          <div className="rounded border border-slate-500/20 p-4">
            <h2 className="text-lg font-semibold text-slate-900">Our Values</h2>
            <p className="mt-2 text-sm text-slate-500">
              Reliability, professionalism, and genuine care for our customers’ properties.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded border border-slate-500/20 p-3">
                <p className="text-sm font-medium text-slate-900">Reliability</p>
                <p className="text-xs text-slate-500">We show up on time and get it done right.</p>
              </div>
              <div className="rounded border border-slate-500/20 p-3">
                <p className="text-sm font-medium text-slate-900">Professionalism</p>
                <p className="text-xs text-slate-500">Clear communication and tidy work sites.</p>
              </div>
              <div className="rounded border border-slate-500/20 p-3">
                <p className="text-sm font-medium text-slate-900">Customer First</p>
                <p className="text-xs text-slate-500">Respectful service and a satisfaction focus.</p>
              </div>
              <div className="rounded border border-slate-500/20 p-3">
                <p className="text-sm font-medium text-slate-900">Safety</p>
                <p className="text-xs text-slate-500">Fully insured and safety-conscious.</p>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-10 rounded border border-slate-500/20 p-4">
          <h2 className="text-lg font-semibold text-slate-900">Franchise Opportunities</h2>
          <p className="mt-2 text-sm text-slate-500">
            Build your own business with our proven systems, training, and support. We provide brand, marketing, and
            operations guidance so you can focus on service.
          </p>
          <ul className="mt-3 grid grid-cols-1 gap-2 text-sm text-slate-500">
            <li>• Training and onboarding</li>
            <li>• Lead generation and marketing</li>
            <li>• Equipment guidance and safety</li>
          </ul>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <a
              href="/contact"
              className="rounded bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
            >
              Apply Now
            </a>
            <a
              href="mailto:franchise@greenedge.nz"
              className="rounded border border-slate-500/30 px-4 py-2 text-sm font-semibold text-slate-900 hover:opacity-80"
            >
              Email Questions
            </a>
          </div>
        </section>
      </section>
      <SiteFooter />
    </main>
  )
}
