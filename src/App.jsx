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
  return(

    <main className='menu'>
    <h2>Our Menu</h2>
   <ul className='pizzas'>
   {pizzaData.map((pizza)=>
// Passing the entire pizza object to the Pizza component
// This allows the Pizza component to choose what data it needs from the object
   <Pizza  pizzaObj={pizza}   key={pizza.name}/>)}


   </ul>
    </main>
  )
}
// We receive the entire pizza object as a prop and then destructure it to access the specific data we need.
function Pizza({pizzaObj}){
  return (
    <li className='pizza'> 
      <img src={pizzaObj.photoName} alt={pizzaObj.name}/>
    <li>
      <h3 >{pizzaObj.name}</h3>
      <p >{pizzaObj.ingredients}</p>
      <span>{pizzaObj.price}</span>
    </li>
    </li>

  )
}



