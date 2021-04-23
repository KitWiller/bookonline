import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import StarRating from "../components/starrating"



let library = {}
let assegnazioni = {}

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
    `}
    render={data => (
      <>
        <Layout location="/destinations" title="Destinations">
          {get_Risultato(data.allBookstoreJson.edges)}
        </Layout>
      </>
    )}
  />
)


function get_Risultato(items) {

  items.forEach(item => {

    let libro = item.node
    let iTot = libro.categories.length
    if (iTot > 0) {
      libro.categories.forEach(cat => {
        set_Libro (libro.title, libro.rating, cat)
      });
    } else {
      set_Libro (libro.title, libro.rating, "non_definito")
    }
  })

  console.log(JSON.stringify(library))
  return (<div className="flex flex-wrap -mx-1 overflow-hidden">{[]}</div>)
}

// 

function get_Categories(items) {
  let categories = {}

  // Daniel
  items.forEach(item => {
    let iLen = item.node.categories.length
    let title = item.node.title
    let categs = item.node.categories
    let rtn = item.node.rating
    let obj = { "title": title, "rating": rtn, "categories": categs }
    try {
      categories[iLen].push(obj)
    } catch {
      categories[iLen] = []
      categories[iLen].push(obj)
    }
  })


  Object.keys(categories).forEach(function (item, index) {
    let keylist = categories[item]
    keylist.forEach(libro => {
      let totcategories = libro.categories.length               // variabile = numero di categorie dentro libro
      if (totcategories > 0) {
        libro.categories.forEach(cat => {
          set_Libro (libro.title, libro.rating, cat)

          
        });
      } else {
        set_Libro (libro.title, libro.rating, "non_definito")
      }

    });                                                         //keylist = insieme + chiave

  })


  console.log(JSON.stringify(library))



  return (<div className="flex flex-wrap -mx-1 overflow-hidden">{[]}</div>)

}

function set_Assegnazione(titolo, categoria){
  try {
    assegnazioni[categoria].push(titolo)
  } catch {
    assegnazioni[categoria] = [titolo]
  }
}

function set_Libro (titolo, rating, categoria) {
  const libro = {
    titolo,
    rating
  }
 
  try {
    if (rating > library[categoria].rating) {
      library[categoria] = libro
      set_Assegnazione(titolo, categoria)
    }
  } catch {
    library[categoria] = libro
    set_Assegnazione(titolo, categoria)
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
