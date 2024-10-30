
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Authentication/Login'
import SignUp from './components/Authentication/SignUp'
import Home from './components/Home/Home'
import Jobs from './components/Jobs/Jobs'
import Browse from './components/Browse/Browse'
import Profile from './components/Profile/Profile'
import JobDescription from './components/JobDesc/JobDescription'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='/jobs' element={<Jobs/>}></Route>
      <Route path='/description/:id' element={<JobDescription/>}></Route>
      <Route path='/browse' element={<Browse/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
    </Routes>
    </>
  )
}

export default App
