import axios from 'axios'

const URL = 'http://localhost:3003/api/tasks'

export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGE',
    payload: event.target.value
})

export const search = () => {
    return (dispatch, getState) => {
        const description = getState().task.description
        const search = description ? `&description__regex=/${description}/` : ''
        const request = axios.get(`${URL}?sort=-creationData${search}`)
            .then(resp => dispatch({type: 'TASK_SEARCHED', payload: resp.data}))
    }
}

export const add = ( description ) => {
    return dispatch => {
        axios.post(URL, { description })
            .then(resp => dispatch(clear()))
            .then(resp => dispatch(search()))
    }
}

export const markAsDone = (task) => {
    return dispatch => {
        axios.put(`${URL}/${task._id}`, { ...task, done: true })
            .then(resp => dispatch(search()))
    }
}

export const markAsPending = (task) => {
    return dispatch => {
        axios.put(`${URL}/${task._id}`, {...task, done: false})
            .then(resp => dispatch(search()))
    }
}

export const remove = (task) => {
    return dispatch => {
        axios.delete(`${URL}/${task._id}`)
            .then(resp => dispatch(search()))
    }
}

export const clear = () => {
    return [{ type: 'TASK_CLEAR' }, search()]
}