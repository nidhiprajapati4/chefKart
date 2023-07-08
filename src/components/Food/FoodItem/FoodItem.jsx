import React, { useContext } from 'react';
import CartContext from '../../../store/cart-context';
// import { Link } from "react-router-dom";
import classes from './styles/FoodItem.module.css';
import FoodItemForm from './FoodItemForm';
import microwave from '../../../assets/microwave.png';
import fridge from '../../../assets/fridge.png';
import rightArrow from '../../../assets/rightArrow.png';

const FoodItem = (props) => {
const { name, rating, description, equipments, image, id } = props;
const cartContext = useContext(CartContext);

// const history = useHistory();
  const navigate = () => {
    window.location.href = '/FoodItemDetails';
  }
  const onAddToCart = (quantity) => {
    cartContext.addItem({
      id,
      name,
      rating,
      description,
      equipments,
      image,
      quantity,
    });
  };
  console.log("equipments: " + equipments);
  
  // const navigate = () => { 
  //   history.push('/FoodItemDetails');
  // };

  return (
    <li className={classes.food}>
      <div className={classes.cardLeft} onClick={navigate}>
        <div className={classes.line1}>
          <a href="/FoodItemDetails"> {name} </a>
          <div className={classes.rating}>{rating}</div>
        </div>
        <div></div>
        <div className={classes.line2}>
          <div id='parent' className={classes.ingredients}>
            <div id='child1'>
              <img src={fridge} />
              <img src={microwave} />
            </div>
            <div id='child2'>
              <span className={classes.horizontalLine}></span>
              <span> Ingredients </span>
              <span className={classes.navigation}> View List <img src={rightArrow} /></span>
            </div>
          </div>
        </div>
        <div className={classes.line3}>
          <div className={classes.description}>{description}</div>
        </div>
      </div>
      <div className={classes.cardRight}>
        <div className={classes.image} onClick={navigate}><img src={image}/></div>
        <FoodItemForm onAddToCart={onAddToCart} />
      </div>
    </li>
  );
};

export default FoodItem;
