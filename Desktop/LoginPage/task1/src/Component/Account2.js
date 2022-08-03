import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { Radio, Button} from 'antd';
import logo from './images/logo-new-scaled-1.webp';
import { MinusOutlined } from '@ant-design/icons';
import './account.css';
import logo1 from './images/form2.webp';

const Account2 = () => {

    const [placement, SetPlacement] = useState('topLeft');

    const placementChange = (e) => {
      SetPlacement(e.target.value);
    };
  return (
    <div>
         <div className='img-header'><img src={logo} width="137px" /></div>
         <div className='account-page'>
                <div className='account-body1'>
     <div>
     <a><MinusOutlined className="icon-page" /></a>
     <a><MinusOutlined className="icon-page" /></a>
     <a><MinusOutlined className="icon-page" /></a>
 </div>
 <h1>What’s your life stage?</h1>
 <p>Select the option that best describes you.<br/> Don’t worry, you can update it later.</p>
 <Radio.Group value={placement} onChange={placementChange}>
 <Button type="primary" htmlType="submit" className='button-change'>
 I’m trying to conceieve
                        </Button>
                        <Button type="primary" htmlType="submit" className='button-change'>
                        I’m pregnant
                        </Button>
                        <Button type="primary" htmlType="submit" className='button-change'>
                        I’m a parent
                        </Button>
                        <br/>
                        <Button type="primary" htmlType="submit" className='button-change'>
                        I’m a parent & trying to conceieve
                        </Button>
                        <Button type="primary" htmlType="submit" className='button-change'>
                        I’m a parent & pregnant
                        </Button>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                          <Link to="/account2">Continue</Link>
                        </Button>
      </Radio.Group>

      <img src={logo1} className="form-img" />
    </div>
    </div>
    </div>

  )
}

export default Account2