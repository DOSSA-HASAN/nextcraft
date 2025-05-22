'use client'
import React from 'react'

function Error({ error }: { error: Error }) {
    return (
        <div>
            <p>{error.message}</p>
        </div>
    )
}

export default Error
