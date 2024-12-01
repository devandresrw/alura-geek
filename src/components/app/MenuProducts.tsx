'use client'
import { Modal } from '@/components';
import { useState } from 'react'
import { MdBookmarkAdd, MdDeleteSweep, } from "react-icons/md";


export const MenuProducts = () => {
    const [viewAdd, setViewAdd] = useState<boolean>()
    const [viewDelete, setViewDelete] = useState<boolean>()

    const toggleAddProduct = () => setViewAdd(!viewAdd)
    const toggleDeleteProduct = () => setViewDelete(!viewDelete)

    return (
        <div className="flex justify-center items-center gap-5">
            <MdBookmarkAdd fill="#f9f9f9" size={30} onClick={toggleAddProduct} />
            <MdDeleteSweep fill="#f9f9f9" size={30} onClick={toggleDeleteProduct} />
            {
                viewAdd && (<Modal isOpen={viewAdd} onClose={toggleAddProduct}>
                    <h1>Formulario de Agregar Producto</h1>
                </Modal>)
            }
            {viewDelete && (<Modal isOpen={viewDelete} onClose={toggleDeleteProduct}>
                <h1>Formulario de Eliminar Producto</h1>
            </Modal>)}
        </div>
    )
}