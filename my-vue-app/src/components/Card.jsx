import React from 'react'

export const CardBlue = () => {
  return (
    <div>Card</div>
  )
}


const Card = (props) => {
    console.log("Card props: ", props);
    const {data} = props;
  return (
    <div>Card {props.data} {props.time} {props.id} </div>
  )
}

export default Card