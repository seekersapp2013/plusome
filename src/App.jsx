import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import PrivateRoutes from './utils/PrivateRoutes'
import Room from './pages/room.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import { AuthProvider } from './utils/AuthContext.jsx'



function App() {


  return (
    
      <Router>
        
        <AuthProvider>
          
          <Routes>
              <Route path="/login" element={<LoginPage/>}/>
              <Route path="/register" element={<RegisterPage/>}/>
                <Route element={<PrivateRoutes/>}>
                    <Route path="/" element={<Room/>}/>
                </Route>
          </Routes>
        </AuthProvider>
      </Router>
    
  )
}

export default App
