import { TfiClose } from "react-icons/tfi";

interface FormAddProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}
export const Modal = ({ isOpen, onClose, children }: FormAddProps) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
            <div className="bg-white rounded-lg shadow-lg p-6 z-10
            w-72 h-80 relative">
                {children}
                <button className="absolute top-5 right-5 bg-red-500 text-white px-3 py-3 rounded-full" onClick={onClose}>
                    <TfiClose size={20} fill="#f9f9f9" />
                </button>
            </div>
        </div>
    )
}