import './index.css'
import React from 'react';
import {useNavigate} from 'react-router-dom';
import {NextUIProvider} from '@nextui-org/react';
import { Routes, Route } from 'react-router-dom';
import DashboardHome from './component/pages/home';
import DashboardMonitoring from './component/pages/monitoring';

function App() {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate}>
      <Routes>
        <Route path='/' element={<DashboardHome/>}/>
        <Route path='/monitoring' element={<DashboardMonitoring/>}/>
      </Routes>
    </NextUIProvider>
  );
}

export default App
