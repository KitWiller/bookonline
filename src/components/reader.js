import React from 'react'                                               //componente per visualizzare liste/crea link

const Reader = props => {                                               //costruzione componente dichiarazione esistenza, props da dove prendere i dati
    return (<>                                                             
        {                                                               //ricevi parametri inviati al componente da props
        reader (props.lista , props.prefix, props.css, props.isLink, props.mainPath) 
        }    
    </> )
    }


function reader(lista,prefix, css, isLink, mainPath){                    //funzione reader ricevi quello che viene inviato a riga 6                        

    let objReturn= []                                                    // obj return vuoto
    let i = 0                                                            // contatore
    if (isLink === true) {                                               //se esiste il link:
        
        let prefixUrl = "/"                                              //variabile da usare quando non c'è mainpath

        if(mainPath !== "") {                                             //se mainpath esiste:
            prefixUrl += mainPath + "/"                                  //prefixUrl = / + mainpath + /
        }

        lista.forEach(elemento => {                                     //ciclo foreach per ogni membro della lista :
            objReturn.push(                                             //push unisce elementi lista a objreturn
                 <a href={prefixUrl + elemento}                         //se islink esiste crea un link con prefixurl + elemento lista
                 title={"link to " + elemento}                          //titolo = link to + elemento
                 key={prefix + i.toString()}                            // key prefix + contatore.tostring
                className={css}> {elemento} </a>                        // proprietà css (impaginazione padding colori ecc)
             )       
         
             i++             
         });
        
    } else {                                                            //se islink non esiste, visualizza solo lista senza creare link
        lista.forEach(elemento => {                                     //ciclo foreach per ogni membro della lista 
           objReturn.push(
                <div key={prefix + i.toString()} className={css}> {elemento} </div>     //visualizzazione lista [elemento]
            )       
            i++
        });
    }

   

  
  return objReturn
} 


export default Reader                                                             //dichiarazione obbligatoria react per esportare 