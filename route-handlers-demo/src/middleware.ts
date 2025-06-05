import { NextResponse, type NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    // return NextResponse.redirect(new URL("/", req.url))
    if(req.nextUrl.pathname === "/profile"){
        return NextResponse.redirect(new URL("/hello", req.url))
    }
}

// export const config = {
//     matcher: "/profile"
// }