import React, {useState} from "react";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Home from "./components/Home";
import "./App.css";

function App() {

  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (item) => {
    // check whether this cart is already added or not
    let isPresent = false;     
    cart.forEach((product) => {
      if (item.id === product.id)
      isPresent = true;
    })
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      },2000);
      return;
    }
    // if not added push this item to cart
    setCart([...cart, item])
  }

  // d for operator ( "+"" or "-" )
  const handleChange = (item, d) => { 
    console.log(item, d);    
  }

  return (
    <React.Fragment>
      <Navbar size={cart.length} setShow={setShow} />
      {/* state - to switch the screen between card component and product component */}
      {
        show ? <Home handleClick={handleClick} /> : <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      }
      <Home handleClick={handleClick} />
      <Cart cart={cart} setCart={setCart} />
      {/* warning - if item is already added to cart  */}
      {
			warning && <div className='warning'>Item is already added to your cart</div>
		  }
    </React.Fragment>
  );
}

export default App;
