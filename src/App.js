
import { useState } from 'react';
import './App.css';
import cartContext from './Component/context/cartContext';
import Layout from './Component/Layout';

function App() {
const [cart , setCart] = useState(null)
  return (
      <cartContext.Provider value={[cart , setCart]}>
    <div className='App'>
     <Layout/>
    </div>
      </cartContext.Provider>
  );
}

export default App;
