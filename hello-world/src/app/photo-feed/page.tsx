import React from 'react'
import { WonderImages } from './photos/wonders'
import Image from 'next/image'
import Link from 'next/link'

function PhotoGallery() {
    return (
        <section className='grid justify-center items-center gap-3 border-1 grid-cols-[repeat(auto-fit,minmax(250px,300px))]'>
            {
                WonderImages.map((image) => (
                    <Link href={`/photo-feed/${image.id}`} className='hover:cursor-pointer rounded-md w-full h-[200px] shadow-md'>
                        <Image  className='hover:scale-105 transition-all duration-[300ms] rounded-md w-full h-full' key={image.id} src={image.src} alt={image.location} />
                    </Link>
                ))
            }
        </section>
    )
}

export default PhotoGallery
