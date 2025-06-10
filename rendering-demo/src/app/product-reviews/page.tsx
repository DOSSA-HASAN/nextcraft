import React, { Suspense } from 'react'
import Product from '@/components/product'
import Review from '@/components/review'

function ProductReviews() {
    return (
        <div>
            <h1>Product Reviews</h1>
            <Suspense fallback={<p>Loading Product Details...</p>}>
                <Product />
            </Suspense>
            <Suspense fallback={<p>Loading Product Reviews...</p>}>
                <Review />
            </Suspense>
        </div>
    )
}

export default ProductReviews
