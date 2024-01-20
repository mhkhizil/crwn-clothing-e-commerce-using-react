import "./directory-item.styles.scss"
import React from 'react'

const DirectoryItem = ({category:{id,title,imageUrl}}) => {
  return (
    <div key={id} className='directory-item-container'>
    <div className='background-image' style={{
      backgroundImage:`url(${imageUrl})`
    }}/>
  {/* <img alt='category-pics'/> */}
  <div className='body'>
      <h2>{title}</h2>
      <p>Shop now</p>
  </div>
</div>
  )
}

export default DirectoryItem
