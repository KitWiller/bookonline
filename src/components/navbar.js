import React from "react"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faBars} from '@fortawesome/free-solid-svg-icons'
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import NavLink from "./navlink"
// import { config } from '@fortawesome/fontawesome-svg-core'
// config.autoAddCss = false  -  <FontAwesomeIcon icon={faBars} className="text-gray-400" />  

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  const menuBKPoint = "lg"

  return (
    <nav className={"relative flex flex-wrap items-center justify-between navbar-expand-" + menuBKPoint + " shadow-lg pb-1"}>
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        
        <div className={"w-full relative flex justify-between " + menuBKPoint + ":w-auto " + menuBKPoint + ":static " + menuBKPoint + ":block " + menuBKPoint + ":justify-start"}>

          <Link to="/" title="Home page">
            <div className="inline-block mt-2 font-chivo font-thin align-middle">
              <div className="text-5xl">Books on Line</div>
              <div className="text-2xl">Kids - IT - Ecc.</div>
            </div>
          </Link>

          <button
            key="navL_2"
            className={"cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block " + menuBKPoint + ":hidden outline-none focus:outline-none"}
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >*</button>
        
        </div>

        <div id="example-navbar-danger" className={ menuBKPoint + ":flex flex-grow items-center" + (navbarOpen ? " flex" : " hidden") }>
          <ul className={"flex flex-col " + menuBKPoint + ":flex-row list-none " + menuBKPoint + ":ml-auto"} >
            {getLinks()}
          </ul>
        </div>

      </div>
    </nav>
  )
}

function getLinks() {
  let objReturn = []

  let iCount = 0
  let links = [
    { name: "about us", path: "/about" },
    { name: "categories", path: "/categories" },
    { name: "books", path: "/books" },
    { name: "contact us", path: "/contact" }
  ]
  

  links.forEach(itmLink => {
    objReturn.push(
      <li key={`navR_${iCount.toString()}`} className="nav-item">
        <NavLink name={itmLink.name} path={itmLink.path} css="px-3 py-2 flex items-center text-xs uppercase leading-snug hover:opacity-75" />
      </li>
    )
    
    iCount ++
  })

  return objReturn
}