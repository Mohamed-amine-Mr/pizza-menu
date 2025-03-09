import "../style.css"

export function Footer(){
//     const hour = new Date().getHours();
//     const openHour  = 9;
//    const closeHour = 23
  
    //  console.log(("we're curenly open"))
    // else console.log("We are close")
  
  return (
  
  <footer className='footer'> 
  {new Date().toLocaleTimeString()},{} we're curenly open
  </footer>
  )
  
  }