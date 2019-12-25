import React from "react";
import { Menu } from 'semantic-ui-react';
import { Container, Spacer, NavWrapper, NavButton, NavLink1 } from './styles'

const Navbar = () => (
  <Container>
    <Spacer />
    <NavWrapper>
  <Menu postion='right'>
    <NavLink1 to="/">
      <NavButton>
        Intro
      </NavButton>
    </NavLink1>
    <NavLink1 to="/projects">
      <NavButton>
        Projects
      </NavButton>
    </NavLink1>
    <NavLink1 to="/Work">
      <NavButton>
        Work
      </NavButton>
    </NavLink1>
    <NavLink1 to="/education">
      <NavButton>
        Education
      </NavButton>
    </NavLink1>
    <NavLink1 to="/contactme">
      <NavButton>
        Contact
      </NavButton>
    </NavLink1>
  </Menu> 
  </NavWrapper>
  </Container>
)

export default Navbar;

