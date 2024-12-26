'use client'
import { useFormAdd } from '@/hooks'
import { TbDatabaseEdit } from "react-icons/tb";
import { seedData } from '@/utils'

export const FormAdd = () => {
    const { register, handleSubmit, errors, onSubmit } = useFormAdd();

    return (
        <div>
            <div className="flex flex-col items-center justify-center gap-4 w-full mt-2">
                <form onSubmit={handleSubmit(onSubmit)}
                    encType="multipart/form-data"
                    className='flex flex-col w-full gap-3'>
                    <div className='flex flex-col'>
                        <input
                            type="text"
                            placeholder="Nombre producto"
                            className='myinput'
                            {...register('name')}
                        />
                        <span className='myspan'>{errors.name?.message}</span>
                    </div>
                    <div className='flex flex-col'>
                        <input
                            type="text"
                            placeholder="Precio"
                            className='myinput'
                            {...register('price')}
                        />
                        <span className='myspan'>{errors.price?.message}</span>
                    </div>
                    <div className='flex flex-col'>
                        <input
                            type="file"
                            placeholder="URL imagen"
                            className='myinput'
                            {...register('file', { required: true })}
                        />
                        <span className='myspan'>{errors.file?.message}</span>
                    </div>
                    <button
                        className='flex items-center justify-center bg-[#c004d978] rounded-md px-5 py-2 text-slate-900 font-bold gap-3'
                        type="submit"
                    >Agregar
                    </button>
                </form>

                <button
                    className="w-full flex items-center justify-center bg-[#c004d978] rounded-md px-5 py-2 text-slate-900 font-bold gap-3"
                    onClick={seedData}
                >
                    <span>Ejecutar seed</span>
                    <TbDatabaseEdit fill="#f9f9f9" size={30} />
                </button>
            </div>
        </div>
    );
};