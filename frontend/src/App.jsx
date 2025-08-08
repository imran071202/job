import { useState } from 'react'
import Navbar from './components/shared/Navbar'


import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/auth/login'
import SignUp from './components/auth/SignUp'
import Jobs from './components/Jobs'
import Footer from './components/Footer'
import Browes from './components/Browes'


const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
    
  },
  {
    path:'/signup',
    element:<SignUp/>
  },
  {
    path:'/jobs',
    element:<Jobs/>
  },
  {
    path:'/browes',
    element:<Browes/>
  },
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
     <RouterProvider router={appRouter}/>
     
    </>
  )
}

export default App
