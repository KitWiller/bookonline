import React from 'react'

const PriceAll = props => {
    return (<div>
        {getPrices(props.prices , props.price , props.pcss)}
    </div> )
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
        console.log()*/
        i++
    });

    return objReturn
}

export default PriceAll