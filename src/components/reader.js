import React from 'react'

const Reader = props => {
    return (<div>
        {reader(props.lista , props.prefix )}
    </div> )
    }


function reader(lista,prefix){                                         

    let objReturn= []


    let i = 0
    lista.forEach(elemento => {                                     //ciclo foreach per ogni membro della lista 
       objReturn.push(
           
            <div key={prefix + i.toString()}> {elemento} </div>      
            
        
        )       // visualizza ogni membro della lista
    
        i++
    });

  return objReturn
} 


export default Reader




