import "../style.css"

export function Footer(){
    const hour = new Date().getHours();
    const openHour  = 11;
   const closeHour = 23
   const isOpen = hour >=openHour && hour <= closeHour  
  return (
  
  <footer className='footer'> 
{isOpen ?
<Order data={closeHour}/> 
: 
<p>we're curenly Close until {openHour}:00 AM </p>
}
  </footer>
)
  
  
  }


  function Order(data){
    
  return (
      <div className="order"> 
  <p>we're curenly open until {data.closeHour}:00 PM. Come visit us or order online. </p>
  <button className="btn">order</button>
  </div>

  )

  }
  