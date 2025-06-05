export const dynamic = "force-static" // ensures response is cached
export const revalidate = 10

export async function GET() {
    const time = new Date().toLocaleTimeString()
    return Response.json({ time });
}