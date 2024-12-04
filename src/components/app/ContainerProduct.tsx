'use client'
import { useState, useEffect } from 'react'
import { ListProducts, NotProducts } from "@/components"
import { getAllProducts } from '@/utils'


export const ContainerProduct = () => {
    const [hasProducts, setHasProduct] = useState(false)

    useEffect(() => {
        const fetchProducts = async () => {
            const products = await getAllProducts()
            setHasProduct(products.length > 0)
        }
        fetchProducts()
    }, [])

    return (
        <div className='h-full flex flex-col justify-center items-center
        '>
            {hasProducts ? <ListProducts /> : <NotProducts />}
        </div>
    )
}