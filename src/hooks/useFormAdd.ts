import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema, FormDataInput } from '@/schemas/formschemas';
import { useModalStore } from '@/stores'
import { addProduct } from '@/utils';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';


export const useFormAdd = () => {
    const { isAddModalOpen, toggleAddModal } = useModalStore();
    const { register, handleSubmit, formState: { errors }, watch } = useForm<FormDataInput>({
        resolver: zodResolver(formSchema)
    });

    const fileField = watch("file");

    const onSubmit = async (data: FormDataInput) => {
        try {

            // Verificar si es un input file válido
            const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
            const files = fileInput?.files;

            console.log('Files del input:', files);

            if (!files || files.length === 0) {
                throw new Error('No se ha seleccionado ningún archivo');
            }

            const file = files[0];


            // Validar tipo
            const isValidType = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'].includes(file.type);
            if (!isValidType) {
                throw new Error(`Tipo de archivo no válido: ${file.type}`);
            }

            // Sanitizar nombre del archivo
            const sanitizedFileName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
            const fileBlob = new Blob([await file.arrayBuffer()], { type: file.type });
            const sanitizedFile = new File([fileBlob], sanitizedFileName, { type: file.type });


            const formData = new FormData();
            formData.append('name', data.name);
            formData.append('price', data.price);
            formData.append('file', sanitizedFile);

            const response = await axios.post('/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });


            if (response.data.success) {
                await addProduct({
                    id: uuidv4(),
                    name: data.name,
                    price: Number(data.price),
                    url: response.data.data.url
                })
                toggleAddModal();
            }

        } catch (error) {
            console.error('Error detallado:', error);
            throw new Error(`Error en la subida: ${error instanceof Error ? error.message : 'Error desconocido'}`);
        }
    };

    return {
        register,
        handleSubmit,
        errors,
        onSubmit
    };
};