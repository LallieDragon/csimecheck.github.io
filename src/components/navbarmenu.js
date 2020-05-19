import React, { useState } from "react"
import { graphql, useStaticQuery, } from "gatsby"
import { Link } from "gatsby"
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBContainer,
  MDBCol,
  MDBBtn,
  MDBIcon,
} from "mdbreact"

const NavbarMenu = () => {
  const [ isOpen, setIsOpen ] = useState(false)

  const renderTabs = (tabNames) => {
    return (
      <>
        {tabNames.map((tabName) => {
          return <Link className="nav-link" activeClassName="active" to={`/${tabName}`} key={`${tabName}`}>{tabName}</Link>
        })}
      </>
    )
  }

  const toggleCollapse = () => {
    setIsOpen(!isOpen)
  }

  const data = useStaticQuery(graphql`
    query {
      contentfulHomeAndNavigation {
        tabNames
        tagline
      }
    }
  `)

  let tabs = renderTabs(data.contentfulHomeAndNavigation.tabNames)

  return (
    <MDBContainer id="header" className="py-5">
      <MDBBtn onClick={() => toggleCollapse()}>
        Try me
      </MDBBtn>

      {isOpen ? (
        <MDBContainer isOpen={isOpen}>
          <Link className="nav-link" activeClassName="active" to="/">Home</Link>
          {tabs}
        </MDBContainer>
      ) : null }

    </MDBContainer>
  )
}

export default NavbarMenu
