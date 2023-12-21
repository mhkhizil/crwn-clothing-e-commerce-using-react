import React from 'react'
import '../button/customButton.style.scss'
const CustomButton = ({children,btnType,...otherProps}) => {
  return (
   <button className={`button-container ${btnType}`}  {...otherProps}>{children}</button>
  )
}

export default CustomButton;
