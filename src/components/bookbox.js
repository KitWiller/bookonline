
import React from 'react'
import Immagine from './immagine'

const BookBox = props => {   //costruzione componente + ricezione dati da index
    return (
        <div>
            {props.title}  <br />
            <div> {getRating(props.rating) }  </div> <br />  
            {props.price}   <br />
            <ul>{getFormat(props.format)}</ul>                           
            <Immagine image={props.image} alt={props.alt} />
            {getPrices(props.prices, props.price) }
        </div>)
                                                                    // ul unordered list elenco puntato
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


function getFormat(format){                                         
    let objReturn= []


    let i = 0
    format.forEach(formato => {                                     //ciclo foreach per ogni membo della lista formats
       objReturn.push(
           
            <li key={"format_" + i.toString()}> {formato} </li>      
            // <li></li> elemento di lista elenco puntat 
        
        )       // ID div format + format che contiene ad ogni giro di ciclo uno dei valori della lista
    
        i++
    });

  return objReturn
} 

function getPrices(prezzi, lowest){
    let objReturn = []
   
    let i = 0
    let lcss = ""

    prezzi.forEach(prezzo => {                              
        if(lowest === prezzo.price) {                   //se il prezzo più basso === variabile price (prezzo più basso)
            lcss = "bg-red-600 text-white"              //sfondo rosso solo per il prezzo più basso
        } else {
            lcss = ""
        } 
        

 
        objReturn.push(                                            //sfondo rosso prezzo basso class name = lcss
        <div key={"price_" + i.toString()} className={lcss}>      
            <span> {prezzo.store} </span> - 
            <span> {prezzo.price} </span>
            
        </div>)
        
        /*console.log(prezzo.store + i.toString())
        console.log(prezzo.price)
        console.log()*/
        i++
    })

    return objReturn
}                        

export default BookBox

//"https://itbook.store/img/star.png" 