import React from 'react'
import Form from "next/form"

function Search() {
    return (
        <Form action={"/products-db"}>
            <input type="text" name='query' placeholder='Search products' className='border-1 border-green-500' />
            <button type='submit' className='rounded-md p-3 bg-blue-500'>Search</button>
        </Form>
    )
}

export default Search
