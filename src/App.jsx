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
import VerificationPage from './Pages/VerificationPage'
import PrivateRoute from './Components/PrivateRoute'



const App = () => {
  return (
    <BrowserRouter >
      <Navbar/>
      <Routes >
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<SingUp/>}/>
        <Route path='/reset_password' element={<ResetPassword/>}/>
        <Route path='/verify-email/:token' element={<VerificationPage/>} />
        <Route path='/otp' element={<Otp/>}/>
        <Route 
          path='/search'

          element={
            <PrivateRoute>
              <Search/>
            </PrivateRoute>
          }
        />
        <Route 
          path='/profile' element={<PrivateRoute><Profile/></PrivateRoute>}
        />
        <Route
          path='/editor/:roomId'
          element={
            <PrivateRoute>
              <CodeEditor/>
            </PrivateRoute>
          }
        />
        {/* <PrivateRoute path='/profile' element={<Profile/>}/> */}
        {/* <PrivateRoute path='/search'  element={<Search/>}/> */}
        {/* <PrivateRoute  path='/editor/:roomId' element={<CodeEditor/>}/> */}
      </Routes>

    </BrowserRouter>
  )
}

export default App
