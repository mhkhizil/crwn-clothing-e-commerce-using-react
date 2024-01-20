import React, { useContext } from 'react'

import ProductCard from '../../components/product-card/product-card.component';
import "./shop.style.scss"
import { CategoriesContext } from '../../components/contexts/categories.context';
import CategoryPreview from '../../components/category-preview/category-preview.component';
const Shop = () => {
    const {categoriesMap}=useContext(CategoriesContext);
    console.log(categoriesMap);
  return (
<div className='shop-container'>

        {
        Object.keys(categoriesMap).map(title=>{
          const products=categoriesMap[title];
       return(
       <CategoryPreview key={title} products={products} title={title}/>
       )
        
        })
        
       
        
        }
  

</div>
   
  )
}

export default Shop
