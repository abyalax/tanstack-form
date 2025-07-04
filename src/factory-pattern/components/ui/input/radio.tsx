import { Radio as RadioAntd, Form, type RadioGroupProps } from 'antd'
import type { AnyFieldApi } from '@tanstack/react-form'

type Option = {
    label: string
    value: string
}

type Props = {
    label?: string
    field: AnyFieldApi
    options: Option[]
} & Omit<RadioGroupProps, 'options'>

export const Radio = ({ label, field, options, ...rest }: Props) => {

    const onChange: RadioGroupProps['onChange'] = (e) => {
        field.handleChange(e.target.value)
        console.log('Radio State: ', field.state.value);
    }

    return (
        <Form.Item
            label={label}
            validateStatus={
                field.state.meta.errors?.length && field.state.meta.isTouched ? 'error' : ''
            }
            help={field.state.meta.isTouched ? field.state.meta.errors?.[0]?.message : ''}
        >
            <RadioAntd.Group
                {...rest}
                options={options}
                value={field.state.value}
                onChange={onChange}
                onBlur={field.handleBlur}
            />
        </Form.Item>
    )
}
