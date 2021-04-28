import React from "react"
import Reader from "../components/reader"
import Immagine from "./immagine"
import PriceAll from "./prezzi"
import StarRating from "../components/starrating"

const BookBox = Book => {
  //costruzione componente + ricezione dati da index

  return (
    <div className="flex flex-col items-center">
      <Immagine
        image={Book.image}
        alt={Book.alt}
        scss={"w-full " + Book.bgColor + " rounded-tl-2xl"}
      />

      <div className="flex flex-wrap -mx-1 overflow-hidden w-full bg-white">
        <div className="my-1 px-1 w-1/2 overflow-hidden pl-3">
          <span className="font-extrabold">Formats : </span>
          <Reader lista={Book.format} prefix="format" />
        </div>
        <div className="my-1 px-1 w-1/2 overflow-hidden pr-3 text-right">
          <span className="font-extrabold"> More sellers: </span>
          <PriceAll
            prices={Book.prices}
            price={Book.price}
            pcss="font-extrabold"
          />
        </div>
      </div>

      <div className={"flex flex-wrap -mx-1 overflow-hidden w-full " + Book.bgColor + " pb-2 rounded-bl-2xl"}>
        <div className="my-1 px-1 w-1/2 overflow-hidden pl-3">
          <StarRating rating={Book.rating} />
        </div>
        <div className="my-1 px-1 w-1/2 overflow-hidden pr-3 text-right">
          {Book.price}
        </div>
      </div>
    </div>
  )
  // ul unordered list elenco puntato
}

/*
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

function getPrices(prezzi, lowest, pcss){
    let objReturn = []
   
    let i = 0
    let lcss = ""
    
    prezzi.forEach(prezzo => {                              
        if(lowest === prezzo.price) {                   //se il prezzo più basso === variabile price (prezzo più basso)
            lcss = pcss + " bg-red-600 text-white"              //sfondo rosso solo per il prezzo più basso
        } else {
            lcss = pcss
        } 

    
       
            
        

 
        objReturn.push(                                            //sfondo rosso prezzo basso class name = lcss
        <div key={"price_" + i.toString()} className={lcss}>      
            <span> {prezzo.store} </span> - 
            <span> {prezzo.price} </span>
            
        </div>)
        
        /*console.log(prezzo.store + i.toString())
        console.log(prezzo.price)
        console.log()
        i++
    })

    return objReturn
}  
*/

export default BookBox

//"https://itbook.store/img/star.png"
