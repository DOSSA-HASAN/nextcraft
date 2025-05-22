'use client'
import React, { startTransition } from 'react'
import { useRouter } from 'next/navigation';

function Error({ error, reset }: { error: Error; reset: () => void }) {
    const router = useRouter()
    const reload = () => {
        startTransition(() => {
            router.refresh()
            reset()
        })
    }
    return (
        <div>
            <p>{error.message}</p>
            <button className='border-1' onClick={reload}>Try again</button>
        </div>
    )
}

export default Error
