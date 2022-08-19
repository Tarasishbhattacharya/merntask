import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Admin from './component/Admin';
import Login from './component/Login';
import Navbar from './component/Navbar';
import { Privateroute } from './component/Privateroute';
import Register from './component/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
       <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/admin' element={<Privateroute>
          <Admin/>
        </Privateroute>}/>
       </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
