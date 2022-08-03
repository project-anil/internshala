import { Route, Routes } from 'react-router-dom';
import 'antd/dist/antd.css';
import './App.css';
import Account from './Component/Account';
import Account1 from './Component/Account2';
import Account3 from './Component/Account3';
import Login from './Component/Login';
import Forget from './Component/Forget';
function App() {
  return (
    <div>
      <Routes>
      <Route exact path='/' element={<Login />} />
      <Route exact path='/account' element={<Account />} /> 
      <Route exact path='/account1' element={<Account1 />} /> 
      <Route exact path='/account2' element={<Account3 />} /> 
      <Route exact path='/forget' element={<Forget />} /> 
      </Routes>
    
    </div>
  );
}

export default App;
