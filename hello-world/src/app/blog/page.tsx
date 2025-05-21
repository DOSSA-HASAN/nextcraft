import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: { absolute: "Blog" }
}

function Blog() {
    return (
        <section>
            <h1>My blog</h1>
        </section>
    )
}

export default Blog
