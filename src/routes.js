import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './components/Mainview/home/home';
import About from './components/Mainview/about/about';
import Blogs from './components/Mainview/blogs/blogs';
import Contacts from './components/Mainview/contacts/contacts';
import Destinations from './components/Mainview/destinations/destinations';
import Services from './components/Mainview/services/services';

import Country from './components/Mainview/destinations/country/country';

const Routes = () => {
    return(
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/blogs' component={Blogs}/>
            <Route exact path='/contacts' component={Contacts}/>
            <Route exact path='/destinations' component={Destinations}/>
            <Route exact path='/destinations/:country' component={Country}/>
            <Route exact path='/services' component={Services}/>
        </Switch>
    );
}

export default Routes;