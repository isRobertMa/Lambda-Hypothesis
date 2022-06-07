import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"

export default function Header() {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return( 
    <nav>
      <Link to="/">
      <p>{data.site.siteMetadata.title}</p>
      </Link>
      <div className = "links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  )
}