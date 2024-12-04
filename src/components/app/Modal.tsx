import { TfiClose } from "react-icons/tfi";

interface FormAddProps {
    title?: string
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}
export const Modal = ({ isOpen, onClose, children, title }: FormAddProps) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
            <div className="bg-white rounded-lg shadow-lg p-4 z-10
            w-72 h-auto">
                <div className="flex justify-between items-center">
                    <h1 className="font-bold text-slate-800
                    text-xl">{title}</h1>
                    <button className=" bg-red-500 text-white px-2 py-2 rounded-full" onClick={onClose}>
                        <TfiClose size={20} fill="#f9f9f9" />
                    </button>
                </div>
                {children}
            </div>
        </div>
    )
}