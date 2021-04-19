import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"

const Categories = props => (
  <StaticQuery
    query={graphql`
      query {
        allBookstoreJson {
          edges {
            node {
              categories
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Layout location="/destinations" title="Destinations">
            <div>{cleandouble(data.allBookstoreJson.edges)}</div>
        </Layout>
      </>
    )}
  />
)

function cleandouble(nodi){
    nodi.forEach(element => {
      //  console.log(element.node.categories)
      console.log("ciao")
    });
}

export default Categories
