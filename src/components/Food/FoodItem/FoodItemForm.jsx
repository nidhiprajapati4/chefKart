import React, { useRef, useState } from 'react';

import classes from './styles/FoodItemForm.module.css';

import Input from '../../UI/Input';

const FoodItemForm = (props) => {
  const [formValid, setFormValid] = useState(true);
  const amountInputRef = useRef();

  const { onAddToCart } = props;

  const defaultInput = {
    id: `quantity ${props.id}`,
    type: 'number',
    min: '1',
    max: '5',
    step: '1',
    defaultValue: '1',
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = +amountInputRef.current.value;
    // Check for errors
    if (!enteredAmount || enteredAmount < 1 || enteredAmount > 5) {
      setFormValid(false);
      return;
    }

    onAddToCart(enteredAmount);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <button className={classes.button}>+ Add</button>
    </form>
  );
};

export default FoodItemForm;
