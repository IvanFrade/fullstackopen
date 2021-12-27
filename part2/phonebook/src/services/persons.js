import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons/'

const getAll = () => {
    return axios
        .get(baseUrl)
        .then(response => response.data)
        .catch(error => console.log(error))
}

const create = (newObject) => {
    return axios
        .post(baseUrl, newObject)
        .then(response => response.data)
        .catch(error => console.log(error))
}

const deleteFromServer = (id) => {
    return axios
        .delete(baseUrl + id)
        .then(request => request.data)
        .catch(error => console.log(error))
}

const exportedObject = { getAll, create, deleteFromServer }

export default exportedObject
