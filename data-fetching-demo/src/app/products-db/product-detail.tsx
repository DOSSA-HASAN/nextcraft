'use client'
import React, { useOptimistic } from 'react'
import Link from 'next/link';
import { removeProduct } from '@/actions/products';

export type Product = {
    id: number;
    title: string;
    price: number;
    description: string | null;
}

function ProductsDetail({ products }: { products: Product[] }) {
    const [optimisticProducts, setOptimisticUpdates] = useOptimistic(products, (currentProducts, productId) => {
        return currentProducts.filter((product) => product.id !== productId)
    });

    const removeProductById = async (id: number) => {
        setOptimisticUpdates(id)
        await removeProduct(id)
    }

    return (
        <div>
            {
                optimisticProducts.map((product) => (
                    <div>
                        <Link href={`/products-db/${product.id}`}><h1>{product.title}</h1></Link>
                        <p>{product.price}</p>
                        <p>{product.description}</p>
                        <small>{product.id}</small>
                        <form action={removeProductById.bind(null, product.id)}>
                            <button type='submit' className='bg-red-500 text-white'>Delete</button>
                        </form>
                    </div>
                ))
            }
        </div>
    )
}

export default ProductsDetail
