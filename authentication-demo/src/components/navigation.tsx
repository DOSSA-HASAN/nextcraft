import { SignInButton, SignOutButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

function Navigation() {
    return (
        <div className='flex justify-between items-center p-3 border-b-1 border-white'>
            <h1 className='text-[30px] text-white font-bold'>Auth<span className='text-blue-300'>Clerk</span></h1>
            {/* <button className='rounded-md p-2 bg-white text-black font-bold hover:cursor-pointer'>Sign In</button> */}
            <div className='flex jusitfy-between items-center'>
                <SignInButton mode='modal' />
                <SignOutButton />
                {/* <UserButton /> */}
                <Link href={"/user-profile"}>Profile</Link>
            </div>
        </div>
    )
}

export default Navigation
