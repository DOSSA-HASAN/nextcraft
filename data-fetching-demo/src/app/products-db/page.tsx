import React from 'react'
import { getProducts } from '../../../prisma-db'
import ProductsDetail from './product-detail';

export type Product = {
    id: number;
    title: string;
    price: number;
    description: string | null;
}

async function ProductsDBPage() {
    const products: Product[] = await getProducts();


    return (
        <ProductsDetail products={products} />
    )
}

export default ProductsDBPage
