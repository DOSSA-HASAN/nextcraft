import Link from 'next/link'
import React from 'react'

function F1() {
    return (
        <div>
            <h1>F1 Page</h1>
            <div className='bg-blue-500 rounded-md p-3 m-3 text-white hover:cursor-pointer font-bold'>
                <Link href={'/f1/f2'}>Go to F2</Link>
            </div>
            <div className='bg-blue-500 rounded-md p-3 m-3 text-white hover:cursor-pointer font-bold'>
                <Link href={'/f3'}>Go to F3</Link>
            </div>
        </div>
    )
}

export default F1
