import Home from './components/Home/Home'
import Header from './components/Header/Header'
import './App.css'

const dishes = [
  {
    id:1,
    name:'plato 1',
    description:'Este es el plato 1',
    price:10
  },
  {
    id:2,
    name:'plato 2',
    description:'Este es el plato 2',
    price:20
  },
  {
    id:3,
    name:'plato 3',
    description:'Este es el plato 3',
    price:15
  }
]

function App() {
 

  return (
<div>
  <Header />
  <Home listDishes={dishes} />
</div>
  )
}

export default App
