import React from 'react'

function Card({ children }: { children: React.ReactNode }) {
    return (
        <div className='w-full hover:bg-gray-100 rounded-md p-[100px] m-[10px] shadow-md border-1 border-gray-200 flex justify-center items-center'>
            {children}
        </div>
    )
}

export default Card
