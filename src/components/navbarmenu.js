import React, { useState } from "react"
import { graphql, useStaticQuery, } from "gatsby"
import { Link } from "gatsby"
import {
  // MDBNavbar,
  // MDBNavbarNav,
  // MDBNavItem,
  // MDBNavbarToggler,
  // MDBCollapse,
  MDBContainer,
  // MDBCol,
  MDBBtn,
  // MDBIcon,
} from "mdbreact"

const NavbarMenu = () => {
  const [ isOpen, setIsOpen ] = useState(false)

  const renderTabs = (tabNames) => {
    if (isOpen) {
      console.log(isOpen)
      return (
        <div className="overlay-slide-up">
          <Link className="nav-item nav-item-0" activeClassName="active" to="/">Home</Link>
          {tabNames.map((tabName, index) => {
            return <Link className={`nav-item nav-item-${index+1}`} activeClassName="active" to={`/${tabName}`} key={`${tabName}`}>{tabName}</Link>
          })}
        </div>
      )
    } else if (!isOpen) {
      console.log(isOpen)
      return (
        <div className="overlay-slide-down">
          <Link className="nav-item nav-item-0" activeClassName="active" to="/">Home</Link>
          {tabNames.map((tabName, index) => {
            return <Link className={`nav-item nav-item-${index+1}`} activeClassName="active" to={`/${tabName}`} key={`${tabName}`}>{tabName}</Link>
          })}
        </div>
      )
    }

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

  // {tabNames.map(function(name, index) {
  //   var style = '';
  //
  //   if (focused === index) {
  //     style = 'focused'
  //   }
  //
  //   return (
  //       <button key={name} className={`tab ${style}`} onClick={() => handleClick(index)}>{name}</button>
  // )})}

  return (
    <MDBContainer id="header" className="py-5">
      <MDBBtn onClick={() => toggleCollapse()}>
        Try me
      </MDBBtn>

      {isOpen ? (
        <MDBContainer className="d-flex">
          {tabs}
        </MDBContainer>
      ) : null }

    </MDBContainer>
  )
}

export default NavbarMenu
