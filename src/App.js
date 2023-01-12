import React, {useState} from "react";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Home from "./components/Home";

function App() {

  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    // check whether this cart is already added or not
    let isPresent = false;     
    cart.forEach((product) => {
      if (item.id === product.id)
      isPresent = true;
    })
    if (isPresent)
    return;
    // if not added push this item to cart
    setCart([...cart, item])
  }

  return (
    <React.Fragment>
      <Navbar size={cart.length}/>
      <Home handleClick={handleClick} />
      <Cart/>
    </React.Fragment>
  );
}

export default App;
