import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import NavbarMenu from "./navbarmenu"
// import Footer from "./footer"

const Layout = (props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div id="layout">
        {props.nav ? null : (
          <NavbarMenu siteTitle={data.site.siteMetadata.title} localId="navbar-menu-layout" />
        )}
        <main className="page">
          {props.children}
        </main>
      </div>
    </>
  )
}

export default Layout
