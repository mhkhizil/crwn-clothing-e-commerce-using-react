import "./category-item.styles.scss"
import React from 'react'

const CategoryItem = ({category:{id,title,imageUrl}}) => {
  return (
    <div key={id} className='category-container'>
    <div className='background-image' style={{
      backgroundImage:`url(${imageUrl})`
    }}/>
  {/* <img alt='category-pics'/> */}
  <div className='category-body-container'>
      <h2>{title}</h2>
      <p>Shop now</p>
  </div>
</div>
  )
}

export default CategoryItem
