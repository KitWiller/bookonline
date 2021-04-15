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

            <main className="sm:bg-red-200 md:bg-blue-200 lg:bg-yellow-200 xl:bg-green-200 flex-1 overflow-y-auto py-9 px-auto sm:px-10 md:px-20 lg:px-30 xl:px-40">
             {children}
            </main>

            <footer className="py-9">

                Footer
            </footer>
         
         
         </div>
    )
}
export default Layout