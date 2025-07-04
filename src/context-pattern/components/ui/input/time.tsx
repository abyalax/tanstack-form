import { TimePicker, Form, type TimePickerProps } from 'antd'
import { useFieldContext } from '../../../form/form-context';

type Props = {
  label: string
} & TimePickerProps

export const Time = ({ label, ...rest }: Props) => {
  const field = useFieldContext<string | string[]>()

  const onChange: TimePickerProps['onChange'] = (_time, timeString) => {
    field.handleChange(timeString)
    console.log('Timepicker State: ' ,field.state.value);
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