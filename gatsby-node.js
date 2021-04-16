const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const dataSource = "books"
  const templates = path.resolve(`./src/templates`)
  const component = `${templates}/book.js`

  const result = await graphql(getQuery(dataSource))
  const books = result.data.allBookstoreJson.edges

  books.forEach(item => {

    createPage({
      path: `/${dataSource}/${item.node.isbn13}`,
      component,
      context: item.node,
    })

  })

}



function getQuery(name, param="") {
  let sReturn = ""

  switch (name) {
    case "books":
      sReturn = `
          query {
            allBookstoreJson {
              edges {
                node {
                  author
                  categories
                  description
                  format
                  image
                  isbn10
                  isbn13
                  lang
                  pages
                  price
                  prices {
                    price
                    store
                  }
                  publisher
                  rating
                  subtitle
                  title
                  url
                  year
                }
              }
            }
          }`
      break

    default:
    // code block
  }

  return sReturn
}
