import React from 'react'
import NotFound from './not-found'
import { redirect } from 'next/navigation'

export const genInt = (count: number) => {
    return Math.floor(Math.random() * count)
}

async function Review({ params }: { params: Promise<{ productId: string, reviewId: string }> }) {

    const { productId, reviewId } = await params
    if (parseInt(reviewId) > 1000) {
        redirect('/')
        // return <NotFound />
    }
    let number = genInt(2)
    if(number < 1){
        throw Error("intentional error");
    }

    return (
        <div>
            <h1>Product Id: {productId}</h1>
            <h1>Review Id: {reviewId}</h1>
        </div>
    )
}

export default Review
