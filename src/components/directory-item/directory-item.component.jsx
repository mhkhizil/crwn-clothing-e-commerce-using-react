import "./directory-item.styles.scss"
import React from 'react'
import {useNavigate} from 'react-router-dom'
const DirectoryItem = ({category:{id,title,imageUrl,route}}) => {
  const nav=useNavigate();
  const onNavigateHandler=()=>nav(route);
  return (
    <div key={id} className='directory-item-container' onClick={onNavigateHandler}>
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
