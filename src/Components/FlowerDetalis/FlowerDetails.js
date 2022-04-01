import React from 'react';

const FlowerDetails = (props) => {
    return (
        <div>
        <h1>
        {props.flower.name}
      </h1>
      <img src={props.flower.img} className="imageDetails"/>
      </div>
    );
};

export default FlowerDetails;