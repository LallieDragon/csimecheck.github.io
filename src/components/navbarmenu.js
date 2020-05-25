import React, { useState } from "react"
import { graphql, useStaticQuery, } from "gatsby"
import { Link } from "gatsby"
import { VelocityTransitionGroup } from "velocity-react"
import {
  MDBContainer,
  MDBBtn,
} from "mdbreact"

import Animations from './animations'

const NavbarMenu = (props) => {
  const [ isOpen, setIsOpen ] = useState(false)

  const renderTabs = (tabNames) => {
    let tabs = tabNames.map((tabName, index) => {
      let urls = tabNames.map((tabName) => {
        if (tabName === "Home") {
          return "/"
        }
        return ("/" + tabName)
      })

      return (
        <div className={`nav-item-container nav-item-${index}`} key={tabName}>
          <Link className={`nav-item`} activeClassName="active" to={urls[index]} key={`${tabName}`}>{tabName}</Link>
        </div>
      )
    })

    return tabs
  }


  const data = useStaticQuery(graphql`
    query {
      contentfulHomeAndNavigation {
        tabNames
        tagline
      }
    }
  `)

  console.log(Animations.In)

  var enterAnimation = {
    animation: Animations.In,
    stagger: 500,
    duration: 500,
    backwards: true,
    display: 'block',
    style: {
      // Since we're staggering, we want to keep the display at "none" until Velocity runs
      // the display attribute at the start of the animation.
      display: 'none',
    },
  };

  var leaveAnimation = {
    animation: Animations.Out,
    stagger: 500,
    duration: 500,
    backwards: true,
  };

  let tabs = renderTabs(data.contentfulHomeAndNavigation.tabNames)

  return (
    <MDBContainer id={`${props.localId}`}>
      <div className="d-flex flex-1 flex-col align-items-center">
        <MDBBtn onClick={() => setIsOpen(!isOpen)}>
          Try me
        </MDBBtn>
        <VelocityTransitionGroup
          componenent="div"
          className="flex-1"
          leave={leaveAnimation}
          enter={enterAnimation}
        >
          {isOpen ? tabs : null}
        </VelocityTransitionGroup>
      </div>
    </MDBContainer>
  )
}



export default NavbarMenu
