"use client"
import "./globals.css"
import React, { useState } from "react"

interface WrapperProps {
    children: React.ReactNode
}

const ErrorSimulator = ({ message = "An error ocurred" }: { message?: string }) => {
    const [error, setError] = useState(false)

    if (error)
        throw new Error(message)

    return (
        <button title="Simulate an error" className="border-1 bg-blue-500 rounded-md text-white p-3" onClick={() => setError(true)}>Simulate error</button>
    )
}

export const ErrorWrapper = ({ children }: WrapperProps) => {
    return (
        <div>
            <ErrorSimulator message="simulated error in root layout" />
            <div>
                {children}
            </div>
        </div>
    )
}