import { DatePicker, Form, type DatePickerProps } from 'antd'
import { useFieldContext } from '../../../form/form-context';

type Props = {
  label: string
} & DatePickerProps

export const Date = ({ label, ...rest }: Props) => {
  const field = useFieldContext<string | string[]>()

  const onChange: DatePickerProps['onChange'] = (_date, dateString) => {
    field.handleChange(dateString)
    console.log('Datepicker State: ' ,field.state.value);
  };

  return (
    <Form.Item
      label={label}
      validateStatus={
        field.state.meta.errors?.length && field.state.meta.isTouched ? 'error' : ''
      }
      help={field.state.meta.isTouched ? field.state.meta.errors?.[0]?.message : ''}
    >
      <DatePicker {...rest} onChange={onChange} />
    </Form.Item>
  )
}