import { Loader } from 'lucide-react'
import React from 'react'

function Loading() {
    return (
        <section className='flex justify-center items-center h-screen w-screen'>
            <Loader className='animate-spin'  />
        </section>
    )
}

export default Loading
