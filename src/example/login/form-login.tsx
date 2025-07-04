import { FormSafe as Form } from '../../components/form/form'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { schema } from './schema'

export const FormLogin = () => {

    return (
        <Form
            schema={schema}
            onSubmit={(value) => console.log('Form Login : ', value)}
        >
            {(form, Field) => {
                const { AppForm, Submit } = form
                const { email: Email, password: Password } = Field
                
                return (
                    <>
                        <Email.AppField name={Email.name}>
                            {(field) => <field.Text prefix={<UserOutlined />} placeholder='Insert your email' />}
                        </Email.AppField>

                        <Password.AppField name={Password.name}>
                            {(field) => <field.Text type='password' prefix={<LockOutlined />} placeholder='Insert your password' />}
                        </Password.AppField>

                        <AppForm>
                            <Submit label='Login' />
                        </AppForm>
                    </>
                )
            }}

        </Form>
    )
}
