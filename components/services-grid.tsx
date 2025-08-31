import Image from "next/image"

const services = [
  {
    title: "Lawn Mowing",
    description: "Regular or one-off mowing for a clean, consistent finish.",
    benefit: "Save time and keep your lawn looking immaculate.",
    img: "/lawn-mowing-stripes.png",
  },
  {
    title: "Garden Maintenance",
    description: "Weeding, mulching, planting, and seasonal tidy-ups.",
    benefit: "Healthy gardens that flourish year-round.",
    img: "/garden-maintenance-tidy-beds.png",
  },
  {
    title: "Hedge Trimming",
    description: "Shaping, pruning, and careful plant care.",
    benefit: "Crisp lines and healthier hedges and shrubs.",
    img: "/hedge-trimming.png",
  },
  {
    title: "Landscaping",
    description: "Feature installation, edging, turfing, and paths.",
    benefit: "Boost kerb appeal with thoughtful design.",
    img: "/small-garden-landscaping-features.png",
  },
  {
    title: "Gutter Cleaning",
    description: "Prevent blockages with safe, efficient clearing.",
    benefit: "Avoid water damage and protect your home.",
    img: "/gutter-cleaning.png",
  },
  {
    title: "Commercial Care",
    description: "Reliable service for offices, schools, and facilities.",
    benefit: "Consistent presentation for your property.",
    img: "/commercial-lawn-care.png",
  },
]

export function ServicesGrid() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-balance text-2xl font-semibold text-slate-900 md:text-3xl">Our Services</h2>
        <p className="mt-2 max-w-2xl text-pretty text-slate-500">
          Everything you need to keep your outdoor spaces neat, healthy, and inviting.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article key={s.title} className="rounded border border-slate-500/20 bg-white p-4">
              <div className="relative mb-3 h-40 w-full overflow-hidden rounded border border-slate-500/10">
                <Image
                  src={s.img || "/placeholder.svg?height=160&width=320&query=service-image"}
                  alt={s.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-1 text-sm text-slate-500">{s.description}</p>
              <p className="mt-2 text-sm font-medium text-amber-500">{s.benefit}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
