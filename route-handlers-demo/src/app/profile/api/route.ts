import { type NextRequest } from "next/server"
import { headers, cookies } from "next/headers"

export async function GET(req: NextRequest) {
    // const reqHeaders = new Headers(req.headers)
    // console.log(reqHeaders.get("Authorization"))

    const headerList = await headers();
    console.log(headerList.get("Authorization"))
    
    // const theme = req.cookies.get("theme")
    // console.log(theme)

    const cookieStore = await cookies();
    cookieStore.set("resultsPerPage", "20")
    console.log(cookieStore.get("resultsPerPage"))

    return new Response("<h1>Profile page data</h1>", {
        headers: { 
            "Content-Type": "text/html",
            "Set-Cookie": "theme=dark"
         },
    })
}