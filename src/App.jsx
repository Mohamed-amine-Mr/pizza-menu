import React from 'react'
import "./style.css"
 const App = () => {
  return (
    <div className='container'>
    <Header className=""/>
    <Menu/>
    <Footer/>
    </div>
  )
}
export default App

function Header(){
  const style = {}
  return <header className='header'>
  <h1 className='' style={style} >Fast React Pizza Co.</h1>

  </header>
}
function Menu(){
  return(
    <main className='menu'>
    <h2>Our Menu</h2>
    <Pizza name="Pizza Funghi" ingredients="Tomato, mozarella, mushrooms, and onion" photoName="pizzas/funghi.jpg"price={12}/>
    <Pizza name="Pizza Fungsshi" ingredients="Tomato, mozarella, mushrooms, and onion" photoName="pizzas/spinaci.jpg"price={12}/>
  
    </main>
  )
}
// reseave props
// props obj made of the props that we pass to pizza component 
function Pizza(props){
  console.log(props)
  return (
    // lets replace the values using props
    <div className='pizza'> 
      <img src={props.photoName} alt={props.name}/>
    <div>
        <h3 className=''>{props.name}</h3>
    <p className="">{props.ingredients}</p>
    <span>{props.price}</span>
   
   </div>
   </div>

  )
}




function Footer(){
  const hour = new Date().getHours();
  const openHour  = 9;
 const closeHour = 23

//  if (hour >= openHour &&hour <= closeHour  )alert("we're curenly open")

return (

<footer className='footer'> 
{new Date().toLocaleTimeString()}, we're curenly open
</footer>
)

}