import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { changeDescription, search } from './taskActions'

class TaskForm extends Component {
    constructor(props){
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount(){
        this.props.search()
    }

    keyHandler(e) {
        if(e.key === 'Enter'){
            e.shiftKey ? this.props.handleSearch() : this.props.handleAdd()
        } else if (e.key === 'Escape'){
            this.props.handleClear()
        }
    
    }

    render(){
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
                        onClick={this.props.handleAdd}></IconButton>   
                    <IconButton style='info' icon='search'
                        onClick={this.props.handleSearch}></IconButton>   
                <IconButton style='default' icon='close'
                        onClick={this.props.handleClear}></IconButton>
                </Grid>
            </div>  
       )
    }    
}


  
const mapStateToProps = state => ({ description: state.task.description})
const mapDispachToProps = dispach =>
     bindActionCreators({ changeDescription, search}, dispach)
export default connect(mapStateToProps, mapDispachToProps)(TaskForm)