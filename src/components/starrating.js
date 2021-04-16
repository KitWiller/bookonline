import React from 'react'                              
import Immagine from '../components/immagine'

const StarRating = props => {
    return (<div>
        {getRating(props.rating)}
    </div>)
}

function getRating(rating) {                                           //costruzione rating stelle
let objReturn = []
let nomeStella = ""
let nomeimg = ""                                                   // creazione variabile nome stella 
for (let i = 0; i <= 4; i++) {                                     //ciclo per visualizzare fino a 5 stelle
    if (i < rating) {
        nomeStella = "Stella on"
        nomeimg = "star.png"
    } else {
        nomeStella = "Stella off" 
        nomeimg = "star0.png"
    }                                                 // se i è minore di rating la stella è on


    objReturn.push(            //push la funzione obj return
    <Immagine scss="inline-block" key={"star_" + i.toString()} image={"https://itbook.store/img/" + nomeimg} alt={nomeStella} />
    )


                                                            //inline block per mettere le img in orizzontali invece che in verticale(anche su immagine.js)
}
return objReturn //ritorna funzione

}

export default StarRating