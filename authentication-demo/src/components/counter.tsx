'use client'
import React, { useState } from 'react'
import { useAuth, useUser } from '@clerk/nextjs'

function Counter() {
    const [count, setCount] = useState(0)
    // const { isLoaded, userId, sessionId, getToken } = useAuth()
    const { isLoaded, user, isSignedIn } = useUser()
    if(!isLoaded || !isSignedIn){
        return null
    }
    return (
        <div className='flex justify-between items-center w-full'>
            <p>{count}</p>
            <button className='bg-blue-500 text-black rounded-md p-2 text-center font-bold' onClick={() => setCount((prev) => prev + 1)}>Increment</button>
        </div>
    )
}

export default Counter
