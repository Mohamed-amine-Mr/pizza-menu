import React from 'react'
import {Footer}from "./components/Footer"
import {Header}from "./components/Header"
import "./style.css"
import pizzaData from "./data"
 
const App = () => {
  return (
    <div className='container'>
    <Header/>
    <Menu/>
    <Footer/>
    </div>
  )
}
export default App

function Menu(){
const pizzas = pizzaData
// in case when data are not availble
const numPizzas = pizzas.length
  return(
    <main className='menu'>
    <h2>Our Menu</h2>
    {numPizzas > 0 ? 

   <ul className='pizzas'>
    {pizzas.map((pizza)=>
      // Passing the entire pizza object to the Pizza component
      // This allows the Pizza component to choose what data it needs from the object
    <Pizza pizzaObj={pizza}   key={pizza.name}/>)}
   </ul>
      : <p>we're still working on our menu, PLease come back later</p>}
    </main>
     
  )
}
// We receive the entire pizza object as a prop and then destructure it to access the specific data we need.
function Pizza({pizzaObj}){
 
  // if(pizzaObj.soldOut){
  //   return  null
  // }
  return (
    <li className='pizza'> 
    
      <img  src={pizzaObj.photoName} alt={pizzaObj.name}/>
    <li>
      <h3 >{pizzaObj.name}</h3>
      <p >{pizzaObj.ingredients}</p>
      <span>{pizzaObj.price}</span>
    </li>
    </li>
  )
}


