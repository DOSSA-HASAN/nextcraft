type UsersV2 = {
    name: {
        first: string,
        last: string
    },
    id: string,
    email: string,
    createdAt: string
}

export async function GET() {

    // redirect('/api/V2/users')

    const users: UsersV2[] = [
        {
            id: "1.1.0",
            email: "user1@gmail.com",
            name: {
                first: "mo",
                last: "has"
            },
            createdAt: "2024-01-15T08:30:00z"
        },
        {
            id: "1.2.0",
            email: "user2@gmail.com",
            name: {
                first: "mo",
                last: "has"
            },
            createdAt: "2024-01-15T08:30:00z"
        },
        {
            id: "1.3.0",
            email: "user3@gmail.com",
            name: {
                first: "mo",
                last: "has"
            },
            createdAt: "2024-01-15T08:30:00z"
        },
    ]

    return Response.json(users)
}