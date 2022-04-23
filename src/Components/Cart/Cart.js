import React, {useContext} from 'react';
import {AppContext} from '../../App';
import {Link} from 'react-router-dom';

const Cart = () => {
    const {setCart, cart} = useContext(AppContext);
    console.log(cart);
    const removeFromCart = (id) => {
        const newCart = cart.filter(item => item.idMeal !== id);
        setCart(newCart);
    }
    return (
        <div>
           {
               cart.length > 0 ? cart.map(meal =><div className="d-flex">
                    <h1>{meal.strMeal}</h1>
                    <button onClick={()=> removeFromCart(meal.idMeal)}>Remove</button>
                   
                   </div>): <div>Please browse some food <Link to ="/home">Browse here..</Link> </div>
           }
        </div>
    );
};

export default Cart;