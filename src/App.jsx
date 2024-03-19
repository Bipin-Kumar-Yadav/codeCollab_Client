import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import SingUp from './Pages/SingUp'
import Navbar from './Pages/Navbar'
import CodeEditor from './Pages/CodeEditor'
import ResetPassword from './Pages/ResetPassword'
import Otp from './Pages/Otp'
import Profile from './Pages/Profile'
import VerificationPage from './Pages/VerificationPage'
import PrivateRoute from './Components/PrivateRoute'
import Community from './Pages/Community'
import CommunityChat from './Pages/CommunityChat'



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
        <Route 
          path='/community'
          
          element={
            <PrivateRoute>
              <Community/>
            </PrivateRoute>
          }
          />
          <Route
            path='/community/:communityId'
            element={
              <PrivateRoute>
                <CommunityChat/>
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
