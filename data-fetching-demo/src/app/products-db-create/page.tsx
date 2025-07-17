import React from 'react'
import { addProduct } from '../../../prisma-db'
import { redirect } from 'next/navigation'

function AddProductPage() {

    async function createProduct(formData: FormData) {
        "use server"
        const title = formData.get("title") as string
        const price = formData.get("price") as string
        const description = formData.get("description") as string
        await addProduct(title, parseInt(price), description)
        redirect("/products-db")
    }

    return (
        <div>
            <form action={createProduct}>
                <input required type="text" placeholder='Product title' name='title' />
                <input required type="number" placeholder='Product price' name='price' />
                <input required type="text" placeholder='Product description' name='description' />
                <button>Add item</button>
            </form>
        </div>
    )
}

export default AddProductPage
