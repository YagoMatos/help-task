import axios from 'axios'

const URL = 'http://localhost:3003/api/tasks'

export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGE',
    payload: event.target.value
})

export const search = () => {
    const request = axios.get(`${URL}?sort=-creationData`)
    return {
        type: 'TASK_SEARCHED',
        payload: request
    }
}