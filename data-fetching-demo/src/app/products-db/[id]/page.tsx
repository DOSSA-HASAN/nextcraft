"use client"
import { getProduct } from '../../../../prisma-db'
import EditProductPageComponent from './product-edit-form'
import { Product } from '../page'
import { notFound } from 'next/navigation'

async function EditProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const product: Product | null = await getProduct(parseInt(id))

    if (!product) {
        notFound();
    }

    return (
        <EditProductPageComponent product={product} />
    )
}

export default EditProductPage
