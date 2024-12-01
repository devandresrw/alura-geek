import { CardProduct } from '@/components'

const Product = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
export const ListProducts = () => {
    return (
        <div className="grid grid-cols-1 gap-4 
                sm:grid-cols-3 lg:grid-cols-5 p-5">
            {Product.map((product, index) => (
                <CardProduct key={index} />
            ))}
        </div>
    )
}