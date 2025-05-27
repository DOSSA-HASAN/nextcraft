import Card from '@/app/components/card'
import React from 'react'
import Link from 'next/link'

function Notifications() {
  return (
    <>
      <h1>NOTIFICATIONS</h1>
      <div className='bg-blue-500 rounded-md p-3 m-3 text-white hover:cursor-pointer font-bold'>
        <Link href={"/complex-dashboard/archived"}>Archived</Link>
      </div>
    </>
  )
}

export default Notifications
