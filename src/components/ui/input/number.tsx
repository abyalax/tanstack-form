import { Form, InputNumber, type InputNumberProps } from 'antd'
import { useFieldContext } from '../../../context/form-context';

type Props = {
  label: string
} & InputNumberProps

export const Number = ({ label, ...rest }: Props) => {
    const field = useFieldContext()

    const onChange: InputNumberProps['onChange'] = (value) => {
        console.log('changed', value);
        field.handleChange(value)
    };

    const onBlur: InputNumberProps['onBlur'] = () => {
        console.log('blur');
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
                value={field.state.value as number}
                onChange={onChange}
                onBlur={onBlur}
            />
        </Form.Item>
    )
}
