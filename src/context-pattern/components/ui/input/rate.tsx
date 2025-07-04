import { Rate as RateAntd, Form, type RateProps } from 'antd'
import { useFieldContext } from '../../../form/form-context';

type Props = {
    label?: string
    tooltips?: string[]
} & RateProps

export const Rate = ({ label, tooltips = ['terrible', 'bad', 'normal', 'good', 'wonderful'], ...rest }: Props) => {
    const field = useFieldContext<number>()

    const onChange: RateProps['onChange'] = (e) => {
        field.handleChange(e)
        console.log('Rate State: ', field.state.value);
    };

    return (
        <Form.Item
            label={label}
            validateStatus={
                field.state.meta.errors?.length && field.state.meta.isTouched ? 'error' : ''
            }
            help={field.state.meta.isTouched ? field.state.meta.errors?.[0]?.message : ''}
        >
            <RateAntd
                {...rest}
                tooltips={tooltips}
                onChange={onChange}
                value={field.state.value}
                onBlur={field.handleBlur}
            />
        </Form.Item>
    )
}
