'use client'
import React, { useState } from 'react'

function Dashboard() {
    const [name, setName] = useState("")
    console.log("Dashboard client component")
    return (
        <section>
            <h1>Dashboard</h1>
            <input className='border-1 border-white' type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <p>hello {name}</p>
        </section>
    )
}

export default Dashboard
