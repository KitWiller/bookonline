import React from "react"
import Layout from "../components/layout"
import BookBox from "../components/bookbox"
import Reader from "../components/reader"
import UpBold from "../components/upperbold"
import Book from "../templates/book"


export default function Home(){
    return (
		<Layout>
			  
            <div className="flex flex-wrap overflow-hidden lg:-mx-1">
               
                <div className="w-full overflow-hidden lg:my-1 lg:px-1 lg:w-1/3 bg-blue-900 text-white">
                    <BookBox 
                    image={Book.image}     //invio dei dati al bookbox da costruire
                    alt={"coverimage " + Book.title} 
                    price={Book.price} 
                    rating={Book.rating}
                    title={Book.title}
                    format={Book.format}
                    prices={Book.prices}
                    img={Book.img}
                    />
                </div>

              
                <div className="w-full overflow-hidden lg:my-1 lg:px-8 lg:py-8  lg:w-2/3  bg-yellow-400 ">
                   <div className="font-bold text-3xl capitalize text-center"> {Book.title} </div> 
                    {getSub(Book.subtitle, "italic capitalize text-lg font-bold")}
                    <UpBold tagName = "ISBN: " tagValue = {getIsbn(Book.isbn13, Book.isbn10)} />
                    <UpBold tagName = "Autore: " tagValue = {Book.author} />
                    <UpBold tagName = "Anno: " tagValue = {Book.year} />
                    <UpBold tagName = "Pagine: " tagValue = {Book.pages} />
                    <UpBold tagName = "Categories: ">
                        <Reader 
                        lista = {Book.categories}
                        prefix = "categories"
                        css = "inline-block pr-2" 
                        isLink = {true}
                        mainPath = "categories" /> 
                    </UpBold>
                    <UpBold tagName = "Description: " tagValue = {Book.description} />
                    
                </div>
            
            </div>
  
		</Layout>
	)
    function getSub(subtitle, css) {                   //funzione se esiste il sottotitolo visualizzalo altrimenti ""
        let objReturn = ""

        if (subtitle !== "" ) {
            objReturn = <div > 
                <span className={css}>Sottotitolo: </span>
                {subtitle} 
            </div> 
        }
    
        return objReturn
    }

    function getIsbn(isbn13, isbn10){                  //funzione se isbn13 non è vuoto ritorna isbn13 altrimenti ritorna 1sbn10
        let objReturn = isbn13
        if (isbn13 === "" ) {
            objReturn = isbn10
        } 

     return (<span> {objReturn} </span>)
    }
   
}