import React from 'react'
import { Loader } from 'lucide-react'

function loading() {
    return (
        <section className='flex justify-center items-center h-screen w-screen'>
            <Loader className='animate-spin' />
        </section>
    )
}

export default loading
