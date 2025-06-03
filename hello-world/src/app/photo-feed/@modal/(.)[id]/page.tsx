import React from 'react'
import { WonderImages } from '../../photos/wonders'
import Image from 'next/image'

async function PhotoModal({ params }: { params: Promise<{ id: string }> }) {

    const id = (await params).id
    const photo = WonderImages.find((pic) => pic.id === id)

    if (!photo) {
        return ("No photo found")
    }

    return (
        <main className='flex flex-col justify-center items-center bg-white rounded-md shadow-md'>
            <div>
                <h1>{photo?.name}</h1>
            </div>
            <Image src={photo.src} alt={photo.name} />
            <div>
                <h3>{photo.photographer}</h3>
                <h3>{photo.location}</h3>
            </div>
        </main>
    )
}

export default PhotoModal
