import ClientComponentOne from '@/components/client-component-one'
import ServerComponentOne from '@/components/serverComponentOne'
import React from 'react'

function InterleavingPage() {
    return (
        <div>
            <h1>Interleaving Page</h1>
            <ClientComponentOne>
                <ServerComponentOne />
            </ClientComponentOne>
        </div>
    )
}

export default InterleavingPage
