import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { formSchema } from '@/schemas/formschemas'
import { z } from 'zod'

type FormData = z.infer<typeof formSchema>

export const useFormAdd = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(formSchema)
    })

    const onSubmit = (data: FormData) => {
        console.log(data)
        // Envio de formulario
    }

    return {
        register,
        handleSubmit,
        errors,
        onSubmit
    }
}