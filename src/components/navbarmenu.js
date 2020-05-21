import React, { useState } from "react"
import { graphql, useStaticQuery, } from "gatsby"
import { Link } from "gatsby"
import { VelocityTransitionGroup } from "velocity-react"
import {
  MDBContainer,
  MDBBtn,
} from "mdbreact"

const NavbarMenu = (props) => {
  const [ isOpen, setIsOpen ] = useState(false)

  const renderTabOverlay = (tabNames, isOpen) => {
    console.log(isOpen)
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


  const data = useStaticQuery(graphql`
    query {
      contentfulHomeAndNavigation {
        tabNames
        tagline
      }
    }
  `)

  var enterAnimation = {
    animation: "slideDown",
    duration: 1500,
    backwards: true,
    display: 'block',

    style: {
      opacity: 1
    },
  };

  var leaveAnimation = {
    animation: "slideUp",
    duration: 1500,
    backwards: true,
    style: {
      opacity: 0,
    }
  };

  return (
    <MDBContainer id={`${props.localId}`}>
      <MDBBtn onClick={() => setIsOpen(!isOpen)}>
        Try me
      </MDBBtn>
      <VelocityTransitionGroup componenent="div" className="velocity-transition" leave={leaveAnimation} enter={enterAnimation}>
        {isOpen ? renderTabOverlay(data.contentfulHomeAndNavigation.tabNames, isOpen) : null}
      </VelocityTransitionGroup>
    </MDBContainer>
  )
}



export default NavbarMenu
