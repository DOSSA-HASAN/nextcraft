import React from 'react'
import { getProducts } from '../../../prisma-db'
import ProductsDetail from './product-detail';

export type Product = {
    id: number;
    title: string;
    price: number;
    description: string | null;
}

async function ProductsDBPage({ searchParams }: { searchParams: Promise<{ query: string }> }) {
    const { query } = await searchParams
    const products: Product[] = await getProducts(query);


    return (
        <ProductsDetail products={products} />
    )
}

export default ProductsDBPage
