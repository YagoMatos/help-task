import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import IconButton from '../template/iconButton'
import { markAsDone, markAsPending, remove } from './taskActions'

const TaskList = props => {
    
    const renderRows = () => {
        const list = props.list || []
        return list.map(task => (
            <tr key={task._id}>
                <td className={task.done ? 'markedAsDone' : ''} >{task.description}</td>
                <td>
                    <IconButton style='success' icon='check' hide={task.done}
                        onClick={() => props.markAsDone(task)}></IconButton>   
                    <IconButton style='warning' icon='undo' hide={!task.done}
                        onClick={() => props.markAsPending(task)}></IconButton>   
                    <IconButton style='danger' icon='trash-o' hide={!task.done}
                        onClick={() => props.remove(task)}></IconButton>   
                </td>
            </tr>
        ))
    }

    return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>Descriptions</th>
                        <th className='tableActions'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        )
}

const mapStateToProps = state => ({list: state.task.list})
const mapDispachToProps = dispach => 
    bindActionCreators({ markAsDone, markAsPending, remove }, dispach)

export default connect(mapStateToProps, mapDispachToProps)(TaskList)