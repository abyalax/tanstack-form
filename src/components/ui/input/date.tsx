import { DatePicker, Form, type DatePickerProps } from 'antd'
import { useFieldContext } from '../../../context/form-context';

type Props = {
  label: string
} & DatePickerProps

export const Date = ({label, ...rest} : Props) => {
    const field = useFieldContext()
    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        console.log('Date Picker : ' ,date, dateString);
        field.handleChange(dateString)
    };

    return (
        <Form.Item
            label={label}
            validateStatus={
                field.state.meta.errors?.length && field.state.meta.isTouched ? 'error' : ''
            }
            help={field.state.meta.isTouched ? field.state.meta.errors?.[0]?.message : ''}
        >
            <DatePicker {...rest} onChange={onChange}/>
        </Form.Item>
    )
}

/**
 * 
import { DatePicker, Form } from 'antd'
import type { DatePickerProps } from 'antd'
import { useFieldContext } from '@tanstack/react-form'
import type { ComponentProps } from 'react'

type Props = {
  label: string
} & ComponentProps<typeof DatePicker>

export const Date = ({ label, ...rest }: Props) => {
  const field = useFieldContext()

  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log('Date Picker : ', date, dateString)
    field.handleChange(dateString)
  }

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

 */