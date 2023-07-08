import React from 'react';
import classes from './Header.module.css';
import navigateBack from '../../assets/navigateBack.PNG';

const Header = (props) => {
  const { isDetailsPage } = props;
  const navigateToList = () => {
    window.location.href = '/';
  }

  return (
    <>
      <header className={classes.header}>
        <img src={navigateBack} onClick={navigateToList} />
        <span>{isDetailsPage ? 'Select Dishes': ''}</span>
      </header>
      <div className={classes.headerGap}>
      </div>
    </>
  );
};

export default Header;
