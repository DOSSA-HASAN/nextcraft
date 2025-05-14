"use client"
import { usePathname } from 'next/navigation'
import React from 'react'

function NotFound() {

    const pathName = usePathname()
    const productIdPathName = pathName.split('/')[2]
    const reviewIdPathName = pathName.split('/')[4]

    return (
        <div>
            <h1>404 not found</h1>
            <h1>the review with id {reviewIdPathName} for product id {productIdPathName} was not found</h1>
        </div>
    )
}

export default NotFound
