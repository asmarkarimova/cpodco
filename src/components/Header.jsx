import React from 'react'
import './Header.scss'
const Header = () => {
  return (
   <>
   <header>
    <div className='containerhead'>
        <div className='head'>
            <h1>Podca</h1>
            <div className='headul'>
                <ul className=''>
                    <li>Home</li>
                    <li>Dropdown</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    </div>
   </header>
   </>
  )
}

export default Header