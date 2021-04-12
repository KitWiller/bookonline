import React from 'react'

const Reader = props => {
    return (<div>
        {reader(props.lista , props.prefix, props.css)}
    </div> )
    }


function reader(lista,prefix, css){                                         

    let objReturn= []


    let i = 0
    lista.forEach(elemento => {                                     //ciclo foreach per ogni membro della lista 
       objReturn.push(
           
            <div key={prefix + i.toString()} className={css}> {elemento} </div>      
            
        
        )       // visualizza ogni membro della lista
    
        i++
    });

  return objReturn
} 


export default Reader




