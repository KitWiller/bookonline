import React from "react"
import Layout from "../components/layout"
import BookBox from "../components/bookbox"
import Reader from "../components/reader"



export default function Home() {
	let props =  {
        "title": "linux all-in-one for dummies, 6th edition",
        "subtitle": "8 mini books chock full of linux!",
        "isbn13": "9781119490463",
        "price": "$23.82",
        "image": "https://itbook.store/img/books/9781119490463.png",
        "url": "https://itbook.store/books/9781119490463",
        "prices": [
            {
                "store": "amazon",
                "price": "$23.82"
            },
            {
                "store": "betterworldbooks",
                "price": "$32.84"
            },
            {
                "store": "ebay",
                "price": "$31.85"
            },
            {
                "store": "ebooks.com",
                "price": "$43.67"
            }
        ],
        "rating": 4,
        "author": [
            "emmett dulaney"
        ],
        "publisher": "wiley",
        "year": "2018",
        "pages": "560",
        "lang": "english",
        "format": [
            "paper book",
            "ebook (pdf)",
            "ebook",
            "hardcover",
            "paperback"
        ],
        "isbn10": "1119490464",
        "description": "inside, over 800 pages of linux topics are organized into eight task-oriented mini books that help you understand all aspects of the latest os distributions of the most popular open-source operating system in use today. topics include getting up and running with basics, desktops, networking, internet services, administration, security, scripting, linux certification, and more. \n\nthis new edition of linux all-in-one for dummies has a unique focus on ubuntu, while still including coverage of debian, red hat, suse, and others. the market is looking for administrators, and part of the qualifications needed for job openings is the authentication of skills by vendor-neutral third parties (comptia/linux professional institute) - and that's something other books out there don't address.\n\ninstall and configure peripherals, software packages, and keep everything current; connect to the internet, set up a local area network (including a primer on tcp/ip, and managing a local area network using configuration tools and files); browse the web securely and anonymously; get everything you need to pass your entry-level linux certification exams.",
        "categories": [
            ".net-framework",
            "administration",
            "asp",
            "basic",
            "for-dummies",
            "linux",
            "network",
            "security",
            "software",
            "ubuntu"
        ],
        "img": "../../img/9781119490463.png"
    }
	return (
		<Layout>
			  
            <div className="flex flex-wrap overflow-hidden lg:-mx-1">
               
                <div className="w-full overflow-hidden lg:my-1 lg:px-1 lg:w-1/3 bg-blue-900 text-white">
                    <BookBox 
                    image={props.image}     //invio dei dati al bookbox da costruire
                    alt={"coverimage " + props.title} 
                    price={props.price} 
                    rating={props.rating}
                    title={props.title}
                    format={props.format}
                    prices={props.prices}
                    img={props.img}
                    />
                </div>


                <div className="w-full overflow-hidden lg:my-1 lg:px-1 lg:w-2/3 bg-yellow-400">
                   <div> Titolo : {props.title} </div> 
                    {getSub(props.subtitle, "italic bg-red-600")}
                    <div> {getIsbn(props.isbn13, props.isbn10) }</div>
                    <div> Author : {props.author }</div>
                    <div> Year : {props.year }</div>
                    <div> Pages : {props.pages }</div>
                    <div className= "pr-2 float-left">Categories :</div>
                    <Reader
                    lista = {props.categories}
                    prefix = "categories"
                    css = "inline-block pr-2" />
                    <div className= "pr-2 float-left">Description : </div> 
                    <div> {props.description} </div> 
                    
                </div>
            
            </div>
  
		</Layout>
	)
    function getSub(subtitle, css) {                   //funzione se esiste il sottotitolo visualizzalo altrimenti ""
        let objReturn = ""

        if (subtitle !== "" ) {
            objReturn = <div className= {css}> Sottotitolo : {subtitle} </div>
        }
    
        return objReturn
    }

    function getIsbn(isbn13, isbn10){                  //funzione se isbn13 non è vuoto ritorna isbn13 altrimenti ritorna 1sbn10
        let objReturn = isbn13
        if (isbn13 === "" ) {
            objReturn = isbn10
        } 

     return (<div> ISBN : {objReturn} </div>)
    }
   
}


/* 


            Title : {props.title} <p></p>
            Subtitle : {props.subtitle} <p></p>
            Issbn13: {props.isbn13} <p></p>
            Issbn10: {props.isbn10} <p></p>
            Publisher: {props.publisher} <p></p>
            Year: {props.year} <p></p>
            Lang: {props.lang} <p></p>
            Pages: {props.pages} <p></p>
            <br></br>
            <p>&nbsp;</p>     

            Authors: <p></p>
            <Reader
            
            lista = {props.author}
            prefix = "author"
            
            />

            <hr />
            <p></p>     

            Categories: <p></p>

            <Reader
            
            lista = {props.categories}
            prefix = "categories"
            
            />

            <hr />





            <div className="flex flex-wrap -mx-1 overflow-hidden"> 
                <div className="my-1 px-1 overflow-hidden w-full lg:1/6 xl:1/6">
				
               
				<BookBox 
                image={props.image}     //invio dei dati al bookbox da costruire
				alt={"coverimage " + props.title} 
				price={props.price} 
				rating={props.rating}
				title={props.title}
				format={props.format}
                prices={props.prices}
                img={props.img}
				/>
				
			    </div>
                <div className="my-1 px-1 overflow-hidden w-full lg:5/6 xl:5/6 text-white bg-blue-500"> Description : + {props.description}  </div>
            </div>  

*/


