import React from 'react';

import FoodItem from './FoodItem/FoodItem';
import Card from '../UI/Card';
import classes from './styles/FoodList.module.css';

const DUMMY_FOOD = [
  {
    name: "Masala Mughlai",
		rating: 4.2,
		description: "Chicken fried in deep tomato sauce with delicious spices",
    equipments: ["Refrigerator"," ", "Microwave"],
	  image: "https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg",
		id: 1
  },
  {
		name: "Masala Paneer",
		rating: 4.3,
		description: "Paneer tossed in gravy",
		equipments: ["Microwave"],
		image: "https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg",
		id: 2
	},
  {
    name: "Masala Mughlai",
		rating: 4.2,
		description: "Chicken fried in deep tomato sauce with delicious spices",
    equipments: ["Refrigerator"," ", "Microwave"],
	  image: "https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg",
		id: 1
  },
  {
		name: "Masala Paneer",
		rating: 4.3,
		description: "Paneer tossed in gravy",
		equipments: ["Microwave"],
		image: "https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg",
		id: 2
	}
];

const FoodList = () => {
  const foodList = DUMMY_FOOD.map((food) => {
    const { name, rating, description, equipments, image, id } = food;
    return (
      <FoodItem
        key={id}
        name={name}
        rating={rating}
        equipments={equipments}
        description={description}
        image={image}
        id={id}
      />
    );
  });
  return (
    <section className={classes.food}>
      <Card>
        <div>
          <h2 style={{paddingLeft:"15px"}}>Recommended &nbsp; 
          <button type='dropdn'><i class="fa fa-caret-down"></i></button>
          </h2>
        </div>
        <div className={classes.menu}>
        <button type='text' className={classes.menubutton}>Menu</button>
        </div>
        {foodList}
      </Card>
    </section>
  );
};

export default FoodList;
