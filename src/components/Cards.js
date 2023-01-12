import React from 'react';
import "./Cards.css";

function Cards({item, handleClick}) { // pass item as props

    const {title, author, price, img} = item;

    return(
        <div className="cards">
        <div className="image_box">
            <img src={img} alt="image" />
        </div>
        <div className="details">
            <p>{title}</p>
            <p>{author}</p>
            <p>Price - {price}Rs</p>
            <button onClick={() => handleClick(item)}>Add to Cart</button>
        </div>
    </div>
    );
} 

export default Cards;