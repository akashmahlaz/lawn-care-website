import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Testimonials } from "@/components/testimonials"

export const metadata: Metadata = {
  title: "Reviews | GreenEdge Lawn Care",
  description: "Read genuine client feedback and see before-and-after results from our recent projects.",
}

export default function ReviewsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-balance text-3xl font-semibold text-slate-900 md:text-4xl">Reviews & Results</h1>
        <p className="mt-2 max-w-2xl text-pretty text-slate-500">
          Real stories from customers across NZ—homes, rentals, and commercial properties.
        </p>
      </section>
      <Testimonials />
      <SiteFooter />
    </main>
  )
}
