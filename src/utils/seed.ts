import { faker } from '@faker-js/faker'
import { addProduct, clearProduct } from '@/utils'

interface Producto {
    id: string
    name: string
    price: number
    url: string
}

const generativeProduct = (): Producto => {
    return {
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: parseFloat(faker.commerce.price({ min: 10, max: 500 })),
        url: faker.image.url({
            width: 400,
            height: 400,
        }),
    }
}


const arrayProducts = (count: number): Producto[] => {
    return Array.from({ length: count }, generativeProduct)
}

export const seedData = async () => {
    await clearProduct()
    const data = arrayProducts(100)
    for (const product of data) {
        await addProduct(product)
    }
    console.log('Seed data completed')
    window.location.reload()
}