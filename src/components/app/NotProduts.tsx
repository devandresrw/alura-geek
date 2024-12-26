import { PiEmpty } from "react-icons/pi";
import { TbDatabaseEdit } from "react-icons/tb";
import { MdBookmarkAdd } from "react-icons/md";
import { useModalStore } from '@/stores'
import { seedData } from '@/utils'

export const NotProducts = () => {
    const { toggleAddModal } = useModalStore()
    return (
        <div className="flex flex-col justify-center items-center
        h-52 gap-5">
            <div className="flex flex-col items-center justify-center">
                <PiEmpty className="text-7xl text-gray-400" />
                <p className="text-2xl text-gray-400">No hay productos</p>
            </div>
            <div className="flex flex-col gap-3 md:flex-row">
                <button className="flex items-center justify-center gap-2
                bg-[#c004d978] rounded-md px-5 py-2"
                    onClick={seedData}>
                    <span className="text-slate-700
                     stroke-black font-semibold">Ejecutar Seed</span>
                    <TbDatabaseEdit fill="#f9f9f9" size={30} />
                </button>
                <button className="flex items-center justify-center gap-2
                bg-[#c004d978] rounded-md px-5 py-2"
                    onClick={toggleAddModal}>
                    <span className="text-slate-700
                     stroke-black font-semibold">Agregar Uno</span>
                    <MdBookmarkAdd fill="#f9f9f9" size={30} />
                </button>
            </div>
        </div>
    )
}