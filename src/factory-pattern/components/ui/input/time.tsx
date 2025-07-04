import type { AnyFieldApi } from '@tanstack/react-form'
import { TimePicker, Form, type TimePickerProps } from 'antd'

type Props = {
  label: string
  field: AnyFieldApi
} & TimePickerProps

export const Time = ({ label, field, ...rest }: Props) => {

  const onChange: TimePickerProps['onChange'] = (_time, timeString) => {
    field.handleChange(timeString)
    console.log('Timepicker State: ', field.state.value);
  };

  return (
    <Form.Item
      label={label}
      validateStatus={
        field.state.meta.errors?.length && field.state.meta.isTouched ? 'error' : ''
      }
      help={field.state.meta.isTouched ? field.state.meta.errors?.[0]?.message : ''}
    >
      <TimePicker {...rest} onChange={onChange} />
    </Form.Item>
  )
}