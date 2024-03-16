import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import SingUp from './Pages/SingUp'
import Navbar from './Pages/Navbar'
import CodeEditor from './Pages/CodeEditor'
import ResetPassword from './Pages/ResetPassword'
import Otp from './Pages/Otp'
import Search from './Pages/Search'
import Profile from './Pages/Profile'
const App = () => {
  return (
    <BrowserRouter >
      <Navbar/>
      <Routes >
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<SingUp/>}/>
        <Route path='/editor/:roomId' element={<CodeEditor/>}/>
        <Route path='/profile' element={<Profile/>} />
        <Route path='/reset_password' element={<ResetPassword/>}/>
        <Route path='/otp' element={<Otp/>}/>
        <Route path='/search' element={<Search/>}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App
