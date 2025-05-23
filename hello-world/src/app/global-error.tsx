'use client'
import React from 'react'

function GlobalError() {
    return (
        <section>
            <h1>Something went wrong</h1>
            <button className='p-3 bg-blue-500 rounded-md text-white' onClick={() => window.location.reload()}>refresh</button>
        </section>
    )
}

export default GlobalError
