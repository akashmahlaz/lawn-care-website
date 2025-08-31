import type { Metadata } from "next"
import { Hero } from "@/components/hero"
import { ServicesGrid } from "@/components/services-grid"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "GreenEdge Lawn Care | Expert Lawn Care and Garden Maintenance",
  description:
    "Professional lawn mowing, garden maintenance, hedge trimming, landscaping, gutter cleaning, and commercial lawn care. Fast, friendly, and reliable service.",
}

export default function HomePage() {
  return (
    <main>
      <SiteHeader />
      <Hero />
      <ServicesGrid />
      <Testimonials />
      <FAQ />
      <SiteFooter />
    </main>
  )
}
