import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Reader from "../components/reader"
import BookBox from "../components/bookbox"

const sQuery =`                                                                               
query {                                                                                          
  allBookstoreJson {                                                                               
    edges {
      node {
        title
        isbn10
        isbn13
        categories
        image
        rating
        price                                                                                         
      }
    }
  }
}                                                             
`

const Categories = props => (                                                                        //lettura dati dalla sorgente (file o api)
    <StaticQuery                                                                                      //ed inserimento dentro (scatolone)props
        query={graphql(sQuery)}                                                                                            //lettura mappa fino a categories
        render={data => (                                                                         //render comando usato per costruire qualcosa con i dati forniti sopra, insieme chiamato data qui
            <>                                                                                   
                <Layout>
                    <div>{cleandouble(data.allBookstoreJson.edges)}</div>                          {/*visualizzo ciò che è stato elaborato da cleandouble*/}
                </Layout>
            </>
        )}
    />
)

function cleandouble(nodi) {                                                                   //funzione che crea una lista dei nodi 
    let lista = []                                                                             //variabile vuota
    nodi.forEach(element => {                                                                  //per ogni nodo (element nome fittizio)
        let categorie = element.node.categories                                                 //categorie = percorso per arrivare alla mappa

        categorie.forEach(categoria => {                                                        //per ogni categoria
            if (! lista.includes(categoria)) {                                                  // se la lista NON include quella categoria
                lista.push(                                                                     //aggiungi alla lista questa categoria
                    categoria       
                )
            }

        });


    });

    lista.sort() 
    console.log(lista.length)                                                               //ordina per ordine alfabetico reverse alfabetico inverso

    return (<Reader                                                              //uso componente reader per creare ed associare i link alla lista di categorie
        lista={lista}
        prefix="categoria_"
        isLink={true}
        mainPath="categories"
        css = "px-4"
    />)


}

export default Categories
