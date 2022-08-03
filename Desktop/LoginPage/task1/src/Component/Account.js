import React,{useState} from 'react';
import logo from './images/logo-new-scaled-1.webp';
import './account.css';
import { MinusOutlined, GoogleOutlined } from '@ant-design/icons';
import { Button, Input, Form } from 'antd';
import { Link } from 'react-router-dom';
import SignupImage from './images/signupgroup.webp';



const Account = () => {
    const [msg, setmsg] = useState('');
    const [msg1, setmsg1] = useState('');
    const [show, setShow] = useState(false);

    const onFinish = (values) => {
        setShow(false);
        if (!values.email && !values.password) {
            setmsg("Please Enter your mail-Id");
            setmsg1("Please Enter your Password");
            setShow(true);
        }
        else if (!values.email) {
            setmsg("Please Enter your mail-Id");
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
        <div>
            <div className='img-header'><img src={logo} width="137px" /></div>
            <div className='account-page'>
                <div className='account-body'>
                    <div>
                        <a><MinusOutlined className="icon-page" /></a>
                        <a><MinusOutlined className="icon-page" /></a>
                        <a><MinusOutlined className="icon-page" /></a>
                    </div>
                    <h1>Sign Up for Free...</h1>
                    <p>Get curated information, personalized to your parenting stage delivered just when <br /> you need it</p>
                    <Button type="primary" className='button-page' >
                        <GoogleOutlined /> Signup with Google Account
                    </Button>
                    <Form
                        name="normal_login"
                        className="sign-form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="email"
                            helperText={msg}
                            rules={[
                                {
                                  type: 'email',
                                  message: 'The input is not valid E-mail!',
                           
                                },
                                {
                                  required: true,
                                  message: 'Please input your E-mail!',
                                },
                              ]}
                        >
                            <Input placeholder="Enter your email@(e.g Julie@appleseed.com" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            helperText={msg1}
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input

                                type="password"
                                placeholder="create Password"
                            />
                        </Form.Item>
                        <Form.Item
                            name="name"
                            rules={[{ required: true, message: 'Please input your name!' }]}
                        >
                            <Input placeholder="Name" />
                        </Form.Item>
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input placeholder="Username" />
                        </Form.Item>
                    </Form>
                    <Button type="primary" htmlType="submit"  className='button-page1' >
                        <Link to="/account1" htmlType="submit" >Signup </Link>
                    </Button>
                    <span>Already have an account?<Link to="/">Login</Link></span>
                    <img src={SignupImage} className="img-resize" />
                </div>
            </div>
        </div>
    )
}

export default Account