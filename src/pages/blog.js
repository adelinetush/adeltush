import React from "react"
import {Link, graphql, useStaticQuery } from 'gatsby'

import Layout from "../components/layout"
import blogStyles from './blog.module.scss'

const BlogPage = () => {
    const data = useStaticQuery(graphql `
    query {
        allMarkdownRemark (filter: {fileAbsolutePath: {regex: "/(projects)/"  }}) {
          edges {
            node {
              frontmatter {
                title
                date
                description
                posttype
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `)

    return (
        <Layout>
            <h1>We make games, because there is nothing else.</h1>
            <div className={blogStyles.row}>
              <ol className={blogStyles.posts}>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                      <div className={blogStyles.column}>
                        <li className={blogStyles.post}>
                          <Link to ={`/blog/${edge.node.fields.slug}`} >
                            <h2>{edge.node.frontmatter.title}</h2>
                            <p>{edge.node.frontmatter.date}</p>
                            <p>{edge.node.frontmatter.description}</p>
                          </Link>
                        </li>
                      </div>
                    )
                })}
            </ol>
            </div>
        </Layout>
    )
}

export default BlogPage