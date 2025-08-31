"use client"

import { useState } from "react"

const items = [
  {
    q: "Do you offer once-off jobs or only regular maintenance?",
    a: "We offer both—book a one-time clean-up or set up a recurring schedule.",
  },
  {
    q: "Are you insured and police-checked?",
    a: "Yes, our team members are fully insured and police-checked for your peace of mind.",
  },
  {
    q: "Do you service commercial properties?",
    a: "Absolutely. We maintain offices, schools, strata, and more with reliable scheduling.",
  },
  {
    q: "What areas do you cover?",
    a: "We cover greater Auckland, Wellington, and Christchurch. Contact us for other areas.",
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-3xl px-4 py-12">
        <h2 className="text-balance text-2xl font-semibold text-slate-900 md:text-3xl">Frequently Asked Questions</h2>
        <div className="mt-6 divide-y divide-slate-500/20 rounded border border-slate-500/20 bg-white">
          {items.map((it, idx) => {
            const isOpen = open === idx
            return (
              <div key={it.q}>
                <button
                  className="flex w-full items-center justify-between px-4 py-3 text-left"
                  onClick={() => setOpen(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-medium text-slate-900">{it.q}</span>
                  <span className="text-slate-500">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && <p className="px-4 pb-4 text-sm text-slate-500">{it.a}</p>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
