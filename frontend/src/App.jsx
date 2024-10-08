
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Shared/Navabr/Navbar'
import Login from './components/Authentication/Login'
import SignUp from './components/Authentication/SignUp'
import Home from './components/Home/Home'
import Jobs from './components/Jobs/Jobs'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='/jobs' element={<Jobs/>}></Route>
    </Routes>
    </>
  )
}

export default App
