'use client'
import React, { useState } from 'react'
import ClientComponentTwo from './client-component-two'
import ServerComponentOne from './serverComponentOne'

function ClientComponentOne({ children }: { children: React.ReactNode }) {
    const [name, setName] = useState("batman")
    return (
        <div>
            <h1>Client Component 1 {name}</h1>
            {/* <ServerComponentOne /> */}
            {children}
        </div>
    )
}

export default ClientComponentOne
