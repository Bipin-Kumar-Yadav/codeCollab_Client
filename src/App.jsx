import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import SingUp from './Pages/SingUp'
import CodeEditor from './Pages/CodeEditor'
import ResetPassword from './Pages/ResetPassword'
import Otp from './Pages/Otp'
const App = () => {
  return (
    <BrowserRouter >
      <Routes >
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/sign_up' element={<SingUp/>}/>
        <Route path='/code_editor' element={<CodeEditor/>}/>
        <Route path='/reset_password' element={<ResetPassword/>}/>
        <Route path='/otp' element={<Otp/>}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App
