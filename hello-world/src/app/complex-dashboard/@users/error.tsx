'use client'
import React, { startTransition } from 'react'

function error({ error, reset }: { error: Error, reset: () => void }) {

    const handleRefresh = () => {
        startTransition(() => {
            reset()
        })
    }

    return (
        <div>
            <p>{error.message}</p>
            <button className='bg-blue-500 text-white font-bold p-3 rounded-md ml-10' onClick={handleRefresh}>Refresh</button>
        </div>
    )
}

export default error
