import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Services | GreenEdge Lawn Care",
  description:
    "Lawn mowing, garden maintenance, hedge trimming, landscaping, gutter cleaning, and commercial solutions with benefits outlined for each service.",
}

const services = [
  {
    title: "Lawn Mowing",
    desc: "Regular and one-off mowing with edging and tidy blow-down.",
    benefit: "Save time and maintain a pristine, healthy lawn.",
    img: "/lawn-mowing-stripes-wide.png",
  },
  {
    title: "Garden Clean-ups & Maintenance",
    desc: "Weeding, mulching, pruning, planting, and seasonal care.",
    benefit: "Gardens that thrive across all seasons.",
    img: "/garden-clean-up-wide.png",
  },
  {
    title: "Hedge Trimming & Plant Care",
    desc: "Shaping, pruning, and ongoing plant health checks.",
    benefit: "Sharp lines and stronger, healthier growth.",
    img: "/hedge-trimming-wide.png",
  },
  {
    title: "Landscaping & Features",
    desc: "Turfing, edging, small features, and pathway installs.",
    benefit: "Boost kerb appeal with thoughtful design upgrades.",
    img: "/lush-residential-landscaping.png",
  },
  {
    title: "Gutter Cleaning & Green Waste",
    desc: "Safe, efficient clearing and responsible waste removal.",
    benefit: "Prevent blockages and avoid costly damage.",
    img: "/gutter-cleaning.png",
  },
  {
    title: "Commercial Lawn Care",
    desc: "Reliable, scheduled maintenance for business properties.",
    benefit: "Professional presentation, week in and week out.",
    img: "/commercial-lawn-care.png",
  },
]

export default function ServicesPage() {
  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-balance text-3xl font-semibold text-slate-900 md:text-4xl">Services</h1>
        <p className="mt-2 max-w-2xl text-pretty text-slate-500">
          Flexible options for homes and businesses, from once-off tidy-ups to ongoing maintenance.
        </p>

        <div className="mt-8 space-y-10">
          {services.map((s) => (
            <article key={s.title} className="rounded border border-slate-500/20 bg-white p-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <img
                  src={s.img || "/placeholder.svg?height=320&width=640&query=service"}
                  alt={s.title}
                  className="h-auto w-full rounded border border-slate-500/10"
                />
                <div>
                  <h2 className="text-xl font-semibold text-slate-900">{s.title}</h2>
                  <p className="mt-2 text-sm text-slate-500">{s.desc}</p>
                  <p className="mt-3 text-sm font-medium text-amber-500">{s.benefit}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
