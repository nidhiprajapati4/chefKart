import React from 'react';

import classes from './styles/FoodSummary.module.css';

const FoodSummary = () => {
  return (
    <section className={classes.summary}>
      <h4 className={classes.date}><i class="fa fa-calendar"></i> &nbsp; 21 May 2021</h4>
      <h4 className={classes.time}><i class='far fa-clock'></i> &nbsp; 10:30 Pm - 12:30 Pm</h4>
    </section>
  );
};

export default FoodSummary;
