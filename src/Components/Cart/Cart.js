import React from 'react';
import './Cart.css'

const Cart = (props) => {

    const {cart} = props;

    let total = 0;
    for(const man of cart){
        total = total + man.salary;
    }

    let totalName = ([]);
    for(const man of cart){
        totalName = totalName + man.name+['.   '];
    }

    return (
        <div className="update">
            <h2>Doner Add: {props.cart.length}</h2>

             <h3>Total donate: ${total}</h3>
            
             <h4>Doner name:  {totalName}</h4> 
        </div>
    );
};

export default Cart;