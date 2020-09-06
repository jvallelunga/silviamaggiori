import React from 'react';
import ReactDOM from 'react-dom';
import Component from './component';

// PRODUCTS
export default () => {
  const wrapper = document.querySelector('[value="Consultar precio"]');
  if (wrapper) {
    const parent = wrapper.parentElement;
    const productPrice = document.createElement('div');
    
    wrapper.remove();
    parent.appendChild(productPrice);
    
    ReactDOM.render(<Component />, productPrice);
  }
}
