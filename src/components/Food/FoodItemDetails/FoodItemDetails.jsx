import {React, useEffect, useState} from 'react';
import foodDetailsHeader from '../../../assets/foodDetailsHeader.png';
import hourIcon from '../../../assets/hourIcon.PNG';
import downArrow from '../../../assets/downArrow.PNG';
import Refrigerator from '../../../assets/Refrigerator.PNG';
import classes from './styles/FoodItemDetails.module.css';
import axios from 'axios'

const FoodItemDetails = (props) => {

  const API_URI_DISH = 'https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/1';
  const [dish, setDishData] = useState([])
  const getDishData = async () => {
    try {
      const fetchData = await axios.get(API_URI_DISH);
      setDishData(fetchData.data);
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    window.addEventListener('load', getDishData);
    return () => {
      window.removeEventListener('load', getDishData)
    }
  }, [])
  
  const { rating, description, id } = props;
  return (
    <div className={classes.foodDetails}>
      <div className={classes.foodDetailsHeader}>
        <span>{dish.name}</span>
        <span>{rating} *</span>
        <span>Chicken fried in deep tomato sauce with delicious spices</span>
        <span><img src={hourIcon} /> {dish.timeToPrepare} </span>
        <img className={classes.image} src={foodDetailsHeader}/>
      </div>
      
      <div>
            <div className={classes.header}>
              <span>Vegetables({dish?.ingredients?.vegetables?.length})</span>
              <img src={downArrow} />
              
            </div>
             {dish?.ingredients?.vegetables?.map((item, i) => {     
               return (          
               <div>    
                <div className={classes.data}>
                <div>
                    <span className={classes.items}>{item.name}</span>
                    <span className={classes.items}>{item.quantity}</span>
                  </div>
                </div>
              </div>
        )})}
    </div>

    <div>
            <div className={classes.header}>
              <span>Spices({dish?.ingredients?.spices?.length})</span>
              <img src={downArrow} />
              
            </div>
             {dish?.ingredients?.spices?.map((item, i) => {     
               return (          
               <div>    
                <div className={classes.data}>
                <div>
                    <span className={classes.items}>{item.name}</span>
                    <span className={classes.items}>{item.quantity}</span>
                  </div>
                </div>
              </div>
        )})}
    </div>

    <h2>Appliances</h2>
      <div className={classes.footer}>
        {dish?.ingredients?.appliances?.map((item, i) => {     
               return (          
               <div>    
                <img className={classes.image} src={Refrigerator}/>
                <span className={classes.applianceText}>{item.name}</span>
              </div>
        )})}
      </div>

    </div>
  );
};

export default FoodItemDetails;
