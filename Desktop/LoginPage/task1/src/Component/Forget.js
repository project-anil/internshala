import React from 'react';
import './Forget.css';
import { Button, Checkbox, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

const forget = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    return (
        <div className='forget-page'>
            <div className='forget-body'>
                <h3>forget your password?</h3>
            </div>
            <div className='forget-error'>

            </div>
            <div className='login-box'>
                <Form
                    name="normal_login"
                    className="forget-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Request Reset Link
                    </Button>
                    <a>Back to signin</a>
                </Form>
            </div>
        </div>
    )
}

export default forget