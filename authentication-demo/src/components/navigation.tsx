'use client'
import { SignInButton, SignOutButton, SignedIn, SignedOut } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

function Navigation() {
    return (
        <div className='flex justify-between items-center p-3 border-b-1 border-white'>
            <h1 className='text-[30px] text-white font-bold'>Auth<span className='text-blue-300'>Clerk</span></h1>
            {/* <button className='rounded-md p-2 bg-white text-black font-bold hover:cursor-pointer'>Sign In</button> */}
            <div className='flex justify-between items-center'>
                <SignedOut>
                    <SignInButton mode='modal' />
                </SignedOut>
                {/* <UserButton /> */}
                <SignedIn>
                    <SignOutButton />
                    <Link href={"/user-profile"}>Profile</Link>
                </SignedIn>
            </div>
        </div>
    )
}

export default Navigation
