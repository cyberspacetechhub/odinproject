import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Body from './components/Body';
import AllPaths from './components/AllPaths';
import About from './components/About';
import SupportUs from './components/SupportUs';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {

  return (
    <>
   <Routes>
      <Route path='/' element={<Home />} >
      <Route path='/path' element={<AllPaths />} />
      <Route path='/about' element={<About />} />
      <Route path='/supportus' element={<SupportUs />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route index element={<Body />} />
    </Route>
   </Routes>

    <div>
      
    </div>
    </>
  )
}

export default App
