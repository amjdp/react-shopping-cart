import React, {useState} from "react";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Home from "./components/Home";

function App() {

  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  return (
    <React.Fragment>
      <Navbar size={cart.length}/>
      <Home/>
      <Cart/>
    </React.Fragment>
  );
}

export default App;
