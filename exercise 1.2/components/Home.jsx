import React from 'react'

function Home(props) {
  return (
    <div className='home'>
      <h2 className='home_title'>Dishes</h2>
      <ul className='home_ul'>
        {props.listDishes.map((dish, index) => (
        <li key={index}>
            <p>name: {dish.name}</p>
            <p>description: {dish.description}</p>
            <p>price: {dish.price}</p>
        </li>
       
        ))}
         
      </ul>
  </div>
  )
}

export default Home