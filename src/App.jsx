import { useEffect, useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import Header from './components/Header/header'
import Footer from './components/Footer/Footer'
import {Outlet} from 'react-router-dom'
import './App.css'

function App() {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block '>
        <Header />
        <main>
        TODO:  <Outlet/>
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
