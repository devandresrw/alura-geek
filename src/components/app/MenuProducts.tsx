'use client'
import { Modal, FormAdd, FormDelete } from '@/components';
import { MdBookmarkAdd, MdDeleteSweep, } from "react-icons/md";
import { useModalStore } from '@/stores'

export const MenuProducts = () => {
    const { isAddModalOpen, isDeleteModalOpen,
        toggleAddModal, toggleDeleteModal } = useModalStore()

    return (
        <div className="flex justify-center items-center gap-5">
            <MdBookmarkAdd fill="#f9f9f9" size={30} onClick={toggleAddModal} />
            <MdDeleteSweep fill="#f9f9f9" size={30} onClick={toggleDeleteModal} />
            {
                isAddModalOpen && (<Modal isOpen={isAddModalOpen} onClose={toggleAddModal}
                    title='Agregar productos'>
                    <FormAdd />
                </Modal>)
            }
            {
                isDeleteModalOpen && (<Modal isOpen={isDeleteModalOpen} onClose={toggleDeleteModal}
                    title='Borrar todos'>
                    <FormDelete onClose={toggleDeleteModal} />
                </Modal>)
            }
        </div>
    )
}