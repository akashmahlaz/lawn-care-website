"use client"

import type React from "react"

import { useState } from "react"

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const payload = Object.fromEntries(formData.entries())
    try {
      setStatus("loading")
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      const json = await res.json()
      setStatus(json.ok ? "success" : "error")
      if (json.ok) form.reset()
    } catch {
      setStatus("error")
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded border border-slate-500/20 bg-white p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-900" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="w-full rounded border border-slate-500/30 px-3 py-2 text-sm text-slate-900 placeholder-slate-500"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-900" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded border border-slate-500/30 px-3 py-2 text-sm text-slate-900 placeholder-slate-500"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-900" htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            className="w-full rounded border border-slate-500/30 px-3 py-2 text-sm text-slate-900 placeholder-slate-500"
            placeholder="+64 ..."
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-900" htmlFor="service">
            Service
          </label>
          <select
            id="service"
            name="service"
            className="w-full rounded border border-slate-500/30 bg-white px-3 py-2 text-sm text-slate-900"
          >
            <option>Lawn Mowing</option>
            <option>Garden Maintenance</option>
            <option>Hedge Trimming</option>
            <option>Landscaping</option>
            <option>Gutter Cleaning</option>
            <option>Commercial Care</option>
          </select>
        </div>
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-slate-900" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full rounded border border-slate-500/30 px-3 py-2 text-sm text-slate-900 placeholder-slate-500"
          placeholder="Tell us about your property and what you need help with."
        />
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded bg-green-600 px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-60"
        >
          {status === "loading" ? "Sending..." : "Send Request"}
        </button>
        <a
          href="tel:+6400000000"
          className="rounded border border-slate-500/30 px-5 py-2.5 text-center text-sm font-semibold text-slate-900 hover:opacity-80"
        >
          Call: +64 00 000 0000
        </a>
      </div>
      {status === "success" && (
        <p className="text-sm font-medium text-green-600">Thanks! We’ll get back to you shortly.</p>
      )}
      {status === "error" && (
        <p className="text-sm font-medium text-amber-500">Something went wrong. Please try again.</p>
      )}
    </form>
  )
}
