import React from 'react';
import classes from './button.module.css'

const FetchMoreButton = (props) => {
  return(
    <button className={classes.myButton} {...props}>Fetch More</button>
  )
}

export default FetchMoreButton;