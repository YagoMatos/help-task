import React from 'react'
//hashHistory to navigation 
import { Router, Route, Redirect, hashHistory } from 'react-router'

import HelpTask from '../task/task'

export default props => (
    <Router history={hashHistory}>
        <Router path='/helptasks' component={HelpTask}/>

        {/*Every time that there is invalid url, then redirect to home*/}
        <Redirect from='*' to='/helptasks'/>
    </Router>
)
