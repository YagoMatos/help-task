import React from 'react'
//hashHistory to navigation 
import { Router, Route, Redirect, hashHistory } from 'react-router'

import HelpTask from '../task/task'
import About from '../about/about'

export default props => (
    <Router history={hashHistory}>
        <Router path='/helptasks' component={HelpTask}/>
        <Router path='/about' component={About}/>

        {/*Every time that there is invalid url, then redirect to home*/}
        <Redirect from='*' to='/helptasks'/>
    </Router>
)
