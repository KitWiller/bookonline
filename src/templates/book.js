import React from "react"

const Book = props => {
    return <div>{JSON.stringify(props.pageContext)}</div>
}

export default Book