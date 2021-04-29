import * as React from "react"
import Navbar from "../components/navbar"
import NavLink from "../components/navlink"
const Layout = ({ location, title, children }) => {

    /* 
    padding distanza dal margine (pypx)
    */
    return (
        <div className="flex flex-col h-screen" >
            
            <header className="py-1 text-center bg-green-900 text-white"> 
                <Navbar />
           </header>

            <main className="bg-white sm:bg-red-50 md:bg-yellow-50 lg:bg-green-50 xl:bg-blue-50 flex-1 overflow-y-auto px-0 py-5 lg:px-6 xl:px-36">
             {children}
            </main>

            <footer className="py-1 text-center bg-green-900 text-white">
            <NavLink
            name = "credits"
            path = "https://www.itssi.it" />
                
            </footer>
         
         
         </div>
    )
}
export default Layout