import { resolve } from 'path';
import React from 'react'

type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

type Album = {
    userId: number;
    id: number;
    title: string;
}

async function getUserPost(userId: string) {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    return res.json()
}

async function getUserAlbums(userId: string) {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    const res = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
    return res.json()
}

async function UserProfile({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const postsData = getUserPost(id)
    const albumsData = getUserAlbums(id)
    const [posts, albums] = await Promise.all([postsData, albumsData])
    return (
        <div>
            <h1>User Profile</h1>
            <div>
                {
                    posts.map((post: Post) => (
                        <div>
                            <p>{post.title}</p>
                            <p>{post.body}</p>
                        </div>
                    ))
                }
            </div>
            <div>
                {
                    albums.map((album: Album) => (
                        <div>
                            <p>{album.id}</p>
                            <p>{album.title}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default UserProfile
