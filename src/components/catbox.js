import React from 'react'

const CatBox = ({ titolo, tagValue, children }) => {                                   //creazione costante componente testo grassetto e large
    return (                                                                            //div che contiene span per non andare a capo
        <div>                                                                           {/* tagname con font modificato tagvalue no */}

            <span className="font-bold text-lg">{titolo}</span>                         
            <span>{tagValue}</span>
            {children}                                                                   {/* children usato per qualsiasi oggetto che non sia una stringa */}
                                                                                        {/* <UpBold> tutto quello che c'è dentro = children </UpBold> */}

        </div>
    )
}
export default CatBox
