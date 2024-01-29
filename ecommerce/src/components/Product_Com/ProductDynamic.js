// ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import products from './ProductDeta';

const ProductDynamic = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId, 10));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
     <img src={product.imageUrl}/>
      <h2>{product.name}</h2>
      <h2 class='price'>{product.product_price}</h2>
      <p>{product.description}</p>
    </div>



  );
};

export default ProductDynamic;