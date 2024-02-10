import React from 'react'

const Product1 = (props) => {
  return (
    <>
<div className="col">
            <img src={props.image} className="img-fluid" alt="" />
            <div className="section4b">
 <p className="text-secondary">{props.title}</p>
<a href="">{props.description}</a>
<p>{props.price}</p>
<p className='detailspages' onClick={props.onClick}>more details</p>
                </div>
                </div>
    </>
  )
}

export  {Product1}