'use client'
import { Modal, FormAdd, FormDelete } from '@/components';
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
                viewAdd && (<Modal isOpen={viewAdd} onClose={toggleAddProduct}
                    title='Agregar productos'>
                    <FormAdd />
                </Modal>)
            }
            {viewDelete && (<Modal isOpen={viewDelete} onClose={toggleDeleteProduct}
                title='Borrar todos'>
                <FormDelete onClose={toggleDeleteProduct} />
            </Modal>)}
        </div>
    )
}