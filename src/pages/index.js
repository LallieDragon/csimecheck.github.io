import React from "react"
// import { Link } from "gatsby"
import {
  MDBContainer,
  // MDBBtn,
  // MDBIcon,
  // MDBRow,
  // MDBCol,
  // MDBBadge,
} from "mdbreact"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MDBContainer id="home">
      <h1>Home Page</h1>
    </MDBContainer>
  </Layout>
)

export default IndexPage
