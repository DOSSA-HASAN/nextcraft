import { comments } from "../data";

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {

        const id = (await params).id
        const comment = comments.find((com) => com.id === parseInt(id))

        return Response.json(comment)


    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message)
        } else {
            console.log("An unknown error occurred")
        }
    }
}