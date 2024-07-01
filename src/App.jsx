import './index.css'
import React from 'react';
import {useNavigate} from 'react-router-dom';
import {NextUIProvider} from '@nextui-org/react';
import { Routes, Route } from 'react-router-dom';
import DashboardHome from './component/pages/home';
import DashboardFormData from './component/pages/form';
import DashboardLogData from './component/pages/logData';
import DashboardLogin from './component/pages/login';

function App() {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate}>
      <Routes>
        <Route path='/' element={<DashboardLogin/>}/>
        <Route path='/home' element={<DashboardHome/>}/>
        <Route path='/form' element={<DashboardFormData/>}/>
        <Route path='/logData' element={<DashboardLogData/>}/>
      </Routes>
    </NextUIProvider>
  );
}

export default App
