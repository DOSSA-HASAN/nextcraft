import React from 'react'

async function Docs({ params }: { params: Promise<{ slug: string[] }> }) {

    const slug = (await params).slug

    if (slug?.length === 2) {
        return (
            <h1>Viewing feature {slug[0]} for concept {slug[1]}</h1>
        )
    } else if (slug?.length === 1) {
        return (
            <h1>Viewing feature {slug[0]}</h1>
        )
    }

    return (
        <div>
            <h1>Documentation</h1>
        </div>
    )
}

export default Docs
