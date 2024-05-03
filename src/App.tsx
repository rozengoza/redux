import { useState } from 'react'
import NavBar from './Layout/Navbar';
import Shop  from './Components/Shop';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{display:'flex', flexDirection:'column', justifyContent:'flex-start', alignItems:'flex-start', height:'100%', backgroundColor: '#E0E0E0'}}>
    <NavBar/>
    <Shop/>
    </div>
  )
}

export default App
