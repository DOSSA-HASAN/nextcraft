
import { resolve } from 'path';
import React from 'react'

type Author = {
    id: number;
    name: string;
}

export async function AuthorComponent({ userId }: { userId: number }) {
    await new Promise((resolve) => setTimeout(resolve, 4000))
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    const user: Author = await res.json()
    return (
        <div>
            <p>Written by: {user.name}</p>
        </div>
    )
}

export default AuthorComponent
