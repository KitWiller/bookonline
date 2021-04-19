
import React from 'react'
import Reader from "../components/reader"
import Immagine from './immagine'
import PriceAll from './prezzi'
import StarRating from '../components/starrating'
import Book from '../templates/book'

const BookBox = Book => {   //costruzione componente + ricezione dati da index
    return (
        <div className="flex flex-col items-center" >
        
            <Immagine image={Book.image} alt={Book.alt} scss="-mx-20 -my-10" />

            <div className="items-left ">
  
                <div> <span className="font-extrabold">Rating : </span> <StarRating rating = {Book.rating} /> </div> 
                <div> <span className="font-extrabold"> Lowest Price : </span>  {Book.price}   </div>
                
                <div> <span className="font-extrabold">Formats : </span> </div>
                <Reader  
                lista = {Book.format}
                prefix = "format" />                         
                
                <div>
                    <span className="font-extrabold"> More sellers: </span> 
                    <PriceAll 
                    prices = {Book.prices}
                    price = {Book.price}
                    pcss = "font-extrabold"
                    />
                </div>

            </div>

        </div>)
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