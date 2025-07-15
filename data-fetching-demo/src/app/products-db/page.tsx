import React from 'react'
import { getProducts } from '../../../prisma-db'

type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
}

async function ProductsDBPage() {
    const products: Product[] = await getProducts();
    return (
        <div>
            {
                products.map((product) => (
                    <div>
                        <h1>{product.title}</h1>
                        <p>{product.price}</p>
                        <p>{product.description}</p>
                        <small>{product.id}</small>
                    </div>
                ))
            }
        </div>
    )
}

export default ProductsDBPage
