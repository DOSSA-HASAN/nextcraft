import React from 'react'
import { redirect } from 'next/navigation'
import { genInt } from '@/app/_lib/generateRandomInteger'


async function Review({ params }: { params: Promise<{ productId: string, reviewId: string }> }) {

    const { productId, reviewId } = await params
    if (parseInt(reviewId) > 1000) {
        redirect('/')
        // return <NotFound />
    }
    const number = genInt(2)
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
