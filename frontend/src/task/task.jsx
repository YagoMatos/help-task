import React from 'react'

import PageHeader from '../template/pageHeader'
import TaskForm from './taskForm'
import TaskList from './taskList'

export default props => (
    <div>
        <TaskForm /> 
        <TaskList /> 
    </div>
)
