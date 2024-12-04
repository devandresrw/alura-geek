'use client'
import { useState, useEffect } from 'react'
import { CardProduct } from '@/components'
import { getAllProducts, deleteProduct } from '@/utils'

interface Product {
    id: number;         // El identificador único de cada producto (puede ser auto-incrementado por IndexedDB)
    name: string;       // Nombre del producto
    price: number;      // Precio del producto
    url: string;        // URL de la imagen del producto
}

export const ListProducts = () => {
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await getAllProducts()
            setProducts(data)
        }

        fetchProducts()
    }, [])

    const handleDelete = async (id: number) => {
        await deleteProduct(id)
        setProducts(products.filter(product => product.id !== id))
    }

    return (
        <div className=' flex fle-col space-y-4 p-4
        overflow-y-auto'>
            <div className="grid grid-cols-1 gap-4 
                sm:grid-cols-3 lg:grid-cols-5 p-5">
                {products.map((product, index) => (
                    <CardProduct key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        url={product.url}
                        onDelete={handleDelete}
                    />
                ))}
            </div>
        </div>
    )
}