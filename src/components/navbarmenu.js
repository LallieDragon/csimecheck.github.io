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
  const [ collapseId, setCollapseId ] = useState("")
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

  const toggleCollapse = (Id) => {
    console.log(Id)
    console.log(collapseId)
    setIsOpen(!isOpen)
    setCollapseId(prevState => ({
      collapseId: prevState.collapseId !== Id ? Id : ""
    }))
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
      <MDBBtn onClick={() => toggleCollapse("basicCollapse")}>
        Try me
      </MDBBtn>

      <MDBCollapse id="basicCollapse" isOpen={isOpen}>
        <Link className="nav-link" activeClassName="active" to="/">Home</Link>
        {tabs}
      </MDBCollapse>
    </MDBContainer>
  )
}

// <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
// <MDBNavbarNav right>
//   <MDBNavItem>
//     <Link className="nav-link" activeClassName="active" to="/">Home</Link>
//   </MDBNavItem>
//   <MDBNavItem>
//     <Link className="nav-link" activeClassName="active" to="/services">Services</Link>
//   </MDBNavItem>
//   <MDBNavItem>
//     <Link className="nav-link" activeClassName="active" to="/portfolio">Portfolio</Link>
//   </MDBNavItem>
//   <MDBNavItem>
//     <Link className="nav-link" activeClassName="active" to="/policies">Policies</Link>
//   </MDBNavItem>
//   <MDBNavItem>
//     <Link className="nav-link" activeClassName="active" to="/contact">Contact</Link>
//   </MDBNavItem>
// </MDBNavbarNav>
// </MDBCollapse>


export default NavbarMenu
