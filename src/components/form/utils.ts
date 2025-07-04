import type { ZodFormSchema, FieldNameUnion, TypedFormFields, TypedField } from "./type"
import { useForm } from "../../hooks/use-form"

type Params<TSchema extends ZodFormSchema> = {
  schema: TSchema
  AppField: ReturnType<typeof useForm>['AppField']
}

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

  console.log('typedFields', typedFields);
  return typedFields
}
