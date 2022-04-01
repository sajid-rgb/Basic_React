import React from 'react';

const Flower = (props) => {
    
    const addToCart = (id) => {
        props.setFlower(id);

    }
    return (
        <div>
            <img src={props.d.img} alt="no img" className="image"/>
            <div className="des">
            <button onClick={()=>addToCart(props.d)}> add to cart    </button>
            <h1>Name: {props.d.name}</h1>
            <p>Des: {props.d.description}</p>
            <p>Price: {props.d.price}</p>
              </div>

            </div>
    );
};

export default Flower;