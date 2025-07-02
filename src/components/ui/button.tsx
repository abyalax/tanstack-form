import { Button, type ButtonProps } from 'antd'
// import { useFormContext } from '../../context/form-context';

type Props = {
  label?: string
} & ButtonProps

export const Submit = ({ label = "Submit", ...rest }: Props) => {
  // const form = useFormContext()

  return (
    <Button
      {...rest}
      type="primary"
      htmlType="submit"
    >
      {label}
    </Button>
  )
}
