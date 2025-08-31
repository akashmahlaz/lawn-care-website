import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="mt-16 w-full border-t border-slate-500/20 bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-10 md:grid-cols-3">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-green-600" aria-hidden />
            <span className="font-semibold text-slate-900">GreenEdge Lawn Care</span>
          </div>
          <p className="max-w-xs text-sm text-slate-500">
            Expert lawn care and garden maintenance for homes and businesses. Reliable, professional, and friendly
            service.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold text-slate-900">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/services" className="text-slate-500 hover:opacity-80">
                Services
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-slate-500 hover:opacity-80">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/reviews" className="text-slate-500 hover:opacity-80">
                Reviews
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-slate-500 hover:opacity-80">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold text-slate-900">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="tel:+6400000000" className="text-slate-500 hover:opacity-80">
                +64 00 000 0000
              </a>
            </li>
            <li>
              <a href="mailto:hello@greenedge.nz" className="text-slate-500 hover:opacity-80">
                hello@greenedge.nz
              </a>
            </li>
            <li className="text-slate-500">Mon–Sat, 8am–6pm</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-500/20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} GreenEdge Lawn Care. All rights reserved.
          </p>
          <div className="flex gap-3">
            <a href="#" className="text-xs text-slate-500 hover:opacity-80">
              Facebook
            </a>
            <a href="#" className="text-xs text-slate-500 hover:opacity-80">
              Instagram
            </a>
            <a href="#" className="text-xs text-slate-500 hover:opacity-80">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
