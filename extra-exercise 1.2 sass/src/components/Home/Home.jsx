import React from 'react'
import Photo from '/src/assets/restaurant.jpg'
import './Home.styles.scss'

function Home(props) {
  return (
    <div className='restaurant__restaurant-text'>
      <h1>CASA PACA</h1>
      <h2 className='restaurant__restaurant-title'>Menús del día</h2>
      <ul className='restaurant__restaurant-dishes'>
        {props.listDishes.map((dish, index) => (
        <li key={index}>
            <p>name: {dish.name}</p>
            <p>description: {dish.description}</p>
            <p>price: {dish.price}</p>
        </li>
        ))}
      </ul>
      <div className='restaurant__restaurant-listPhoto'>
       <img src={Photo} alt='logo' className='restaurant__restaurant-photo'/>
       <img src={Photo} alt='logo' className='restaurant__restaurant-photo'/>
       <img src={Photo} alt='logo' className='restaurant__restaurant-photo'/>
      </div>
  </div>
  )
}

export default Home