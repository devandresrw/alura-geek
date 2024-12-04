import { Header, Footer, ContainerProduct } from "@/components"

export const ContainerApp = () => {
    return (
        <div className="h-screen grid grid-rows-[10%_80%_10%]">
            <Header />
            <div className="bg-white">
                <ContainerProduct />
            </div>
            <Footer />
        </div>
    )
}