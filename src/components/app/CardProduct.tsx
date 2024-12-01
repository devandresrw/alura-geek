import Image from "next/image"
import { MdDelete } from "react-icons/md";

interface CardProductProps {
    name?: string;
    price?: number;
    image?: string;
}

export const CardProduct = ({ ...props }: CardProductProps) => {
    return (
        <div className="bg-[#5D04D9] border-[3px] border-l-neutral-950
        rounded-lg flex justify-between items-center md:flex-col">
            <div className="md:w-full">
                <Image
                    src="/images.jpeg"
                    alt="images"
                    width={150}
                    height={150}
                    className="md:w-full"
                />
            </div>
            <div className="flex-grow p-4">
                <h2 className="font-bold text-2xl
                text-white">Nombre</h2>
                <div className="flex justify-between items-center">
                    <p className="font-semibold 
                    text-xl text-white">$49.99</p>
                    <button><MdDelete fill="#f9f9f9" size={25} /></button>
                </div>
            </div>
        </div>
    )
}