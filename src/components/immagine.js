import React from 'react'


const Immagine = props => {
    return ( <img src={props.image} alt={props.alt} className={props.scss} /> )
}


export default Immagine

