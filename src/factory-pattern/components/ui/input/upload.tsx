import { Upload as UploadAntd, Form, type UploadProps, Button } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import type { AnyFieldApi } from '@tanstack/react-form'

type Props = {
    label?: string
    field: AnyFieldApi
} & UploadProps

export const Upload = ({ label, field, ...rest }: Props) => {

    const onChange: UploadProps['onChange'] = (info) => {
        if (info.file.status === 'done') {
            field.handleChange(info.file.originFileObj)
            console.log(`${info.file.name} file uploaded successfully`)
        } else if (info.file.status === 'error') {
            field.handleChange(info.file.originFileObj)
            console.log(`${info.file.name} file upload failed.`)
        }
    }

    return (
        <Form.Item
            label={label}
            validateStatus={
                field.state.meta.errors?.length && field.state.meta.isTouched ? 'error' : ''
            }
            help={field.state.meta.isTouched ? field.state.meta.errors?.[0]?.message : ''}
        >
            <UploadAntd onChange={onChange} {...rest}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </UploadAntd>
        </Form.Item>
    )
}
