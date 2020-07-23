import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from './landingPage'
import AboutMe from './aboutMe';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';

const Main =() => (

  <Switch>
    <Route path ="/" component = {LandingPage}/>
    <Route path = "/aboutMe" component ={AboutMe}/>
    <Route path = "/contact" component ={Contact}/>
    <Route path = "/projects" component ={Projects}/>
    <Route path = "/resume" component ={Resume}/>
  </Switch>

)
export default Main