import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import RichMan from '../RichMan/RichMan';
import './Total.css'

const Total = () => {
    const [persons, setPerson] = useState ([]);

    const [cart,setCart] = useState ([]);

    useEffect(() => {
        fetch('./persons.JSON')
        .then(res => res.json())
        .then(data => setPerson(data))
    },[])

    const addToCart = (person) => {
     const newCart = [...cart, person,]
     setCart(newCart);
    }

    return (
        <div className="total-container">

          <div className="person-container">
           
            {
                persons.map(person => <RichMan 
                  man={person}
                  key={person.img}
                  addToCart={addToCart}
                  ></RichMan>)
            }
          </div>
        
          <div className="add-container">
          
         <Cart cart={cart}></Cart>
          </div>
        </div>
    );
};

export default Total;