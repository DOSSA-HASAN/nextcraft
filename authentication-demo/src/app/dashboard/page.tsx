import { auth, currentUser } from '@clerk/nextjs/server'
import React from 'react'

async function DashboardPage() {
    const authObj = await auth()
    const UserObj = await currentUser()
    console.log(authObj, UserObj)
    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    )
}

export default DashboardPage
