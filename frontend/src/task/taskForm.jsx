import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { add, changeDescription, search, clear } from './taskActions'

class TaskForm extends Component {
    constructor(props){
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount(){
        this.props.search()
    }

    keyHandler(e) {
        //extract attr of methods
        const { add, clear, search, description } = this.props
        if(e.key === 'Enter'){
            e.shiftKey ? search() : add(description)
        } else if (e.key === 'Escape'){
            clear()
        }
    
    }

    render(){
        const { add, clear, search, description } = this.props
        return(
            <div role='form' className='taskForm'>
                <Grid cols='12 9 10'>
                    <input id='descrition' className='form-control' 
                        onChange={this.props.changeDescription}
                        onKeyUp={this.keyHandler}
                        placeholder='Adicione uma tarefa'
                        value={this.props.description}/>
                </Grid>            
                
                <Grid cols='12 3 2'>
                    <IconButton style='primary' icon='plus'
                        onClick={() => add(description)}></IconButton>   
                    <IconButton style='info' icon='search'
                        onClick={search}></IconButton>   
                <IconButton style='default' icon='close'
                        onClick={this.props.clear}></IconButton>
                </Grid>
            </div>  
       )
    }    
}


  
const mapStateToProps = state => ({ description: state.task.description})
const mapDispachToProps = dispach =>
     bindActionCreators({ add, changeDescription, search, clear}, dispach)
export default connect(mapStateToProps, mapDispachToProps)(TaskForm)