"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
]

export function SiteHeader() {
  const pathname = usePathname()
  return (
    <header className="w-full border-b border-slate-500/20 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2" aria-label="GreenEdge Lawn Care - Home">
          <div className="h-8 w-8 rounded bg-green-600" aria-hidden />
          <span className="font-semibold text-slate-900">GreenEdge Lawn Care</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-opacity hover:opacity-80",
                pathname === item.href ? "text-slate-900" : "text-slate-500",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:+6400000000"
            className="hidden text-sm font-medium text-slate-900 md:inline"
            aria-label="Call us: +64 00 000 0000"
          >
            +64 00 000 0000
          </a>
          <Link
            href="/contact"
            className="rounded bg-green-600 px-3 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Request a Quote
          </Link>
        </div>
      </div>

      <div className="block border-t border-slate-500/10 md:hidden">
        <nav
          className="mx-auto flex max-w-6xl items-center gap-4 overflow-x-auto px-4 py-2"
          aria-label="Mobile navigation"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "whitespace-nowrap rounded px-2 py-1 text-sm",
                pathname === item.href ? "bg-green-600 text-white" : "text-slate-500",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
