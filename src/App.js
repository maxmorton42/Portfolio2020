import React from 'react';
import Education from './components/Education';
import Me from './components/Me';
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects';
import Work from './components/Work';
import { Container, } from "semantic-ui-react";
import { Switch, Route } from "react-router-dom";



const App = () => {
  return (
    <>
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
      </Switch>
      </Container>
    </>
  );
};

export default App;
