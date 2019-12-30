// import React from "react";
// import { Menu } from 'semantic-ui-react';
// import { Container, Spacer, NavWrapper, NavButton, NavLink1 } from './styles'

// const Navbar = () => (
//   <Container>
//     <Spacer />
//     <NavWrapper>
//   <Menu postion='right'>
//     <NavLink1 to="/">
//       <NavButton>
//         Intro
//       </NavButton>
//     </NavLink1>
//     <NavLink1 to="/projects">
//       <NavButton>
//         Projects
//       </NavButton>
//     </NavLink1>
//     <NavLink1 to="/Work">
//       <NavButton>
//         Work
//       </NavButton>
//     </NavLink1>
//     <NavLink1 to="/education">
//       <NavButton>
//         Education
//       </NavButton>
//     </NavLink1>
//     <NavLink1 to="/contactme">
//       <NavButton>
//         Contact
//       </NavButton>
//     </NavLink1>
//   </Menu> 
//   </NavWrapper>
//   </Container>


// )

// export default Navbar;

import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted>
        <Menu inverted secondary>
          <Link to="/">
          <Menu.Item
            name='About Me'
            active={activeItem === 'About Me'}
            onClick={this.handleItemClick}
          />
          </Link>
          <Link to="/education">
          <Menu.Item
            name='Education'
            active={activeItem === 'Education'}
            onClick={this.handleItemClick}
          />
          </Link>
          <Link to="/projects">
          <Menu.Item
            name='Projects'
            active={activeItem === 'Projects'}
            onClick={this.handleItemClick}
          />
          </Link>
          <Link to="/Work">
          <Menu.Item
            name='Work'
            active={activeItem === 'Work'}
            onClick={this.handleItemClick}
          />
          </Link>
          <Link to="/contactme">
          <Menu.Item
            name='Contact'
            active={activeItem === 'Contact'}
            onClick={this.handleItemClick}
          />
          </Link>
        </Menu>
      </Segment>
    )
  }
}

