'use client'
import React, { useEffect } from 'react'

function ErrorPage({ error }: { error: Error }) {
    useEffect(() => {
        console.log(`${error}`)
    }, [error])
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='text-2xl text-red-500'>
                <p>Error fetching users data</p>
            </div>
        </div>
    )
}

export default ErrorPage
