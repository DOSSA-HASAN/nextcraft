import React from 'react'
import Link from "next/link"

function InnerF2() {
    return (
        <div>
            <div className='bg-blue-500 rounded-md p-3 m-3 text-white hover:cursor-pointer font-bold'>
                <Link href={'/f5'}>Go to F5</Link>
            </div>
        </div>
    )
}

export default InnerF2
