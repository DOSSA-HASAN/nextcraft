import React from 'react'
import Link from 'next/link'

function page() {
    return (
        <section>
            <h1>Welcome Home</h1>
            <Link href={'/blog'}>Blog</Link>
            <Link href={'/products'}>Product List</Link>
        </section>
    )
}

export default page