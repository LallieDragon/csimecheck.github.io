import React from 'react'
// import { graphql, useStaticQuery, } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <div id="about">
        <h1>About Page</h1>
      </div>
    </Layout>
  )
}

export default About
