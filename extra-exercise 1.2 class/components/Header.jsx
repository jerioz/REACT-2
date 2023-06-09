import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
        <div>
        <header className= 'header'>
            <h1 className='header_title'>Restaurant</h1>
            <nav className='header_nav'>
                <ul className='header_nav-ul'>
                    <li className='header_nav-li'><a href='#'>Home</a></li>
                    <li className='header_nav-li'><a href='#'>Dishes</a></li>
                    <li className='header_nav-li'><a href='#'>About</a></li>
                </ul>
            </nav>
        </header>
      </div>
    )
  }
}

export default Header