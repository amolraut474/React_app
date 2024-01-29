// ProductList.js
import React from 'react';
import './Products.css'
import { Link } from 'react-router-dom';
import products from './ProductDeta';

const ProductList = () => {
  return (
    <div class="product-list-section">
      {/* <h2>Products List</h2> */}
      <div class='container'>
        <div class="row">
        <ul>
        {products.map((product) => (
          <li key={product.id}>
            
            <Link to={`/products/${product.id}`}><img src={product.imageUrl}/>{product.name}<h2 class='price'>{product.product_price}</h2></Link>
            
            
          </li>
        ))}
      </ul>
        </div>
      </div>
      
    </div>
  );
};

export default ProductList;