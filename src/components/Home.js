import React from 'react';
import list from "../data";
import "./Home.css";
import Cards from './Cards';

function Home() {
    return(
        <section>
            {
                list.map((item) => (
                    <Cards item={item}/>
                ))
            }
        </section>
    );
} 

export default Home;