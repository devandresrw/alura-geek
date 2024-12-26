'use client'
import { CardProduct } from '@/components'
import { deleteProduct } from '@/utils'
import { useProductStore } from '@/stores'

export const ListProducts = () => {
    const { products } = useProductStore()

    const handleDelete = async (id: string) => {
        await deleteProduct(id)
    }

    return (
        <div className=' flex fle-col space-y-4 p-4
        overflow-y-auto'>
            <div className="grid grid-cols-1 gap-4 
                sm:grid-cols-3 lg:grid-cols-5 p-5">
                {products.map((product) => (
                    <CardProduct
                        key={product.id}
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