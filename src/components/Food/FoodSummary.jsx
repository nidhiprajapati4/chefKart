import React, { useState, useEffect} from 'react';
import CustomCalender from '../CustomCalender/CustomCalender';
import classes from './styles/FoodSummary.module.css';
import axios from 'axios'
import Header from '../Layout/Header';

const FoodSummary = () => {
  const API_URI_DISHES = 'https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/';
  const [dishesData, setDishesData] = useState([])
  const getDishes = async () => {
    try {
      const fetchData = await axios.get(API_URI_DISHES, {
        headers: {
          authorization: 'Bearer JWT Token',
        },
      })
      setDishesData(fetchData.data["popularDishes"]);
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    window.addEventListener('load',getDishes);
    return () => {
      window.removeEventListener('load', getDishes)
    }
  }, [])
  
  const dishesList = dishesData.map((dish) => {
    const { name, image, id } = dish;
    return (
      <div className={classes.item}>
        <img id={id} src={image} alt={name} />
        <span>{name}</span>
      </div>
    );
  });
  return (
    <div>
    <Header isDetailsPage={true} />
    <section className={classes.summary}>
      <CustomCalender />
      <div className={classes.category}>
        <div className={classes.content}>
          <button className={classes.foodCategoryButton}>Italian</button>
          <button className={classes.foodCategoryButton}>Indian</button>
          <button className={classes.foodCategoryButton}>South Indian</button>
          <button className={classes.foodCategoryButton}>Mexican</button>
          <button className={classes.foodCategoryButton}>Asian</button>
          <button className={classes.foodCategoryButton}>Thai</button>
        </div>
      </div>

      <div className={classes.popularDishes}>
        <h3>Popular Dishes</h3>

        <div className={classes.dishes}>
          {dishesList}
        </div>
      </div>

    </section>
    </div>

  );
};

export default FoodSummary;
