import React, { Component } from 'react';
import './styles/App.scss';

import Products from './components/products';
import Cart from './components/cart';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Best Games Shop</h1>
        <div className='shop'>
          <Products />
          <Cart />
        </div>
      </div>
    );
  }
}

export default App;
