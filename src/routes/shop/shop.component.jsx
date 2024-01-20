import React, { useContext } from 'react'

import ProductCard from '../../components/product-card/product-card.component';
import "./shop.style.scss"
import { CategoriesContext } from '../../components/contexts/categories.context';
const Shop = () => {
    const {categoriesMap}=useContext(CategoriesContext);
    console.log(categoriesMap);
  return (
<>

        {
        Object.keys(categoriesMap).map(title=>{
       return(
        <>
        <h1>{title}</h1>
        <div className='products-container'>
        {
          categoriesMap[title]?.map((product)=>(
          <ProductCard key={product.id} product={product}/>
          ))
      } 
        </div>
        </>
       )
        
        })
        
       
        
        }
  

</>
   
  )
}

export default Shop
