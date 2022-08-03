import React, { useState } from 'react';
import { MinusOutlined } from '@ant-design/icons';

import './account.css';
import logo from './images/logo-new-scaled-1.webp';
import { Button,Input, Select, Form } from 'antd';

const Account3 = () => {
    const { Option } = Select;


    return (
        <div>
            <div className='img-header'><img src={logo} width="137px" /></div>
            <div className='account-page1'>
                <div className='account-body1'>
                    <div>
                        <a><MinusOutlined className="icon-page" /></a>
                        <a><MinusOutlined className="icon-page" /></a>
                        <a><MinusOutlined className="icon-page" /></a>
                    </div>
                    <h1>What’s your life stage?</h1>
                    <p>Select the option that best describes you.<br /> Don’t worry, you can update it later.</p>
                    <Form.Item name="country"  >
                        <Select
                            placeholder="Select a option and change input text above"
                            allowClear
                        >
                            <Option >America</Option>
                            <Option >Astria</Option>
                            <Option>Australia</Option>
                            <Option >Bangladesh</Option>
                            <Option >India</Option>
                            <Option>Pakistan</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                            name="number"
                           
                        >
                            <Input placeholder="Phone number (optional)" />
                        </Form.Item>
                        <Form.Item
                            name="number"
                            rules={[{ required: true, message: 'Please input your pincode!' }]}
                        >
                            <Input placeholder="Pincode/country code" />
                        </Form.Item>
                        <Button type="primary" htmlType="submit"  className='button-page1' >
                        <a>Signup </a>
                    </Button>
                </div>
            </div>
        </div>

    )
}

export default Account3