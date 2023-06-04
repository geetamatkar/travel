import { click } from '@testing-library/user-event/dist/click'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
const [click, setClick] = useState(false)

const handleClick = () => setClick(!click)

const closeMobileMenu = () => setClick(false)

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
            <Link to='/' className='navbar__logo'>
                Traventure <i class="fa-solid fa-mountain-sun"></i>
            </Link>
            <div className='menuIcon' onClick={handleClick}>
              <i className={click ? 'fa-solid fa-xmark' : 'fa-sharp fa-solid fa-bars' } />
            </div>

            <ul className={click? 'nav-menu active' : 'nav-menu'}>
              <li className='nav__item'>
                <Link to='/' className='nav__links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>

              <li className='nav__item'>
                <Link to='/services' className='nav__links' onClick={closeMobileMenu}>
                  Services
                </Link>
              </li>

              <li className='nav__item'>
                <Link to='/products' className='nav__links' onClick={closeMobileMenu}>
                  Products
                </Link>
              </li>

              <li className='nav__item'>
                <Link to='/sign-up' className='nav__links-mobile' onClick={closeMobileMenu}>
                  Sign up
                </Link>
              </li>
            </ul>
            

        </div>
      </nav>

    </>
    
  )
}

export default Navbar