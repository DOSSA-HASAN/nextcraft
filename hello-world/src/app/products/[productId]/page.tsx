import React from 'react'
import { Metadata } from 'next'
import { resolve } from 'path'

type Props = { params: Promise<{ productId: String }> }

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const id = (await params).productId
    const title = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Iphone ${id}`)
        }, 3000);
    })
    return {
        title: `Product ${title}`
    }
}

async function ProductDetail({ params }: Props) {
    const productId = (await params).productId
    return (
        <div>
            <h1>Product Details</h1>
            <p>Displaying results for product: {productId}</p>
        </div>
    )
}

export default ProductDetail
