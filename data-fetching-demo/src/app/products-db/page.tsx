'use client'
import React from 'react'
import { getProducts } from '../../../prisma-db'
import Link from 'next/link';

export type Product = {
    id: number;
    title: string;
    price: number;
    description: string | null;
}

async function ProductsDBPage() {
    const products: Product[] = await getProducts();
    return (
        <div>
            {
                products.map((product) => (
                    <div>
                        <Link href={`/products-db/${product.id}`}><h1>{product.title}</h1></Link>
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
