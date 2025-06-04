import { type NextRequest } from "next/server"
import { headers } from "next/headers"

export async function GET(req: NextRequest) {
    // const reqHeaders = new Headers(req.headers)
    // console.log(reqHeaders.get("Authorization"))

    const headerList = await headers();
    console.log(headerList.get("Authorization"))

    return new Response("<h1>Profile page data</h1>", {
        headers: { "Content-Type": "text/html" }
    })
}