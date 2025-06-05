import { comments } from "./data"
import { NextRequest } from "next/server"

export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams
    const query = searchParams.get("query")
    const filteredComments = query ? comments.filter((comment) => comment.text.includes(query)) : comments
    return Response.json(filteredComments)
}   

export async function POST(_req: Request) {
    const comment = await _req.json()
    const newComment = {
        id: comments.length + 1,
        text: comment.text
    }
    comments.push(newComment)
    return new Response(JSON.stringify(newComment), {
        headers: { "Content-Type": "application/json" },
        status: 201

    })
}