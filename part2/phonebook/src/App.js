import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'
import Notification from './components/Notification'
import './index.css'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [notification, setNotification] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addNumber = (event) => {

    (persons.find(person => person.name === newName))
    ? updatePerson(event)
    : addPerson(event)
  }

  const addPerson = (event) => {
    event.preventDefault()

    const newPerson = { 
      name: newName, 
      number: newNumber
    }
      
    personService
      .create(newPerson)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNotification({
          message: `Added ${newName}`, 
          type: 'infoMsg'
        })
        setTimeout(() => setNotification(null), 3000)
        setNewName('')
        setNewNumber('')
      })
  }

  const updatePerson = (event) => {
    event.preventDefault()
    
    if (window.confirm(`${newName} is already added to the phonebook. Replace the old number with a new one?`)) {
      const updatedPerson = {...persons.find(person => person.name === newName), number: newNumber}

      personService
        .update(updatedPerson.id, updatedPerson)
        .then(returnedPerson => {
          setPersons(persons.map(person => person.id !== returnedPerson.id ? person : returnedPerson))
          setNotification({
            message: `Updated ${newName}`, 
            type: 'infoMsg'
          })
          setTimeout(() => setNotification(null), 3000)
          setNewName('')
          setNewNumber('')
        })
        .catch(error => {
          setNotification({
            message: `Information of ${newName} has already been removed from server`, 
            type: 'errorMsg'
          })
          setTimeout(() => setNotification(null), 3000)
          setPersons(persons.filter(person => person.name !== newName))
          setNewName('')
          setNewNumber('')
        })
    }
  }

  const deletePerson = id => {
    const name = persons.find(person => person.id === id).name

    if (window.confirm(`Delete ${name}?`)) {
      personService
        .remove(id)
        .then(() => setPersons(persons.filter(person => person.id !== id)))
    }
  }

  const handleNewName = (event) => setNewName(event.target.value)
  const handleNewNumber = (event) => setNewNumber(event.target.value)
  const handleFilterChange = (event) => setFilter(event.target.value.toLowerCase())

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification notification={notification} />
      <Filter 
        filter={filter} 
        handleFilterChange={handleFilterChange} 
      />

      <h2>Add a new person</h2>
      <PersonForm
        addNumber={addNumber}
        newName={newName}
        handleNewName={handleNewName}
        newNumber={newNumber}
        handleNewNumber={handleNewNumber}
      />

      <h2>Numbers</h2>
      <Persons 
        persons={persons}
        filter={filter} 
        deletePerson={deletePerson}
      />
    </div>
  )
}

export default App
