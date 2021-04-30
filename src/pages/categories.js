import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Reader from "../components/reader"
import BookBox from "../components/bookbox"

const Categories = props => {
    props=[
        ".net-framework",
        "administration",
        "asp",
        "basic",
        "for-dummies",
        "linux",
        "network",
        "security",
        "software",
        "ubuntu",
        "business",
        "soa",
        "c#",
        "c++",
        "java",
        "programming",
        "python",
        "google",
        "ide",
        "design",
        "games-development",
        "framework",
        "microsoft",
        "patterns",
        "audio",
        "flex",
        "project",
        "testing",
        "microsoft-word",
        "graph",
        "microsoft-access",
        "api",
        "facebook",
        "media",
        "twitter",
        "wi-fi",
        "agile",
        "ios",
        "xcode",
        "mac",
        "seo",
        "ajax",
        "asp.net",
        "microsoft-excel",
        "mvc",
        "visual-studio",
        "wpf",
        "database",
        "ibm",
        "oracle",
        "server",
        "windows",
        "html",
        "perl",
        "soap",
        "xml",
        "nutshell",
        "ruby",
        "actionscript",
        "flash",
        "css",
        "head-first",
        "mobile",
        "analytics",
        "mysql",
        "php",
        "yahoo",
        "scala",
        "microsoft-office",
        "3d",
        "hack",
        "tuning",
        "regular-expressions",
        "vb",
        "wordpress",
        "visual-basic",
        "android",
        "iphone",
        "sams-teach-yourself",
        "sql",
        "html5",
        "ipad",
        "sharepoint",
        "cloud",
        "sap",
        "phone-development",
        "css3",
        "jquery",
        "angular",
        "docker",
        "json",
        "apache",
        "apache-spark",
        "big-data",
        "machine-learning",
        "outlook",
        "subversion",
        "gis",
        "dom",
        "javascript",
        "javafx",
        "optimization",
        "objective-c",
        "visualization",
        "amazon-kindle-fire",
        "app-store",
        "raspberry-pi",
        "indesign",
        "photoshop",
        "blockchain",
        "lego",
        "opengl",
        "eclipse",
        "sdk",
        "cocoa",
        "django",
        "unity",
        "jira",
        "vba",
        "hadoop",
        "mapreduce",
        "powershell",
        "shell",
        "arduino",
        "in-action",
        "backbone",
        "mongodb",
        "node",
        "node.js",
        "hacking",
        "hibernate",
        "spring",
        "angularjs",
        "nosql",
        "training-kit",
        "lisp",
        "neural-networks",
        "websocket",
        "playstation",
        "xbox",
        "mariadb",
        "active-directory",
        "hyper-v",
        "aws",
        "ethereum",
        "matlab",
        "clojure",
        "citrix",
        "microsoft-azure",
        "cisco",
        "postgresql",
        "freebsd",
        "bash",
        "fonts",
        "numpy",
        "tensorflow",
        "drupal",
        "ejb",
        "bsd",
        "rails"
    ]
    return (
        <div>
            categories
        </div>
    )
}





/*

const Categories = props => (                                                                        //lettura dati dalla sorgente (file o api)
    <StaticQuery                                                                                      //ed inserimento dentro (scatolone)props
        query={graphql(`                                                                               
        query {                                                                                          
          allBookstoreJson {                                                                               
            edges {
              node {
                title
                isbn10
                isbn13
                categories
                image
                rating
                price                                                                                         
              }
            }
          }
        }                                                             
        `)}                                                                                            //lettura mappa fino a categories
        render={data => (                                                                         //render comando usato per costruire qualcosa con i dati forniti sopra, insieme chiamato data qui
                                                                                                    visualizzo ciò che è stato elaborato da cleandouble
            <>                                                                                   
                <Layout>
                    <div>{cleandouble(data.allBookstoreJson.edges)}</div>
                </Layout>
            </>
        )}
    />
)

function cleandouble(nodi) {                                                                   //funzione che crea una lista dei nodi 
    let lista = []                                                                             //variabile vuota
    nodi.forEach(element => {                                                                  //per ogni nodo (element nome fittizio)
        let categorie = element.node.categories                                                 //categorie = percorso per arrivare alla mappa

        categorie.forEach(categoria => {                                                        //per ogni categoria
            if (! lista.includes(categoria)) {                                                  // se la lista NON include quella categoria
                lista.push(                                                                     //aggiungi alla lista questa categoria
                    categoria       
                )
            }

        });


    });

    lista.sort() 
    console.log(lista.length)                                                               //ordina per ordine alfabetico reverse alfabetico inverso

    return (<Reader                                                              //uso componente reader per creare ed associare i link alla lista di categorie
        lista={lista}
        prefix="categoria_"
        isLink={true}
        mainPath="categories"
        css = "px-4"
    />)


}

*/


export default Categories