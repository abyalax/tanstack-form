import { Slider as SliderAntd, Form, type SliderSingleProps } from 'antd'
import { useFieldContext } from '../../../form/form-context';
import type { SliderRangeProps } from 'antd/es/slider';

type Props = {
    label?: string
    marks: SliderSingleProps | SliderRangeProps
} & SliderSingleProps

export const Slider = ({ label, marks, ...rest }: Props) => {
    const field = useFieldContext<number>()

    const onChange: SliderSingleProps['onChange'] = (e) => {
        field.handleChange(e)
        console.log('Slider State: ', field.state.value);
    };

    return (
        <Form.Item
            label={label}
            validateStatus={
                field.state.meta.errors?.length && field.state.meta.isTouched ? 'error' : ''
            }
            help={field.state.meta.isTouched ? field.state.meta.errors?.[0]?.message : ''}
        >
            <SliderAntd
                {...rest}
                marks={marks}
                onChange={onChange}
                value={field.state.value}
                onBlur={field.handleBlur}
            />
        </Form.Item>
    )
}