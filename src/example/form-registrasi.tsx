import { z } from 'zod'
import { FormSafe as Form } from '../components/form/form'

const proProcessDate = (val: unknown) => {
  if (typeof val === 'string' || typeof val === 'number') {
    const date = new Date(val)
    return isNaN(date.getTime()) ? undefined : date
  }
  return undefined
}

const schema = z.object({
  name: z.string().min(1, 'Required'),
  email: z.string().email('Invalid email'),
  age: z.number().min(1).max(80),
  date_of_birth: z.preprocess(
    proProcessDate,
    z.date({ required_error: 'Date is required', invalid_type_error: 'Invalid date' })
  ),
})

export const FormRegistrasi = () => {

  return (
    <Form
      schema={schema}
      onSubmit={(value) => console.log(value)}
    >
      {(form, { name, email, age, date_of_birth }) => (
        <>
          <name.AppField name={name.name}>
            {(field) => <field.Text label='Name' />}
          </name.AppField>

          <email.AppField name={email.name}>
            {(field) => <field.Text label='Email' />}
          </email.AppField>

          <age.AppField name={age.name}>
            {(field) => <field.Number label='Age' />}
          </age.AppField>

          <date_of_birth.AppField name={date_of_birth.name}>
            {(field) => <field.Date label='Date of Birth' />}
          </date_of_birth.AppField>

          <form.AppForm>
            <form.Submit label='Sign Up'/>
          </form.AppForm>
        </>
      )}
    </Form>
  )
}