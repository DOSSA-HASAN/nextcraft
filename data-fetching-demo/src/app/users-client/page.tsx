'use client'
import React, { useState, useEffect } from 'react'

type Users = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}

function ClientDataFetching() {

    const [users, setUsers] = useState<Users[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    const fetchData = async () => {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/users")
            if (!res.ok)
                throw new Error("Failed to fetch users")
            const data = await res.json()
            setUsers(data)
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message)
            } else {
                setError("An unknown error has occured")
            }
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='grid justify-center items-center gap-10' style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 300px))'}}>
            {
                loading && <div className='h-screen w-screen bg-red-800'>Loading...</div>
            }
            {
                error && <div className='h-screen w-screen bg-red-800'>{error}</div>
            }
            {
                users.length > 0 &&

                users.map((user) => (
                    <div className='w-full border-1 border-gray-400 shadow-md rounded-md p-4'>
                        <p>{user.id}</p>
                        <p>{user.name}</p>
                        <p>{user.username}</p>
                        <p>{user.email}</p>
                        <p>{user.phone}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default ClientDataFetching
