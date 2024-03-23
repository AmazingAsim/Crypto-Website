import React from 'react';
import Sidebar from './components/Dashboard/Sidebar'
import MainSection from './components/Dashboard/MainSection';
import Transactions from './components/Transactions/Transactions';
import {BrowserRouter,Route,Routes} from 'react-router-dom'

export default function App() {
  return (
    <div style={{ display: 'flex'}}>
      <BrowserRouter>
          <Sidebar />
          <Routes>
            <Route path='/' element={  <MainSection/>}></Route>
            <Route path='transactions' element={  <Transactions/>}></Route>
          </Routes>
      </BrowserRouter>
        
    </div>
  );
}


