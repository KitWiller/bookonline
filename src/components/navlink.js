import React from 'react'
import { Link } from "gatsby"

function NavLink(props) {
    const name = props.name
    const path = props.path
    const css = props.css
    const linkPrefix = "Link to: "

    if (path.includes("http")) {
        return <a key={props.key} href={path} className={css} title={linkPrefix + name} target="_blank" rel="noreferrer">{name}</a>
    } else {
        return <Link key={props.key} to={path} className={css} title={linkPrefix + name}>{name}</Link>
    }
}

export default NavLink