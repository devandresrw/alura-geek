'use client'
import { useEffect } from 'react'
import { ListProducts, NotProducts } from "@/components"
import { useProductStore } from '@/stores'

export const ContainerProduct = () => {
    const { products, refreshProducts } = useProductStore()

    useEffect(() => {
        refreshProducts()
    }, [])

    return (
        <div className='h-full flex flex-col justify-center items-center
        '>
            {products.length > 0 ? <ListProducts /> : <NotProducts />}
        </div>
    )
}