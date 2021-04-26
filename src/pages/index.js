import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import StarRating from "../components/starrating"


const Home = props => (
  <StaticQuery
    query={graphql`
      query {
        allBookstoreJson {
          edges {
            node {
              title
              isbn10
              isbn13
              image
              rating
              price
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Layout location="/destinations" title="Destinations">
          <div className="flex flex-wrap -mx-1 overflow-hidden">{nodeView(data.allBookstoreJson.edges)}</div>
        </Layout>
      </>
    )}
  />
)



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
        key={"Libro" + i.toString()}                                   //creazione link tramite componente gatsby key, to = href (html) title (anteprima link)
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

export default Home
