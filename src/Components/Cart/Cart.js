import React from 'react';


    const Cart = (props) => {
        const cart = props.cart;
        
        return (
            <div>
                
                <p>Items Ordered : {cart.length} </p>
               
            </div>
        );
    };

export default Cart;