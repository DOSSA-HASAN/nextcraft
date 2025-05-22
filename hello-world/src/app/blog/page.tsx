import { Metadata } from 'next'
import React from 'react'
import Link from 'next/link'

export const metadata: Metadata = {
    title: { absolute: "Blog" }
}

async function Blog() {
    await new Promise(resolve => {
        setTimeout(() => {
            resolve("intentional delay")
        }, 2000);
    })
    return (
        <section>
            <h1>My blog</h1>
            <Link href={'/'}>Back home</Link>
            <Link href={'/products'}>Products</Link>
        </section>
    )
}

export default Blog
