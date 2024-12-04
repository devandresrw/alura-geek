import * as z from 'zod'

export const formSchema = z.object({
    name: z.string().min(5, `Nombre Requerido`).max(20, `Nombre muy largo`),
    price: z.string()
        .transform((val) => parseFloat(val))
        .refine((val) => !isNaN(val) && val > 0, 'Precio no valido'),
    url: z.string().url(`Url no valida`).optional()
})