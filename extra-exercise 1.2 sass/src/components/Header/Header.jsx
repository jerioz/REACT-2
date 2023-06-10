import React from 'react'
import './Header.styles.scss' 

const Header = () => {
  return (
  <div>
    <header className= 'header__restaurant'>
        <h1 className='header__restaurant-title'>Restaurant</h1>
        <nav className='menu-nav'>
            <ul className='menu-nav__restaurant-list'>
                <li className='menu-nav__restaurant-item'><a href='#' className='menu-nav__restaurant-link'>Home</a></li>
                <li className='menu-nav__restaurant-item'><a href='#' className='menu-nav__restaurant-link'>Dishes</a></li>
                <li className='menu-nav__restaurant-item'><a href='#' className='menu-nav__restaurant-link'>About</a></li>
            </ul>
        </nav>
    </header>
  </div>
  )
}

export default Header