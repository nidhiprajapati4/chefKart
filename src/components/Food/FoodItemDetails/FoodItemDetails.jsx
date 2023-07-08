import {React, useEffect} from 'react';
import foodDetailsHeader from '../../../assets/foodDetailsHeader.png';
import hourIcon from '../../../assets/hourIcon.PNG';
import downArrow from '../../../assets/downArrow.PNG';
import Refrigerator from '../../../assets/Refrigerator.PNG';
import classes from './styles/FoodItemDetails.module.css';
import Header from '../../Layout/Header';

const FoodItemDetails = (props) => {

  const DUMMY_FOOD_DETAILS = [
  [{
    "heading":"Vegetables",
    "name": "Cauliflower",
    "quantity": '01 Pc'
  },
  {
    "heading":"Vegetables",
    "name": "Tomato",
    "quantity": '10 Pc'
  },
  {
    "heading":"Vegetables",
    "name": "Spinach",
    "quantity": '1/2 Kg'
  }],
  [{
    "heading":"Spices",
    "name": "Coriander",
    "quantity": '100 gram'
  },
  {
    "heading":"Spices",
    "name": "Mustard Oil",
    "quantity": '1/2 liters'
  }]];
  const foodDetails = DUMMY_FOOD_DETAILS.map((details) => {
    return (
      <div>
            <Header isDetailsPage={false} />
            <div className={classes.header}>
              <span>
                {details[0].heading}({details.length})  
              </span>
              <img src={downArrow} />
              
            </div>
             {details.map((item, i) => {     
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

    );
  });

  const { name, rating, description, equipments, image, id } = props;
  return (
    <div className={classes.foodDetails}>
      <div className={classes.foodDetailsHeader}>
        <span>Masala Muglai</span>
        <span>4.2 *</span>
        <span>Mughlai Masala is a style of cookery developed in the Indian Subcontinent by the imperial kitchens of the Mughal Empire.</span>
        <span><img src={hourIcon} /> 1 Hour </span>
        <img className={classes.image} src={foodDetailsHeader}/>
      </div>

      <div className={classes.content}>
        <h2>Ingredients</h2>
        <span>For 2 people</span>
        <span className={classes.partition}></span>
        <div className={classes.category} >
            {foodDetails}
        </div>
      </div>

      <div className={classes.footer}>
        <h2>Appliances</h2>
        <img className={classes.image} src={Refrigerator}/>
        <span className={classes.applianceText}></span>
        <img className={classes.image} src={Refrigerator}/>
        <span className={classes.applianceText}></span>
        <img className={classes.image} src={Refrigerator}/>
        <span className={classes.applianceText}></span>
      </div>

    </div>
  );
};

export default FoodItemDetails;


                      
                      
                      
        {/* <Collapse defaultActiveKey={['1']}>
          <Panel header="antdCollapseHeader 1" key="1">
            <p>123</p>
          </Panel>
        </Collapse> */}
        