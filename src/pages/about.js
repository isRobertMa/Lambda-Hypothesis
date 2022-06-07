import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as styles from "../pages/about-css-modules.module.css"
import { siteMetadata } from "../../gatsby-config"

console.log(styles)

const User = props => (
    <div className={styles.user}>
      <img src={props.avatar} className={styles.avatar} alt="" />
      <div className={styles.description}>
        <h2 className={styles.username}>{props.username}</h2>
        <p className={styles.excerpt}>{props.excerpt}</p>
      </div>
    </div>
  )

export default function About({ data }) {
  return (
    <Layout>
      <h1>About {data.site.siteMetadata.title}</h1>
      <User
        username = "Hanshuo/Robert Ma"
        avatar = "https://i.pinimg.com/474x/ed/d7/db/edd7db5d97ce20f53fe0f4ba63ee5317.jpg"
        excerpt = "Undergraduate of University of Toronto. We shall meet in the place where there is no darkness."
      >
      </User>
    </Layout>
  )
}
export const query = graphql `
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
`   