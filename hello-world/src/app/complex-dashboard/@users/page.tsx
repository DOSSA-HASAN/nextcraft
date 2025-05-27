'use client'
import Card from '@/app/components/card'
import React, { useState } from 'react'

function UserAnalytics() {
    const [error, setError] = useState(false)
    if(error){
        throw new Error("Simulated error.")
    }
    return (
        <>
            <h1>USERS</h1>
            <button className='bg-red-500 text-white font-bold p-3 rounded-md ml-10' onClick={() => setError(true)}>Simulate Error</button>
        </>
    )
}

export default UserAnalytics
