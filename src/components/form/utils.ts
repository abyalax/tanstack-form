import type z from "zod"
import type { useForm } from "../../hooks/use-form"
import type { ZodFormSchema } from "./type"

type Params<TSchema extends ZodFormSchema> = {
    schema: TSchema
    AppField: ReturnType<typeof useForm>['AppField']
}

type TypedFormFields<TSchema extends ZodFormSchema> = {
    [K in keyof z.infer<TSchema>]: {
        name: K
        AppField: ReturnType<typeof useForm>['AppField']
    }
}

export function createTypedFields<TSchema extends ZodFormSchema>(
    { schema, AppField }: Params<TSchema>
): TypedFormFields<TSchema> {
    
    if (!schema?.shape) return {} as TypedFormFields<TSchema>

    const typedFields = Object.keys(schema.shape).reduce((acc, key) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const mutableAcc = acc as Record<string, any>
        mutableAcc[key] = {
            name: key as keyof z.infer<TSchema>,
            AppField,
        }
        return acc
    }, {} as TypedFormFields<TSchema>)

    return typedFields
}