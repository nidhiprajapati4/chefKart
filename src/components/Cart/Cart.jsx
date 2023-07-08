import React from 'react';
import classes from './styles/Cart.module.css';
import Modal from '../UI/Modal';
import orderFood from '../../assets/orderFood.png';
import rightLongArrow from '../../assets/rightLongArrow.png';

const Cart = (props) => {
  const cartItems = (
    <ul>
      {[
        {
          id: 'm1',
          name: 'Sushi',
          description: 'Finest fish and veggies',
          price: 22.99,
        },
      ].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  const { onHideCart } = props;

  return (
    <Modal onClose={onHideCart}>
      <div className={classes.cartBar}>
        <img className={classes.foodIcon} src={orderFood} />
        <span>3 food items selected</span>
        <img className={classes.arrow} src={rightLongArrow} />
      </div>
      <div className={classes.actions}>
      </div>
    </Modal>
  );
};

export default Cart;
