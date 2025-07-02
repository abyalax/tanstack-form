import { Form, InputNumber, type InputNumberProps } from 'antd'
import { useFieldContext } from '../../../context/form-context';
import { type valueType } from 'antd/es/statistic/utils';

type Props = {
    label: string
} & InputNumberProps

export const Number = ({ label, ...rest }: Props) => {
    const field = useFieldContext<valueType>()

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
