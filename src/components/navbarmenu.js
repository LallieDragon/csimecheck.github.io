import React, { useState } from "react"
import { graphql, useStaticQuery, } from "gatsby"
import { Link } from "gatsby"
import { VelocityComponent, VelocityTransitionGroup } from "velocity-react"

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

const NavbarMenu = (props) => {
  const [ isOpen, setIsOpen ] = useState(false)

  const renderTabOverlay = (tabNames) => {
    console.log(isOpen)
    if (isOpen) {
      return (
        <div className="overlay">
            <li className={`nav-item-container nav-item-${0}`} enter={{animation: "slideDown"}} leave={{animation: "slideUp"}}>
              <Link className="nav-item" activeClassName="active" to="/">Home</Link>
            </li>

          {tabNames.map((tabName, index) => {
            return (
              <li className={`nav-item-container nav-item-${index + 1}`} enter={{animation: "slideDown"}} leave={{animation: "slideUp"}}>
                <Link className={`nav-item`} activeClassName="active" to={`/${tabName}`} key={`${tabName}`}>{tabName}</Link>
              </li>
            )
          })}
        </div>
      )
    }
    return null
    // else if (!isOpen) {
    //   return (
    //     <MDBContainer className="overlay">
    //       <nav role="navigation">
    //         <ul>
    //           <Link className="nav-item nav-item-0" activeClassName="active" to="/">Home</Link>
    //           {tabNames.map((tabName, index) => {
    //             return <Link className={`nav-item nav-item-${index+1}`} activeClassName="active" to={`/${tabName}`} key={`${tabName}`}>{tabName}</Link>
    //           })}
    //         </ul>
    //       </nav>
    //     </MDBContainer>
    //   )
    // }

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

  let tabOverlay = renderTabOverlay(data.contentfulHomeAndNavigation.tabNames)

  return (
    <MDBContainer id={`${props.localId}`}>
      <MDBBtn onClick={() => toggleCollapse()}>
        Try me
      </MDBBtn>
      <VelocityTransitionGroup componenent="MDBRow" enter="slideDown" leave="slideUp">
        {tabOverlay}
      </VelocityTransitionGroup>
    </MDBContainer>
  )
}

// <VelocityComponent display="null" enter={{ animation: "slideDown", duration: '150' }} leave={{ animation: "slideUp", duration: '150'}}>
//
// </VelocityComponent>


export default NavbarMenu
