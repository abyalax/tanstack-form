import type { ReactNode } from "react"
import type { useForm } from "../../hooks/use-form"
import type z from "zod"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ZodFormSchema = z.ZodObject<any, any, any>

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