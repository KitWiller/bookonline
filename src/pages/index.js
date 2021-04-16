import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"

const Home = props => (
  <StaticQuery
    query={graphql`
      query {
        allBookstoreJson {
          edges {
            node {
              title
              isbn10
              isbn13
              image
              rating
              price
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Layout location="/destinations" title="Destinations">
          <div>{JSON.stringify(data.allBookstoreJson.edges)}</div>
        </Layout>
      </>
    )}
  />
)

export default Home
