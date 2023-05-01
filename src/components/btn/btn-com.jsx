import React from 'react'
import './button.styles.scss'
const BUTTON_TYPE_CLASS={
    google:'google-sign-in',
    inverted:'inverted'
}
const Button = ({children,btnType,...otherprops}) => {

  return (
    <button className={`button-container ${BUTTON_TYPE_CLASS[btnType]}`} {...otherprops}>{children}</button>
  )
}

export default Button