import { z } from 'zod'
import { FormSafe as Form } from '../components/form/form'
import { LockOutlined, UserOutlined } from '@ant-design/icons'

const schema = z.object({
    email: z.string().email('Invalid email'),
    password: z.string().min(2)
})

export const FormLogin = () => {

    return (
        <Form
            schema={schema}
            onSubmit={(value) => console.log('Form Login : ', value)}
        >
            {(form, { email, password }) => (
                <>
                    <email.AppField name={email.name}>
                        {(field) => <field.Text prefix={<UserOutlined />} placeholder='Insert your email' />}
                    </email.AppField>

                    <password.AppField name={password.name}>
                        {(field) => <field.Text type='password' prefix={<LockOutlined />} placeholder='Insert your password' />}
                    </password.AppField>

                    <form.AppForm>
                        <form.Submit label='Login' />
                    </form.AppForm>
                </>
            )}
        </Form>
    )
}
