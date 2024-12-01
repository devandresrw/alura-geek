import { Header, Footer, ListProducts } from "@/components"

export const ContainerApp = () => {
    return (
        <div className="h-screen grid grid-rows-[10%_1fr_10%]">
            <Header />
            <div className="overflow-auto">
                <ListProducts />
            </div>
            <Footer />
        </div>
    )
}