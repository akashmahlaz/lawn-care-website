import Link from "next/link"

export function Hero() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 md:grid-cols-2 md:py-20">
        <div className="space-y-5">
          <h1 className="text-balance text-3xl font-semibold text-slate-900 md:text-5xl">
            Expert Lawn Care and Garden Maintenance
          </h1>
          <p className="text-pretty text-slate-500 md:text-lg">
            From lawn mowing and hedge trimming to full garden clean-ups and landscaping—reliable, professional service
            with a satisfaction guarantee.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded bg-green-600 px-5 py-3 text-center text-sm font-semibold text-white hover:opacity-90"
            >
              Request a Quote
            </Link>
            <a
              href="tel:+6400000000"
              className="rounded border border-slate-500/30 px-5 py-3 text-center text-sm font-semibold text-slate-900 hover:opacity-80"
            >
              Call Us: +64 00 000 0000
            </a>
          </div>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-slate-500 md:max-w-md">
            <li>• Lawn mowing</li>
            <li>• Garden maintenance</li>
            <li>• Hedge trimming</li>
            <li>• Gutter cleaning</li>
            <li>• Landscaping</li>
            <li>• Commercial care</li>
          </ul>
        </div>
        <div className="relative">
          <img
            src="/lush-lawn-with-tidy-hedges.png"
            alt="A freshly mowed lawn with neatly trimmed hedges"
            className="h-auto w-full rounded border border-slate-500/20"
          />
        </div>
      </div>
    </section>
  )
}
