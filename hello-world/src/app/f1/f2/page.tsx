import React from 'react'
import Link from 'next/link'

function F2() {
    return (
        <div>
            <h1>F2 Page</h1>
            <div className='bg-blue-500 rounded-md p-3 m-3 text-white hover:cursor-pointer font-bold'>
                <Link href={'/f4'}>Go to F4</Link>
            </div>
        </div>
    )
}

export default F2
