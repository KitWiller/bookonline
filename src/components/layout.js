import * as React from "react"
import Navbar from "../components/navbar"
import NavLink from "../components/navlink"
const Layout = ({ location, title, children }) => {

    /* 
    padding distanza dal margine (pypx)
    */
    return (
        <div className="flex flex-col h-screen bg-gradient-to-b from-green-400 to-green-900" >
            
            <header className="py-1 px-20 bg-green-900 text-white"> 
                <Navbar />
           </header>

            <main className="flex-1 overflow-y-auto py-9 px-auto sm:px-10 md:px-20 lg:px-30 xl:px-40">
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