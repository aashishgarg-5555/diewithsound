import React from 'react'
import "./Die.css"

function Die(props) {
  return (
        <i className={`die fas fa-dice-${props.face} ${props.rolling && "shaking"}`}></i>
  )
}


export default Die