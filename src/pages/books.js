import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import StarRating from "../components/starrating"

const Books = props => (
  <StaticQuery
    query={graphql`
      query {
        allBookstoreJson {
          edges {
            node {
              title
              categories
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Layout location="/destinations" title="Destinations">
          {get_Categories(data.allBookstoreJson.edges)}
        </Layout>
      </>
    )}
  />
)

function get_Categories(items) {
  // let categories = {}

  // items.forEach(item => {
  //   let iLen = item.node.categories.length
  //   let title = item.node.title
  //   let categs = item.node.categories
  //   try {
  //     categories[iLen].push({"title": title,"categories":categs})
  //   } catch {
  //     categories[iLen] = []
  //     categories[iLen].push({"title": title,"categories":categs})
  //   }
  // })

  // console.log(JSON.stringify(categories))

  return (<div className="flex flex-wrap -mx-1 overflow-hidden">{[]}</div>)

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
