import { Checkbox as CheckboxAntd, Divider, Form, type CheckboxProps } from 'antd'
import { useFieldContext } from '../../../form/form-context'
import { useState } from 'react'
import type { CheckboxGroupProps } from 'antd/es/checkbox'

type Props = {
  label?: string
  options: CheckboxGroupProps<string>['options']
  defaultCheckedList?: string[]
} & CheckboxProps

export const CheckboxGroups = ({ label, options = [], defaultCheckedList = [], ...rest }: Props) => {
  const field = useFieldContext<string[]>()

  const [checkedList, setCheckedList] = useState<string[]>(defaultCheckedList)

  const optionValues = (options as { value: string }[]).map((opt) =>
    typeof opt === 'string' ? opt : opt.value
  )

  const checkAll = checkedList.length === optionValues.length
  const indeterminate = checkedList.length > 0 && checkedList.length < optionValues.length

  const onChange = (list: string[]) => {
    setCheckedList(list)
    field.handleChange(list)
    console.log('CheckboxGroup State: ', field.state.value);
  }

  const onCheckAllChange: CheckboxProps['onChange'] = (e) => {
    const newList = e.target.checked ? optionValues : []
    setCheckedList(newList)
    field.handleChange(newList)
    console.log('CheckboxGroup State: ', field.state.value);
  }

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
        indeterminate={indeterminate}
        onChange={onCheckAllChange}
        checked={checkAll}
      >
        Check all
      </CheckboxAntd>
      <Divider />
      <CheckboxAntd.Group
        {...rest}
        options={options}
        value={checkedList}
        onChange={onChange}
      />
    </Form.Item>
  )
}
