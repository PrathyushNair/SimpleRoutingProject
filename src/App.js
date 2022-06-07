
import './App.css';
import {Routes,Route} from "react-router-dom"
import { Navbar } from './Components/Navbar';
import { Home } from './Components/Home';
import { Products } from './Components/Products';
import { Proddetail } from './Components/Proddetail';
import {Error} from './Components/Error';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="" element={<Home/>}></Route>
        <Route path="products" element={<Products/>}></Route>
        <Route path="products/:id" element={<Proddetail/>}></Route>
        <Route path="*" element={<Error/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
