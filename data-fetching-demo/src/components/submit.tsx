"use client"
import React from 'react'
import { useFormStatus } from 'react-dom'

function Submit() {
    const { pending } = useFormStatus()
    return (
        <button type='submit' disabled={pending} className={`${pending ? 'bg-red-500' : 'bg-green-500'}`}>
            Submit
        </button>
    )

}

export default Submit
