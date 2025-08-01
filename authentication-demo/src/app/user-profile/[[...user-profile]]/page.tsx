import React from 'react'
import { UserProfile } from '@clerk/nextjs'

function UserProfilePage() {
    return (
        <div>
            <UserProfile path='/user-profile' />
        </div>
    )
}

export default UserProfilePage
