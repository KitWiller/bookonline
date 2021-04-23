import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import StarRating from "../components/starrating"



let library = {}                                                          //creazione libreria(oggetto) vuota (contenitore)
let assegnazioni = {}                                                     //creazione oggetto vuoto per assegnazioni

const Books = props => (                                                   
  <StaticQuery
    query={graphql`
      query {
        allBookstoreJson {
          edges {
            node {
              title
              rating
              categories
            }
          }
        }
      }
    `}                                                                          //query trasferita da grafiql (fino ad edges)
    render={data => (
      <>
        <Layout location="/destinations" title="Destinations">
          {get_Categories(data.allBookstoreJson.edges)}                            {/*invia insieme(data.allbookstorejson.edges) alla funzione get categories */}
        </Layout>
      </>
    )}
  />
)                                                                                 //inserimento query da grafiql dentro la variabile data

function gene(){
  console.log("ciao")
}

function get_Categories(items) {                                                  //funzione che riceve l'insieme data.allbookstorejson.edges
  let categories = {}                                                             // variabile oggetto vuoto categories

  // Daniel
  items.forEach(item => {                                                         //foreach per ogni item               
    let iLen = item.node.categories.length                                        //creazione variabile numero categorie libro
    let title = item.node.title                                                   //creazione variabile titolo del libro
    let categs = item.node.categories                                             //creazione variabile categorie per libro
    let rtn = item.node.rating                                                    //creazione variabile rating per libro 
    let obj = { "title": title, "rating": rtn, "categories": categs }             //creazione obj variabile con chiave "title" valore title creata a riga 44 chiave rating chiave categories
    try {                                                                         //try
      categories[iLen].push(obj)                                                  //appendi obj alla lista categories con chiave "numero categorie"
    } catch {                                                                     //se non esiste quella chiave fallisce e 
      categories[iLen] = []                                                       //crea la chiave richiesta con valore lista vuota
      categories[iLen].push(obj)                                                  //esegui nuovamente l'inserimento
    }
  })


  Object.keys(categories).forEach(function (item, index) {                         //crea una lista delle chiavi presenti dentro l'oggetto (orgCategories.json) poi foreach
    let keylist = categories[item]                                                 //keylist = insieme + chiave
    keylist.forEach(libro => {                                                     // per ogni libro dentro keylist
      let totcategories = libro.categories.length                                  // totcategories = numero di categorie dentro libro
      if (totcategories > 0) {                                                     //se le categorie dentro libro sono > 0 
        libro.categories.forEach(cat => {                                          //per ogni cat dentro il libro
          set_Libro (libro.title, libro.rating, cat)                               // esegui set libro con titolo rating e categorie di quel libro

          
        });
      } else {
        set_Libro (libro.title, libro.rating, "non_definito")                       //oppure esegui set libro ma la categoria non è definita
      }

    });                                                         

  })


  console.log(JSON.stringify(assegnazioni))                                              //visualizza a schermo il contenuto di library



  return (<div className="flex flex-wrap -mx-1 overflow-hidden">{[]}</div>)

}

function set_Assegnazione(titolo, categoria){                                           //funzione assegnazione si aspetta un titolo e categoria
  try {               
    assegnazioni[categoria].push(titolo)                                                //inserisci titolo libro dentro chiave categoria 
  } catch {                                                                             //se la chiave categoria non esiste
    assegnazioni[categoria] = [titolo]                                                  //crea la chiave ed inserisce la lista con il primo dei titoli
  }
}

function set_Libro (titolo, rating, categoria) {                                        //funzione set libro che si aspetta titolo rating e categoria
  const libro = {                                                                       //creo un'oggetto libro che contiene titolo e rating
    titolo,
    rating
  }                                                                                     //se il nome della chiave è uguale al nome della variabile, si può evitare di scrivere chiave : {valore}
 
  try { 
    if (rating > library[categoria].rating) {                                           // se il rating del libro ricevuto è > di quello assegnato alla categoria
      library[categoria] = libro                                                        // assegna il libro ricevuto a quella categoria
      set_Assegnazione(titolo, categoria)                                               //esegui set assegnazione con nuovo titolo e stessa categoria
    }
  } catch {                                                                             //se fallisce il confronto per mancanza di dati
    library[categoria] = libro                                                          //crea la chiave categoria dentro library e gli assegna il libro
    set_Assegnazione(titolo, categoria)                                                 //richiama set assegnazione con libro e categoria
  }
}

/*

<div className="flex flex-wrap -mx-1 overflow-hidden">{nodeView(data.allBookstoreJson.edges)}</div>

function getIsbn(isbn13, isbn10){                  //funzione se isbn13 non è vuoto ritorna isbn13 altrimenti ritorna 1sbn10
  let isbn = isbn13
  if (isbn13 === "" ) {
      isbn = isbn10
  } 

  return isbn
}

function nodeView(nodi){                                                   //funzione che visualizza i libri(lista) dentro book.js, prende i dati da riga 26
    let i = 0                                                              // contatore
    let objReturn = []                                                     // obj return lista vuota

    nodi.forEach(item => {                                                 //per ogni "nodi" crea un oggetto di nome item
      let libro = item.node
      let path = "/books/"                                                 // libro = item.node ( percorso per i nodi dei libri riga 10)
      objReturn.push(                                                      //push dentro objreturn ogni titolo del libro 
        <Link className="my-1 mx-4 p-4 w-1/6 overflow-hidden rounded-md bg-gradient-to-r from-green-500" 
        key={"Libro" + i.toString}                                   //creazione link tramite componente gatsby key, to = href (html) title (anteprima link)
        to={path + getIsbn(libro.isbn13, libro.isbn10)}                    //localhost8080/books/isbnlibro   + richiamo funzione che trova  isbn
        title={"link to " + libro.title }>
        {libro.title}
        <StarRating rating = {libro.rating} />
        {libro.price}
        </Link>
        
       
       
       
      )
      i++                                                                   //autoincremento contatore
    }) 
    return objReturn
}

*/

export default Books
