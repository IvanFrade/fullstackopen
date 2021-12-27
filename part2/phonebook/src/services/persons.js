import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons/'

const getAll = () => {
    return axios
        .get(baseUrl)
        .then(response => response.data)
        .catch(error => console.log(error))
}

const create = (newPerson) => {
    return axios
        .post(baseUrl, newPerson)
        .then(response => response.data)
        .catch(error => console.log(error))
}

const deleteFromServer = (id) => {
    return axios
        .delete(baseUrl + id)
        .then(request => request.data)
        .catch(error => console.log(error))
}

const update = (newPerson) => {
    return axios   
        .put(baseUrl + newPerson.id, newPerson)
        .then(request => request.data)
        .catch(error => console.log(error))
}

const exportedObject = { getAll, create, deleteFromServer, update }

export default exportedObject
