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
            <div>{JSON.stringify(data)}</div>
        </Layout>
      </>
    )}
  />
)

export default Categories
