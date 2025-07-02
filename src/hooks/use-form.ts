import { createFormHook } from '@tanstack/react-form'
import { fieldContext, formContext } from '../context/form-context'
import { Text } from '../components/ui/input/text'
import { Number } from '../components/ui/input/number'
import { Select } from '../components/ui/input/select'
import { Submit } from '../components/ui/button'
import { Date } from '../components/ui/input/date'

export const { useAppForm : useForm } = createFormHook({
  fieldComponents: {
    Number,
    Text, 
    Select,
    Date
  },
  formComponents: {
    Submit,
  },
  fieldContext,
  formContext,
})
