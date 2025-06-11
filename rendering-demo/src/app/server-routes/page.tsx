import React from 'react'
import { serverSideFunction } from '@/utils/server-utils'
import ImageSlider from '@/components/imageSlider';
function ServerRoute() {

    const result = serverSideFunction()
    return (
        <>
            <ImageSlider />
        </>
    )
}

export default ServerRoute
