'use client'
import Link from 'next/link'
import React, { use } from 'react'

function NewsArticle({ params, searchParams }: { params: Promise<{ articleId: string }>, searchParams: Promise<{ lang?: 'en' | 'es' | 'fr' }> }) {

    const { articleId } = use(params)
    const { lang = "en" } = use(searchParams)

    return (
        <section>
            <h1>News article ID: {articleId}</h1>
            <p>Reading in language: {lang}</p>

            <Link href={`/articles/${articleId}?lang=en`}>English</Link>
            <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
            <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
        </section>
    )
}

export default NewsArticle
