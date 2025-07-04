import z from "zod"

export const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
  ];

const fileSchema = z
    .instanceof(File)
    .refine(file => file.size < 5 * 1024 * 1024, {
        message: 'File terlalu besar (maksimal 5MB)',
    })
    .refine(file => ['image/png', 'image/jpeg'].includes(file.type), {
        message: 'Hanya file PNG atau JPEG yang diperbolehkan',
    })

export const schema = z.object({
    name: z.string().min(1, 'Required'),
    email: z.string().email('Invalid email'),
    age: z.number().min(1).max(80),
    checkbox: z.boolean(),
    checkbox_group: z.array(z.enum(['Apple', 'Pear', 'Orange'])),
    radio: z.string(),
    select: z.string(),
    rate: z.number().min(1).max(5),
    slider: z.number().min(1).max(100),
    switch_field: z.boolean(),
    time_field: z.string(),
    date_field: z.string(),
    upload_field: fileSchema
})