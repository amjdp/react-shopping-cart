import React, {useState} from 'react';
import { useEffect } from 'react';
import "./Cart.css";

function Cart({cart, setCart}) {
    const [price, setPrice] = useState(0);

    const handlePrice = () => {
        let ans = 0;
        cart.map((item) => (
            ans += item.amount * item.price
        ))
        setPrice(ans); // update price
    }

    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);
        handlePrice();
    }

    useEffect(() => {
        handlePrice();
    })

    return(
        <article>
            {
                cart?.map((item) => (
                    <div className="cart_box" key={item.id}>
                        <div className="cart_img">
                            <img src={item.img} />
                            <p>{item.title}</p>
                        </div>
                        <div>
                            <button> + </button>
                            <button>{item.amount}</button>
                            <button> - </button>
                        </div>
                        <div>
                            <span>{item.price}</span>
                            <button onClick={() => handleRemove(item.id)}> Remove </button>
                        </div>
                    </div>
                ))
            }
            <div className="total">
                <span>Total Price of your Cart</span>
                <span>Rs - {price}</span>
            </div>
        </article>

    );
} 

export default Cart;