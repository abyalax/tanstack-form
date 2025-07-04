import type { AnyFormApi } from '@tanstack/react-form'
import { Button, type ButtonProps } from 'antd'

type Props = {
  label?: string
  formContext: AnyFormApi
} & ButtonProps

export const Submit = ({ label = "Submit", formContext, ...rest }: Props) => {

  return (
    <Button
      {...rest}
      type="primary"
      htmlType="submit"
      loading={formContext.state.isSubmitting}
    >
      {label}
    </Button>
  )
}
