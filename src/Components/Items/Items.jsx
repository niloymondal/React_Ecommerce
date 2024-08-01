import React from 'react';
import './Items.css'

const Items = (props) => {
  return (
    <div className='items'> 
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="items-prices">
        <div className="items-prices-new">
            ${props.new_price}
        </div>
        <div className="items-prices-old">
        ${props.old_price}
        </div>
      </div>
    </div>
  );
}

export default Items;
