import z from 'zod'

export const formZod = z.object({
    name: z.string().min(3).max(20),
    email: z.string().email(),
    password: z.string().min(6),
    passwordConfirmation: z.string().min(6),
    rememberMe: z.boolean()
})

//Nombre 
//Precio
//Imagen