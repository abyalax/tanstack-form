import { Input, Form, type InputProps } from 'antd'
import { useFieldContext } from '../../../form/form-context';
import type { valueType } from 'antd/es/statistic/utils'

type Props = {
  label?: string
} & InputProps

export const Text = ({ label, ...rest }: Props) => {
  const field = useFieldContext<string>()

  const onChange: InputProps["onChange"] = (e) => {
    field.handleChange(e.target.value)
    console.log('Text State: ', field.state.value);
  }

  return (
    <Form.Item
      label={label}
      validateStatus={
        field.state.meta.errors?.length && field.state.meta.isTouched ? 'error' : ''
      }
      help={field.state.meta.isTouched ? field.state.meta.errors?.[0]?.message : ''}
    >
      <Input
        {...rest}
        value={field.state.value as valueType}
        onChange={onChange}
        onBlur={field.handleBlur}
      />
    </Form.Item>
  )
}
