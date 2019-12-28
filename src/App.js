import React from 'react';
import Contact_Me from './components/Contact_Me'
import Education from './components/Education';
import Me from './components/Me';
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects';
import styled from 'styled-components';
import Work from './components/Work';
import { Container, } from "semantic-ui-react";
import { Switch, Route } from "react-router-dom";



const App = () => {
  return (
    <>
    <AppContainer>
    <Navbar />
     <Container>
      <Switch>
        <Route exact path="/" component={Me}>
        </Route>
        <Route path="/projects" component={Projects}>
        </Route>
        <Route path="/work" component={Work}>
        </Route>
        <Route path="/education" component={Education}>
        </Route>
        <Route exact path="/contactme" component={Contact_Me} />
      </Switch>
      </Container>
      </AppContainer>
    </>
  );
};

const AppContainer = styled.div`
background: linear-gradient(to bottom right, aliceblue, black);
overflow: scroll;
width: 100vw;
height: 100vh;
`;


export default App;
