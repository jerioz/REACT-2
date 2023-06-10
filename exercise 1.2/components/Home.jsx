import React from 'react'
import Photo from '../src/assets/restaurant.jpg'

function Home(props) {
  return (
    <div className='home'>
      <h1>CASA PACA</h1>
      <h2 className='home_title'>Menús del día</h2>
      <ul className='home_ul'>
        {props.listDishes.map((dish, index) => (
        <li key={index}>
            <p>name: {dish.name}</p>
            <p>description: {dish.description}</p>
            <p>price: {dish.price}</p>
        </li>
        ))}
      </ul>
      <div className='photo'>
       <img src={Photo} alt='logo' className='home_photo'/>
       <img src={Photo} alt='logo' className='home_photo'/>
       <img src={Photo} alt='logo' className='home_photo'/>
      </div>
  </div>
  )
}

export default Home