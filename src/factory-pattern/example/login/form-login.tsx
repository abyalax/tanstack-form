import { UserOutlined } from "@ant-design/icons"
import { createForm } from "../../factory"
import { schema } from "./schema"

export const FormLogin = () => {

    const { useForm } = createForm()

    const form = useForm({
        defaultValues: {
            email: '',
            password: ''
        },
        validators: {
            onChange: schema, 
        },
        onSubmit: (e) => {
            console.log('Login data:', e.value)
        },
    })

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            form.handleSubmit()
        }}>
            <form.AppField name="email">
                {(field) => <field.Text field={field} prefix={<UserOutlined />} placeholder='Insert your email' />}
            </form.AppField>
            <form.AppField name="password">
                {(field) => <field.Text field={field} type="password" prefix={<UserOutlined />} placeholder='Insert your password' />}
            </form.AppField>
            <form.Submit  formContext={form} label="Login"/>
        </form>
    )
}
