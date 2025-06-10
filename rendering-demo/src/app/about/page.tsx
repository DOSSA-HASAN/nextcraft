import React from 'react'
import { cookies } from 'next/headers'

async function About() {
    console.log("About server component")

    const cookieStore = await cookies()
    const theme = cookieStore.get("theme")
    console.log(theme)

    return (
        <section>
            <h1>About page</h1>
            <p>{new Date().toLocaleTimeString()}</p>
        </section>
    )
}

export default About
