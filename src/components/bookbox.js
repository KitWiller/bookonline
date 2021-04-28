import React from "react"
import Reader from "../components/reader"
import Immagine from "./immagine"
import PriceAll from "./prezzi"
import StarRating from "../components/starrating"

const BookBox = Book => {
  //costruzione componente + ricezione dati da index

  let cssTop = "rounded-tl-2xl"
  let cssBottom = "rounded-bl-2xl"
  let cssWidth = "w-full"
  let cssSpaces = ""
  let borderColor = Book.bgColor.replace("bg-", "")
  const borderSize = 4

  if (! Book.format && ! Book.prices) {
    cssTop = "rounded-t-2xl"
    cssBottom = "rounded-b-2xl"
    cssWidth = "w-48"
    cssSpaces = "my-1 px-1"
  }

  return (
    <div className={"flex flex-col items-center " + cssSpaces}>
      <Immagine
        image={Book.image}
        alt={Book.alt}
        scss={cssWidth + " " + Book.bgColor + " " + cssTop}
      />

      <div className={"flex flex-wrap -mx-1 overflow-hidden " + cssWidth + " border-r-" + borderSize + " border-l-" + borderSize + " border-" + borderColor + " bg-white"}>
        {get_Details(Book.format, Book.prices, Book.price)}
      </div>

      <div className={"flex flex-wrap -mx-1 overflow-hidden " + cssWidth + " " + Book.bgColor + " pb-2 " + cssBottom  }>
        <div className="my-1 px-1 w-1/2 overflow-hidden pl-3">
          <StarRating rating={Book.rating} />
        </div>
        <div className="my-1 px-1 w-1/2 overflow-hidden pr-3 text-right">
          {Book.price}
        </div>
      </div>
    </div>
  )
}

function get_Details(format, prices, price) {

  if (format && format.length > 0 || prices && prices.length > 0) {
    return (
      <>
        <div className="my-1 px-1 w-1/2 overflow-hidden pl-3">
          <span className="font-extrabold">Formats : </span>
          <Reader lista={format} prefix="format" />
        </div>
        <div className="my-1 px-1 w-1/2 overflow-hidden pr-3 text-right">
          <span className="font-extrabold"> More sellers: </span>
          <PriceAll prices={prices} price={price} pcss="font-extrabold" />
        </div>
      </>
    )
  } else {
    return <></>
  }
}

export default BookBox
