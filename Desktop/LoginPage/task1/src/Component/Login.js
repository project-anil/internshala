import React, { useState } from 'react';
import logo from './images/logo-new-scaled-1.webp';
import './Login.css';
import { LockOutlined, UserOutlined,EyeTwoTone,EyeInvisibleOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router-dom';

const Login = () => {
    const [msg, setmsg] = useState('');
    const [msg1, setmsg1] = useState('');
    const [show, setShow] = useState(false);

    const onFinish = (values) => {
        setShow(false);
        if (!values.username && !values.password) {
            setmsg("Please Enter your Username");
            setmsg1("Please Enter your Password");
            setShow(true);
        }
        else if (!values.username) {
            setmsg("Please Enter your username");
            setmsg1("");
            setShow(true);
        }
        else if (!values.password) {
            setmsg1("Please Enter your Password")
            setmsg("");
            setShow(true);
        }

        console.log('Received values of form: ', values);
    };
    return (
        <div className='Login-page'>

            <div className='logo-body'>
                <h1>Acoount Login</h1>
                <img src={logo} width="137px" />
                <div className='signin-page'>
                    <p>Sign In</p>
                    <Link to="/account">Create an account</Link>
                </div>

            </div>
            {show &&
                <div className='login-error'>
                    <p>{msg}</p>
                    <p>{msg1}</p>
                </div>}
            <div className='login-box'>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}

                >
                    <Form.Item
                        name="username"
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" id='name' />
                    </Form.Item>
                    <Form.Item
                        name="password"
                    >
                        {/* <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password" id='passward'
                            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        /> */}
                        <Input.Password
                         prefix={<LockOutlined className="site-form-item-icon" />}
                         type="password"
      placeholder="password"
      iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
    />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Link to="/forget" className="login-form-forgot" href="">
                            Forgot password?
                        </Link>
                    </Form.Item>

                    <Form.Item className='button-signup'>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log In
                        </Button>
                    </Form.Item>

                </Form>
            </div>

            <span><a>Terms of Services</a> and <a>Privacy Policy</a></span>
        </div>

    )
}

export default Login