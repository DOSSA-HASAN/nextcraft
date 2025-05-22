'use client'
import React from 'react'
import Link from 'next/link'
import "./globals.css"

function page() {
    return (
        <section>
            <h1>Welcome Home</h1>
            <Link href={'/blog'}>Blog</Link>
            <Link href={'/products'}>Product List</Link>
            <Link href={'/articles/breaking-news-123?lang=en'}>Read in English</Link>
            <Link href={'/articles/breaking-news-123?lang=fr'}>Read in French</Link>
        </section>
    )
}

export default page