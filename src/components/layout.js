import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import Header from "./header"
import "../styles/global.css"

export default function Layout({ children }) {
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
  return (  
    <div className="layout">
      <Header /> 
      <div className="content">
        {children} 
        <footer>
          <p>Copyright &#169;  Hanshuo Ma 2021. Made with Gatsby.</p>
        </footer>
      </div>
    </div>
    
    
    
  )
}