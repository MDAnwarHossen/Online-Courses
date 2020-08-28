import React from 'react';



    const Cart = (props) => {
        const cart = props.cart;
        
        const total = cart.reduce((total,prd) =>total+prd.course_price, 0);
        let discount = 0;
        if (total > 100) {
            discount = total/10;
        }

        const formatNumber = num =>{
            const precision = num.toFixed(2);
            return Number(precision);
        }


        return (
            <div className = "m-1">
                <h5>Order Summery</h5>
                <p>Items Ordered : {cart.length} </p>
                <p>Discount : {formatNumber(discount)}</p>
               <p className ="border-top">Total Price : {formatNumber(total - discount)} </p>
            </div>
        );
    };

export default Cart;