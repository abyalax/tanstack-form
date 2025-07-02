import { createFormHook } from '@tanstack/react-form'
import { fieldContext, formContext } from '../context/form-context'
import { Text } from '../components/ui/input/text'
import { Number } from '../components/ui/input/number'
import { Select } from '../components/ui/input/select'
import { Submit } from '../components/ui/button'
import { Date } from '../components/ui/input/date'
import { Checkbox } from '../components/ui/input/checkbox'
import { CheckboxGroups } from '../components/ui/input/checkbox-group'
import { Radio } from '../components/ui/input/radio'
import { Rate } from '../components/ui/input/rate'
import { Slider } from '../components/ui/input/slider'
import { Switch } from '../components/ui/input/switch'
import { Time } from '../components/ui/input/time'
import { Upload } from '../components/ui/input/upload'

export const { useAppForm : useForm } = createFormHook({
  fieldComponents: {
    Number,
    Text, 
    Select,
    Date,
    Checkbox,
    CheckboxGroups,
    Radio,
    Rate,
    Slider,
    Switch,
    Time,
    Upload
  },
  formComponents: {
    Submit,
  },
  fieldContext,
  formContext,
})
