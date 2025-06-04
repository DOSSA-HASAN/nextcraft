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

export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const id = (await params).id
        const body = await req.json()
        const { text } = body

        const index = comments.findIndex((comment) => comment.id === parseInt(id))
        comments[index].text = text

        return Response.json(comments[index])

    } catch (error) {
        if (error instanceof Error)
            console.log(error.message)
        console.log("An unknown error has occurred")
    }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id
    const filteredArray = comments.filter((com) => com.id != parseInt(id))
    return Response.json(filteredArray)
}