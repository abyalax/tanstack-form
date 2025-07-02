import type { ZodFormSchema, FieldNameUnion, TypedFormFields, Params, TypedField } from "./type"

export function createTypedFields<TSchema extends ZodFormSchema>(
  { schema, AppField }: Params<TSchema>
): TypedFormFields<TSchema> {

  const keys = Object.keys(schema.shape) as FieldNameUnion<TSchema>[]

  const typedFields = {} as TypedFormFields<TSchema>

  for (const key of keys) {
    typedFields[key] = {
      name: key,
      AppField,
    } as TypedField<typeof key>
  }

  return typedFields
}
