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
import NavbarMenu from "../components/navbarmenu"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout nav="no">
    <SEO title="Home" />
    <MDBContainer id="home">
      <NavbarMenu />
    </MDBContainer>
  </Layout>
)

export default IndexPage
