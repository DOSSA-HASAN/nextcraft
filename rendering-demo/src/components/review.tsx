import React from 'react'

async function Review() {

    await new Promise((resolve) => setTimeout(resolve, 4000))

    return (
        <div>
            <h1>Reviews</h1>
        </div>
    )
}

export default Review
