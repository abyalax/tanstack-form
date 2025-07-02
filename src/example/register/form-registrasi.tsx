import { FormSafe as Form } from '../../components/form/form'
import { options, schema } from './schema';

export const FormRegistrasi = () => {
  return (
    <Form
      schema={schema}
      onSubmit={(value) => console.log(value)}
    >
      {(form, Field) => {
        const { name, email, age, checkbox, checkbox_group, radio, rate, select, slider, switch_field, time_field, date_field, upload_field } = Field
        return (
          <>
            <Field.name.AppField name={name.name}>
              {(field) => <field.Text label='Name' />}
            </Field.name.AppField>

            <Field.email.AppField name={email.name}>
              {(field) => <field.Text label='Email' />}
            </Field.email.AppField>

            <Field.age.AppField name={age.name}>
              {(field) => <field.Number label='Age' />}
            </Field.age.AppField>

            <Field.checkbox.AppField name={checkbox.name}>
              {(field) => <field.Checkbox label='Single Checkbox' />}
            </Field.checkbox.AppField>

            <Field.checkbox_group.AppField name={checkbox_group.name}>
              {(field) => <field.CheckboxGroups options={options} label='Group Checkbox' />}
            </Field.checkbox_group.AppField>

            <Field.radio.AppField name={radio.name}>
              {(field) => <field.Radio options={options} label='Radio' />}
            </Field.radio.AppField>

            <Field.rate.AppField name={rate.name}>
              {(field) => <field.Rate label='Rate' />}
            </Field.rate.AppField>

            <Field.select.AppField name={select.name}>
              {(field) => <field.Select options={options} label='Select' />}
            </Field.select.AppField>

            <Field.slider.AppField name={slider.name}>
              {(field) => <field.Slider label='Slider' marks={{
                0: "0",
                25: "100",
                50: "200",
                75: "300",
                100: "400",
              }} />}
            </Field.slider.AppField>

            <Field.switch_field.AppField name={switch_field.name}>
              {(field) => <field.Switch defaultChecked={true} label='Switch' />}
            </Field.switch_field.AppField>

            <Field.time_field.AppField name={time_field.name}>
              {(field) => <field.Time label='Time Picker' />}
            </Field.time_field.AppField>

            <Field.date_field.AppField name={date_field.name}>
              {(field) => <field.Date label='Date Picker' />}
            </Field.date_field.AppField>

            <Field.upload_field.AppField name={upload_field.name}>
              {(field) => <field.Upload label='Upload File' name='file'
                customRequest={({ file, onSuccess }) => {
                  console.log('Simulasi upload dengan customRequest:', file)
                  setTimeout(() => {
                    onSuccess?.('ok')
                  }, 1000)
                }} />}
            </Field.upload_field.AppField>

            <form.AppForm>
              <form.Submit label='Sign Up' />
            </form.AppForm>
          </>
        )
      }

      }
    </Form>
  )
}