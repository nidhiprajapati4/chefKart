import React from 'react';
import classes from './Header.module.css';

const Header = (props) => {
  const { onShowCart } = props;

  return (
    <>
      <header className={classes.header}>
        <h3>Select Dishes</h3>
      </header>
      <div className={classes['main-image']}>
      </div>
    </>
  );
};

export default Header;
