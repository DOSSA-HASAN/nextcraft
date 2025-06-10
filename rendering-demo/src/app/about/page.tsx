import React from 'react'

function About() {
    console.log("About server component")
    return (
        <section>
            <h1>About page</h1>
            <p>{new Date().toLocaleTimeString()}</p>
        </section>
    )
}

export default About
