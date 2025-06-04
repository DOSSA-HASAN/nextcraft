import { redirect } from "next/navigation"

type UsersV1 = {
    id: string,
    email: string,
    fullName: string,
    createdAt: string
}

export async function GET() {

    redirect('/api/V2/users')
    
    const users: UsersV1[] = [
        {
            id: "1.1.0",
            email: "user1@gmail.com",
            fullName: "user1",
            createdAt: "2024-01-15T08:30:00z"
        },
        {
            id: "1.2.0",
            email: "user2@gmail.com",
            fullName: "user2",
            createdAt: "2024-01-15T08:30:00z"
        },
        {
            id: "1.3.0",
            email: "user3@gmail.com",
            fullName: "user3",
            createdAt: "2024-01-15T08:30:00z"
        },
    ]

    return Response.json(users)
}