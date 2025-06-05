import { NextResponse, type NextRequest } from "next/server";

export function middleware(req: NextRequest) {

    const response = NextResponse.next();
    const theme = response.cookies.get("theme")
    if(!theme){
        response.cookies.set("theme", "idkbro")
    }

    return response;

    // return NextResponse.redirect(new URL("/", req.url))
    // if(req.nextUrl.pathname === "/profile"){
    //     return NextResponse.rewrite(new URL("/hello", req.url))
    // }
}

// export const config = {
//     matcher: "/profile"
// }