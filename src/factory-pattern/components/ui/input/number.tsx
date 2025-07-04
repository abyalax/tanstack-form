import { Form, InputNumber, type InputNumberProps } from 'antd'
import type { AnyFieldApi } from '@tanstack/react-form';

type Props = {
    label: string
    field: AnyFieldApi
} & InputNumberProps

export const Number = ({ label, field, ...rest }: Props) => {

    const onChange: InputNumberProps['onChange'] = (value) => {
        field.handleChange(value!)
        console.log('Number State: ', field.state.value);
    };

    const onBlur: InputNumberProps['onBlur'] = () => {
        field.handleBlur()
    };

    return (
        <Form.Item
            label={label}
            validateStatus={field.state.meta.errors?.length && field.state.meta.isTouched ? 'error' : ''}
            help={field.state.meta.isTouched ? field.state.meta.errors?.[0]?.message : ''}
        >
            <InputNumber
                {...rest}
                value={field.state.value}
                onChange={onChange}
                onBlur={onBlur}
            />
        </Form.Item>
    )
}
