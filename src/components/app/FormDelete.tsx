import { clearProduct } from '@/utils'

interface FormDeleteProps {
    onClose: () => void;
}

export const FormDelete = ({ onClose }: FormDeleteProps) => {
    return (
        <div className="flex flex-col justify-center items-center mt-5 gap-5">
            <p>Seguro que deseas borrar todos los productos
                que hay en la base de datos:
            </p>
            <div className="flex justify-center items-center gap-4
            font-semibold text-lg text-slate-900">
                <button className="flex items-center justify-center gap-2
                bg-[#c004d978] rounded-md px-5 py-2"
                    onClick={clearProduct}>Si</button>
                <button className="flex items-center justify-center gap-2
                bg-[#c004d978] rounded-md px-5 py-2"
                    onClick={onClose}>No</button>
            </div>
        </div>
    )
}