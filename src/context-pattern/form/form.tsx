/* eslint-disable @typescript-eslint/ban-ts-comment */

import { z } from 'zod'
import { useForm } from './use-form'
import type { FormProps, ZodFormSchema } from './type'
import { createTypedFields } from './utils'

export function FormSafe<TSchema extends ZodFormSchema>({
  schema,
  onSubmit,
  children,
}: FormProps<TSchema>) {

  const form = useForm({
    defaultValues: {} as z.infer<TSchema>,
    validators: {
      onChange: schema,
    },
    onSubmit: ({ value }) => onSubmit(value),
  })
  
  // @ts-expect-error
  const typedFields = createTypedFields({ schema, AppField: form.AppField })

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        form.handleSubmit({ touch: true })
      }}
    >
      {/* @ts-expect-error */}
      {children(form, typedFields)}
    </form>
  )
}
