import React from 'react'

type Users = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}

async function ServerSideDataFetching() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const users: Users[] = await res.json()

    return (
        <div className='grid justify-center items-center gap-10' style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 300px))' }}>
            {
                users.length > 0 &&

                users.map((user) => (
                    <div key={user.id} className='bg-white text-black w-full border-1 border-gray-400 shadow-md rounded-md p-4'>
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

export default ServerSideDataFetching
