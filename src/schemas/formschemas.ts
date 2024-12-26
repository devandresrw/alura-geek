import { z, ZodSchema } from 'zod';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'] as const;
type AcceptedImageType = typeof ACCEPTED_IMAGE_TYPES[number];

interface FormDataInput {
    name: string;
    price: string; // Inicialmente es una cadena
    file: FileList;
}

interface FormData {
    name: string;
    price: number; // Se convierte a número
    file: File;
}

const formSchema: ZodSchema<FormData, z.ZodTypeDef, FormDataInput> = z.object({
    name: z.string()
        .min(5, 'El nombre debe tener al menos 5 caracteres')
        .max(20, 'El nombre no puede exceder 20 caracteres'),

    price: z.string()
        .transform((val) => parseFloat(val))
        .refine((val) => !isNaN(val) && val > 0, 'El precio debe ser mayor a 0'),

    file: z.custom<FileList>((fileList) => {
        // Validaciones con mensajes específicos
        if (!(fileList instanceof FileList)) {
            throw new Error('El archivo no es válido');
        }

        if (fileList.length === 0) {
            throw new Error('No se ha seleccionado ningún archivo');
        }

        const file = fileList[0];

        if (file.size > MAX_FILE_SIZE) {
            throw new Error(`El archivo excede ${MAX_FILE_SIZE / (1024 * 1024)}MB`);
        }

        if (!ACCEPTED_IMAGE_TYPES.includes(file.type as AcceptedImageType)) {
            throw new Error('El formato debe ser JPG, PNG, GIF o WEBP');
        }

        return true;
    }).transform((fileList) => fileList[0])
});

export { formSchema, type FormDataInput, type FormData };