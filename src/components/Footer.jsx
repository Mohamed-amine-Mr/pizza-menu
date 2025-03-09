import "../style.css"

export function Footer(){
    const hour = new Date().getHours();
    const openHour  = 11;
   const closeHour = 23
   const isOpen = hour >=openHour && hour <= closeHour  
  return (
  
  <footer className='footer'> 

{isOpen && 
<div className="order"> 
  <p>we're curenly open until {closeHour}:00. Come visit us or order online. </p>
  <button className="btn">order</button>
  </div>
}
  </footer>
)
  
  
  }