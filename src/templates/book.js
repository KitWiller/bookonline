import React from "react"
import Layout from "../components/layout"
import BookBox from "../components/bookbox"
import Reader from "../components/reader"
import UpBold from "../components/upperbold"


const Book = props => {
    const page = props.pageContext
    return (
        <Layout>
            {JSON.stringify(page)}
            <div className="flex flex-wrap overflow-hidden lg:-mx-1">                                  {/*contenitore spalla + contenuto*/}


                <div className="w-full overflow-hidden lg:my-1 lg:px-1 lg:w-1/3 bg-blue-900 text-white"> {/*inizio spalla*/}
                    <BookBox
                        image={page.image}     //invio dei dati al bookbox da costruire
                        alt={"coverimage " + page.title}
                        price={page.price}
                        rating={page.rating}
                        title={page.title}
                        format={page.format}
                        prices={page.prices}
                        img={page.img}
                    />
                </div>                                                                                     {/*fine spalla*/}


                <div className="w-full overflow-hidden lg:my-1 lg:px-8 lg:py-8  lg:w-2/3  bg-yellow-400 ">            {/*inizio contenuto*/}
                    <div className="font-bold text-3xl capitalize text-center"> {page.title} </div>
                    {getSub(page.subtitle, "italic capitalize text-lg font-bold")}
                    <UpBold tagName="ISBN: " tagValue={getIsbn(page.isbn13, page.isbn10)} />
                    <UpBold tagName="Autore: " tagValue={page.author} />
                    <UpBold tagName="Anno: " tagValue={page.year} />
                    <UpBold tagName="Pagine: " tagValue={page.pages} />
                    <UpBold tagName="Categories: ">
                        <Reader
                            lista={page.categories}
                            prefix="categories"
                            css="inline-block pr-2"
                            isLink={true}
                            mainPath="categories" />
                    </UpBold>
                    <UpBold tagName="Description: " tagValue={page.description} />

                </div>                                                                                     {/*fine contenuto*/}

            </div>
        </Layout>
    )






}
function getSub(subtitle, css) {                   //funzione se esiste il sottotitolo visualizzalo altrimenti ""
    let objReturn = ""

    if (subtitle !== "") {
        objReturn = <div >
            <span className={css}>Sottotitolo: </span>
            {subtitle}
        </div>
    }

    return objReturn
}

function getIsbn(isbn13, isbn10) {                  //funzione se isbn13 non è vuoto ritorna isbn13 altrimenti ritorna 1sbn10
    let objReturn = isbn13
    if (isbn13 === "") {
        objReturn = isbn10
    }

    return (<span> {objReturn} </span>)
}
export default Book