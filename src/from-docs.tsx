import { createFormHook, createFormHookContexts } from '@tanstack/react-form'
import { Button, Input, InputNumber } from 'antd'
import { z } from 'zod'

const { fieldContext, formContext } = createFormHookContexts()

const { useAppForm } = createFormHook({
  fieldComponents: {
    Input,
    InputNumber,
  },
  formComponents: {
    Button,
  },
  fieldContext,
  formContext,
})

export const FormPage = () => {
  const form = useAppForm({
    defaultValues: {
      username: '',
      age: 0,
    },
    validators: {
      onChange: z.object({
        username: z.string(),
        age: z.number().min(13),
      }),
    },
    onSubmit: ({ value }) => {
      alert(JSON.stringify(value, null, 2))
    },
  })

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        form.handleSubmit()
      }}
    >
      <h1>Personal Information</h1>
      <form.AppField
        name="username"
        children={(field) => <field.Input  placeholder='Insert your username'/>}
      />
      <form.AppField
        name="age"
        children={(field) => <field.InputNumber placeholder='Insert your age' />}
      />
      <form.AppForm>
        <form.Button htmlType='submit'/>
      </form.AppForm>
    </form>
  )
}