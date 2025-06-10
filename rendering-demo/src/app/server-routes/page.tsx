import React from 'react'
import { serverSideFunction } from '@/utils/server-utils'

function ServerRoute() {

    const result = serverSideFunction()

    return (
        <div>
            <h1>Server Route {result}</h1>
        </div>
    )
}

export default ServerRoute
