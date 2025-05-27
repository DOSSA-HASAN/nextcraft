import Card from '@/app/components/card'
import Link from 'next/link'
import React from 'react'

function ArchivedNotifications() {
    return (
        <div className='flex flex-1'>
            <>
                <div>
                    Archived Notifications
                </div>
                <div className='bg-blue-500 rounded-md p-3 m-3 text-white hover:cursor-pointer font-bold'>
                    <Link href={"/complex-dashboard"}>Default Notifications</Link>
                </div>

            </>
        </div>
    )
}

export default ArchivedNotifications
