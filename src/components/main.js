import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import Register from './register';
import Contact from './contact';
import LogIn from './logIn';
import AboutUs from './aboutUs';




const Main = () => (
	<Switch>
	 <Route exact path = "/" component = {LandingPage} />
	 <Route path = "/register" component = {Register} />
	 <Route path = "/contact" component = {Contact} />
	 <Route path = "/LogIn" component = {LogIn} />
	 <Route path = "/aboutUs" component = {AboutUs} />
	</Switch>
)

export default Main;