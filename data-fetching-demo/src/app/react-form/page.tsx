'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

function CreateProduct() {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [loading, setLoading] = useState(false)

    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        console.log(loading)


        try {
            const res = await fetch("/react-form/api", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ title, price, description })
            })
            console.log(res)
            if (res.ok) {
                router.push("/products-db")
            }
        } catch (error) {
            if (error instanceof Error) {
                console.log(`Error: ${error.message}`)
            }
        } finally {
            setLoading(false)
        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input required type="text" value={title} placeholder='Product title' onChange={(e) => setTitle(e.target.value)} />
                <input required type="number" value={price} placeholder='Product price' onChange={(e) => setPrice(e.target.value)} />
                <input required type="text" value={description} placeholder='Product description' onChange={(e) => setDescription(e.target.value)} />
                <button disabled={loading}>Add item</button>
            </form>
        </div>
    )
}

export default CreateProduct
