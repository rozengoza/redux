import { createContext, useState } from 'react'
import NavBar from './Layout/Navbar';
import Shop  from './Components/Shop';
import { Provider } from 'react-redux';
import CompA from './useContextAPI/CompA';

const FirstName= createContext('Bozen');

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{display:'flex', flexDirection:'column', justifyContent:'flex-start', alignItems:'flex-start', height:'100%', backgroundColor: '#E0E0E0'}}>
      
    <FirstName.Provider value={'Rozen Shrestha'}>
    <CompA/>
    </FirstName.Provider>
    <NavBar/>
    <Shop/>
    </div>
  )
}

export default App;
export { FirstName };
