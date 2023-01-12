import React from 'react';
import list from "../data";
import "./Home.css";
import Cards from './Cards';

function Home({handleClick} ) {
    return(
        <section>
            {
                list.map((item) => (
                    <Cards item={item} key={item.id} handleClick={handleClick}/>
                ))
            }
        </section>
    );
} 

export default Home;