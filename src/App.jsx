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
   <>
   <p>
      Welcome people to our pizza co in Maroc. We have amazing pizza!
    </p>
        <ul className='pizzas'>
          {pizzas.map((pizza) =>
            // Passing the entire pizza object to the Pizza component
            // This allows the Pizza component to choose what data it needs from the object
            <Pizza pizzaObj={pizza} key={pizza.name}/>
          )}
        </ul>
        </>
        : <p>We're still working on our menu, please come back later.</p>
      
      }
    </main>

  )
}
// We receive the entire pizza object as a prop and then destructure it to access the specific data we need.
function Pizza({pizzaObj}){

  return (
    // condition for styling 
    <li className={`${pizzaObj.soldOut ?"pizza sold-out" :"pizza"}`}> 
    
      <img  src={pizzaObj.photoName} alt={pizzaObj.name}/>
    <li>
      <h3 >{pizzaObj.name}</h3>
      <p>{  pizzaObj.ingredients}</p>
      <span>{pizzaObj.soldOut? <span style={{textTransform:"upperCase"}}>sold out</span>: pizzaObj.price}</span>
    </li>
    </li>
  )
}


