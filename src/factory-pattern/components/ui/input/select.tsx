import type { AnyFieldApi } from '@tanstack/react-form'
import { Form, Select as SelectAntd, type SelectProps } from 'antd'

type Props = {
  label: string
  field: AnyFieldApi
  options: {
    label: string
    value: string
  }[]
} & Omit<SelectProps<string>, 'options'>

export const Select = ({ label, field, options, ...rest }: Props) => {

  const onChange: SelectProps<string>['onChange'] = (value) => {
    field.handleChange(value)
    console.log('Select State: ', field.state.value);
  }

  return (
    <Form.Item
      label={label}
      validateStatus={
        field.state.meta.errors?.length && field.state.meta.isTouched ? 'error' : ''
      }
      help={field.state.meta.isTouched ? field.state.meta.errors?.[0]?.message : ''}
    >
      <SelectAntd
        showSearch
        {...rest}
        value={field.state.value}
        placeholder="Select an option"
        filterOption={(input, option) =>
          (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
        }
        options={options}
        onBlur={field.handleBlur}
        onChange={onChange}
      />
    </Form.Item>
  )
}
