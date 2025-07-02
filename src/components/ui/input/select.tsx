import { Form, Select as SelectAntd, type SelectProps } from 'antd'
import { useFieldContext } from '../../../context/form-context';

type Props = {
  label: string
} & SelectProps

export const Select = ({ label, ...rest }: Props) => {
  const field = useFieldContext()

  return (
    <Form.Item
      label={label}
      validateStatus={
        field.state.meta.errors?.length && field.state.meta.isTouched ? 'error' : ''
      }
      help={field.state.meta.isTouched ? field.state.meta.errors?.[0]?.message : ''}
    >
      <SelectAntd
        showSearch
        {...rest}
        value={field.state.value}
        placeholder="Select a person"
        filterOption={(input, option) =>
          (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
        }
        options={[
          { value: '1', label: 'Jack' },
          { value: '2', label: 'Lucy' },
          { value: '3', label: 'Tom' },
        ]}
        onBlur={field.handleBlur}
        onChange={(e) => field.handleChange(e)}
      />
    </Form.Item>
  )
}
