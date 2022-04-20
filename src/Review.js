import React from 'react'

import {FaQuoteRight} from 'react-icons/fa'

const Review = ({image, name, title, quote, position}) => {

    return (
        <article className={`review ${position.position}`}>  
            <img src={image} alt={name} />
            <h1>{name}</h1>
            <h4>{title}</h4>
            <p>{quote}</p>
            <FaQuoteRight className='quote'/>
        </article>
    )
}

export default Review