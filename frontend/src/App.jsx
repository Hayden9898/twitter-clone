import{ Route,Routes } from "react-router-dom"

import HomePage from "./pages/home/HomePage"
import SignUpPage from "./pages/auth/signup/SignUpPage"
import LoginPage from "./pages/auth/login/LoginPage"
import Sidebar from "./components/common/Sidebar"
import RightPanel from "./components/common/RightPanel"

function App() {
  return (
    <>
      <div className='flex max-w-6xl mx-auto'>
        {/* Common component, not wrapped in routes */}
        <Sidebar /> 
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
        <RightPanel />
      </div>
    </>
  )
}

export default App
