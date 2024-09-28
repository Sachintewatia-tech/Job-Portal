
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Shared/Navabr/Navbar'
import Login from './components/Authentication/Login'
import SignUp from './components/Authentication/SignUp'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Navbar/>} ></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
    </Routes>
    </>
  )
}

export default App
