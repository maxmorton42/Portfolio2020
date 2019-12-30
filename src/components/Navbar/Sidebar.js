import React from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import { Container, Spacer, NavWrapper, NavButton, NavLink1 } from './styles'

const SidebarExampleVisible = () => (

    <Sidebar
     as={Menu}
    >
    
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
    </Sidebar>



 
)

export default SidebarExampleVisible
