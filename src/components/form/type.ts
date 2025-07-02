import type { ReactNode } from "react"
import type { useForm } from "../../hooks/use-form"
import type z from "zod"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ZodFormSchema = z.ZodObject<any, any, any>

export type FieldNameUnion<T extends ZodFormSchema> = Extract<keyof z.infer<T>, string>

export type Params<TSchema extends ZodFormSchema> = {
  schema: TSchema
  AppField: ReturnType<typeof useForm>['AppField']
}

// type field yang dipakai di setiap key
export type TypedField<K extends string> = {
  name: K
  AppField: ReturnType<typeof useForm>['AppField']
}

// setiap key (misal "email") menghasilkan field
export type TypedFormFields<TSchema extends ZodFormSchema> = {
  [K in FieldNameUnion<TSchema>]: TypedField<K>
}

export type FormProps<TSchema extends ZodFormSchema> = {
  schema: TSchema
  onSubmit: (value: z.infer<TSchema>) => void
  children: (
    form: ReturnType<typeof useForm>,
    fields: {
      [K in keyof z.infer<TSchema>]: {
        name: K
        AppField: ReturnType<typeof useForm>['AppField'] 
      }
    }
  ) => ReactNode
}