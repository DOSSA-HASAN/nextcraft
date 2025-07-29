"use client"
import React, { useActionState } from 'react'
import { FormState, editProduct } from '@/actions/products'
import { Product } from '../page'

function EditProductPageComponent({product}:{product: Product}) {
    
    const editProductWithId = editProduct.bind(null, product.id)
    const initialState: FormState = { errors: {} }
    const [state, formAction, isPending] = useActionState(editProductWithId, initialState)
    return (
        <div>
            <form action={formAction}>
                <div>
                    <input type="text" placeholder='Product title' name='title' defaultValue={product.title}/>
                    {
                        state.errors.title && <p className='text-red-500'>{state.errors.title}</p>
                    }
                </div>
                <div>
                    <input type="number" placeholder='Product price' name='price' defaultValue={product.price}/>
                    {
                        state.errors.price && <p className='text-red-500'>{state.errors.price}</p>
                    }
                </div>
                <div>
                    <input type="text" placeholder='Product description' name='description' defaultValue={product.description ?? ""} />
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

export default EditProductPageComponent
