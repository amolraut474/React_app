import React from 'react';
import '../components/Home_Com/Home.css';
import Banner_Slider from '../components/Home_Com/Banner_Slider';
import Card from '../components/Home_Com/Card';
import ProductList from '../components/Product_Com/ProductList';
import Collection from '../components/Collection_Com/Collection';
import ProductApp from'../components/P_Com/ProductApp';
export default function Home() {
  return (
    <div>
     <Banner_Slider/>
     <Card/>
     <h1 class="Home-Page-Product-title">Exclusive Products</h1>
     <ProductList/>
     <Collection/>
     <ProductApp/>
    </div>
  )
}
