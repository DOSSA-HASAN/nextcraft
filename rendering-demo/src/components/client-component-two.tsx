import React, { useState } from 'react'

function ClientComponentTwo() {
    const [name, setName] = useState("batman")
    return (
        <div>
            <h1>Client Component 2 {name}</h1>
        </div>
    )
}

export default ClientComponentTwo
