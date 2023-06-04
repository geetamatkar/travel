import { click } from '@testing-library/user-event/dist/click'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
const [click, setClick] = useState(false)

const handleClick = () => setClick(!click)

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
            

        </div>
      </nav>

    </>
    
  )
}

export default Navbar