import * as React from "react"
const Layout = ({ location, title, children }) => {

    /* 
    padding distanza dal margine (pypx)
    */
    return (
        <div className="flex flex-col h-screen" >


            <header className="py-1"> 
                Header
           </header>

            <main className="bg-white sm:bg-red-900 md:bg-blue-900 lg:bg-yellow-900 xl:bg-green-900 flex-1 overflow-y-auto py-9 px-60">
               
             {children}
            </main>

            <footer className="py-9">

                Footer
            </footer>
         
         
         </div>
    )
}
export default Layout