import React, { useContext } from 'react';

import CartContext from '../../../store/cart-context';

import classes from './styles/FoodItem.module.css';
import FoodItemForm from './FoodItemForm';

const FoodItem = (props) => {
  const { name, rating, description, equipments, image, id } = props;
  const cartContext = useContext(CartContext);

  const onAddToCart = (amount) => {
    cartContext.addItem({
      name, 
      rating, 
      description, 
      equipments, 
      image, 
      id
    });
  };

  return (
    <li className={classes.food}>
      <div>
        <h3>{name}</h3>
        <br></br>
        <div className={classes.rating}>{rating}*</div>
        <br></br>
        <div>{equipments}</div>
        <br></br>
        <div className={classes.description}>{description}</div>
      </div>
      <div>
      <img src={image} className={classes.dishesimg}></img>
        <FoodItemForm onAddToCart={onAddToCart} />
      </div>
    </li>
  );
};

export default FoodItem;
