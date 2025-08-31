import Image from "next/image"

const testimonials = [
  {
    name: "Sophie T.",
    location: "Auckland",
    quote: "They transformed our overgrown yard in one afternoon. Fast, friendly, and professional.",
    before: "/overgrown-lawn-before.png",
    after: "/tidy-lawn-after.png",
  },
  {
    name: "Daniel K.",
    location: "Wellington",
    quote: "Regular mowing and hedge trimming keeps our property looking great. Highly recommend.",
    before: "/messy-hedge-before.png",
    after: "/trimmed-hedge-after.png",
  },
  {
    name: "Priya R.",
    location: "Christchurch",
    quote: "Responsive and reliable—exactly what we needed for our rental properties.",
    before: "/cluttered-garden-before.png",
    after: "/clean-garden-after.png",
  },
]

export function Testimonials() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-balance text-2xl font-semibold text-slate-900 md:text-3xl">What Our Clients Say</h2>
        <p className="mt-2 max-w-2xl text-pretty text-slate-500">
          Genuine feedback from homeowners and businesses we serve.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded border border-slate-500/20 bg-white p-4">
              <blockquote className="text-sm text-slate-500">“{t.quote}”</blockquote>
              <figcaption className="mt-2 text-sm font-medium text-slate-900">
                {t.name} • {t.location}
              </figcaption>
              <div className="mt-3 grid grid-cols-2 gap-2">
                <div>
                  <div className="relative h-24 w-full overflow-hidden rounded border border-slate-500/10">
                    <Image
                      src={t.before || "/placeholder.svg?height=96&width=160&query=before-image"}
                      alt="Before"
                      fill
                      sizes="160px"
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-1 text-xs text-slate-500">Before</p>
                </div>
                <div>
                  <div className="relative h-24 w-full overflow-hidden rounded border border-slate-500/10">
                    <Image
                      src={t.after || "/placeholder.svg?height=96&width=160&query=after-image"}
                      alt="After"
                      fill
                      sizes="160px"
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-1 text-xs text-slate-500">After</p>
                </div>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
