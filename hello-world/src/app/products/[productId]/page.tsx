import React from 'react'

async function ProductDetail({ params }: { params: Promise<{ productId: string }> }) {
    const productId = (await params).productId
    return (
        <div>
            <h1>Product Details</h1>
            <p>Displaying results for product: {productId}</p>
        </div>
    )
}

export default ProductDetail
