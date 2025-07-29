"use client"
import React, { useActionState } from 'react'
import { FormState, createProduct } from '@/actions/products'

function AddProductPage() {

    const initialState: FormState = { errors: {} }
    const [state, formAction, isPending] = useActionState(createProduct, initialState)

    return (
        <div>
            <form action={formAction}>
                <div>
                    <input type="text" placeholder='Product title' name='title' />
                    {
                        state.errors.title && <p className='text-red-500'>{state.errors.title}</p>
                    }
                </div>
                <div>
                    <input type="number" placeholder='Product price' name='price' />
                    {
                        state.errors.price && <p className='text-red-500'>{state.errors.price}</p>
                    }
                </div>
                <div>
                    <input type="text" placeholder='Product description' name='description' />
                    {
                        state.errors.description && <p className='text-red-500'>{state.errors.description}</p>
                    }
                </div>
                <button type='submit' disabled={isPending} className={`${isPending ? 'bg-red-500' : 'bg-green-500'}`}>
                    Submit
                </button>
                {/* <Submit /> */}
            </form>
        </div>
    )
}

export default AddProductPage
