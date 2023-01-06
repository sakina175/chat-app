import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Register from './pages/Register'
import Chat from './pages/Chat'
import Login from './pages/Login'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes> 
          <Route path='/' element={<Chat/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

