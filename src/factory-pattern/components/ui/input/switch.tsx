import type { AnyFieldApi } from '@tanstack/react-form'
import { Switch as SwitchAntd, Form, type SwitchProps } from 'antd'

type Props = {
    label?: string
    field: AnyFieldApi
    defaultChecked?: boolean
} & SwitchProps

export const Switch = ({ label, field, defaultChecked, ...rest }: Props) => {

    const onChange = (checked: boolean) => {
        field.handleChange(checked)
        console.log('Switch State: ', field.state.value);
    }

    return (
        <Form.Item
            label={label}
            validateStatus={
                field.state.meta.errors?.length && field.state.meta.isTouched ? 'error' : ''
            }
            help={field.state.meta.isTouched ? field.state.meta.errors?.[0]?.message : ''}
        >
            <SwitchAntd
                {...rest}
                defaultChecked={defaultChecked}
                onChange={onChange}
            />
        </Form.Item>
    )
}
