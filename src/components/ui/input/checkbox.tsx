import { Checkbox as CheckboxAntd, Form } from 'antd'
import type { CheckboxChangeEvent, CheckboxProps } from 'antd';
import { useFieldContext } from '../../../context/form-context';

type Props = {
    label?: string
} & CheckboxProps

export const Checkbox = ({ label, ...rest }: Props) => {
    const field = useFieldContext<boolean>()

    const onChange: CheckboxProps['onChange'] = (e: CheckboxChangeEvent) => {
        field.handleChange(e.target.checked)
        console.log('Checkbox State: ',field.state.value);
    };

    return (
        <Form.Item
            label={label}
            validateStatus={
                field.state.meta.errors?.length && field.state.meta.isTouched ? 'error' : ''
            }
            help={field.state.meta.isTouched ? field.state.meta.errors?.[0]?.message : ''}
        >
            <CheckboxAntd
                {...rest}
                onChange={onChange}
                onBlur={field.handleBlur}
            />
        </Form.Item>
    )
}
