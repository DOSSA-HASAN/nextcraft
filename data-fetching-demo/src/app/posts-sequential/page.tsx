import React, { Suspense } from 'react'
import AuthorComponent from './author';

type Post = {
    userId: number;
    id: number;
    title: string,
    body: string
}

async function PostSequential() {

    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts: Post[] = await res.json()

    const filteredPost = posts.filter((post) => post.id % 10 === 1)

    return (
        <div>
            <h1>Blog posts</h1>
            <div>
                {
                    filteredPost.map((post) => (
                        <div key={post.id}>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                            <Suspense fallback={<div>Loading authors...</div>}>
                                <AuthorComponent userId={post.userId} />
                            </Suspense>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}


export default PostSequential
