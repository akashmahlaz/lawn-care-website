export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}))
  console.log("[v0] Contact submission:", body)
  return Response.json({ ok: true })
}
