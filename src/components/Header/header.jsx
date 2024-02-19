import React from 'react'
import { container as Container, Logo, Logoutbtn } from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function header() {
  const authStatus = useSelector(state => state.auth.status)
  
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'home',
      slug: '/',
      active: true,
    },
    {
      name: "login",
      slug: '/login',
      active: !authStatus,
    },
    {
      name: 'signup',
      slug: '/signup',
      active: !authStatus,
    },
    {
      name: 'all posts',
      slug: '/all-posts',
      active: authStatus,
    },
    {
      name: 'add post',
      slug: '/add-post',
      active: authStatus,
    },
  ]

  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px' />
            </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item) => 
              item.active? (
                <li key={item.name}>
                  <button id={item.name}
                  onClick={() => navigate(item.slug)}
                  className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                  >{item.name}</button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                < Logoutbtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default header
