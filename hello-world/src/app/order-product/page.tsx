'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

function OrderProduct() {

    const router = useRouter()

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        console.log("Proceeding to checkout")
        router.push('/')
    }

    return (
        <section>
            <h1>Order Product</h1>
            <button onClick={handleClick}>Check out</button>
        </section>
    )
}

export default OrderProduct
