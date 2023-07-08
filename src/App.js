import React, { useState } from 'react';

// State
import CartProvider from './store/CartProvider';
import Main from './Main'
// Components
import Header from './components/Layout/Header';
import Cart from './components/Cart/Cart';
import Food from './components/Food/Food';

const App = () => {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };
  return (
    <div>
      <CartProvider>
        {showCart && <Cart onHideCart={hideCartHandler} />}
        <Header isDetailsPage={true} />
        <main>
          <Main />
        </main>
      </CartProvider>
      <Cart />
    </div>
  );
};

export default App;
