import React, { useState, useEffect} from 'react';

import FoodItem from './FoodItem/FoodItem';
import Card from '../UI/Card';
import classes from './styles/FoodList.module.css';
import axios from 'axios'

const FoodList = () => {
  const API_URI_ALL_DATA = 'https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/';
  const [allData, setAllData] = useState([])
  const getAllData = async () => {
    try {
      const fetchData = await axios.get(API_URI_ALL_DATA);
      setAllData(fetchData.data["dishes"]);
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    window.addEventListener('load', getAllData);
    return () => {
      window.removeEventListener('load', getAllData)
    }
  }, [])
  

  const foodList = allData.map((food) => {
    const { id, name, description, image, equipments, rating } = food;
    return (
      <FoodItem
        key={id}
        id={id}
        name={name}
        description={description}
        image={image}
        rating={rating}
        equipments={equipments}
      />
    );
  });
  return (
    <section className={classes.food}>
      <Card>{foodList}</Card>
    </section>
  );
};

export default FoodList;
